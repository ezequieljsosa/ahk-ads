# Práctica de Kubernetes con k3d

Esta guía te llevará a través de los conceptos fundamentales de Kubernetes (K8s) utilizando **k3d**, una herramienta que corre clusters de Kubernetes dentro de contenedores Docker. Es ideal para aprender porque es extremadamente rápido y consume pocos recursos.

### ¿Qué vamos a aprender?
En esta práctica pasaremos por el ciclo de vida completo de una aplicación en K8s:
1.  **Arquitectura de Cluster**: Cómo se comunican tu PC y el cluster.
2.  **Inmutabilidad**: Por qué las imágenes se construyen y se "importan" (no se editan en caliente).
3.  **Ingress**: En K8s no es una buena práctica acceder directamente a los pods, sino que usamos un "Ingress Controller" que gestiona el tráfico de entrada.
4.  **Resiliencia y Escalado**: Revivir aplicaciones muertas automáticamente.
5.  **Persistencia**: Cómo lograr que los datos sobrevivan aunque el pod sea destruido.

### Diagrama de Flujo de Red
Así es como llegará tu petición desde el navegador hasta tu código:

```mermaid
graph TD
    User[Navegador: localhost:8080] -->|Mapeo de Puerto| LB[k3d LoadBalancer :80]
    LB -->|Recibe Tráfico| Traefik[Traefik Ingress Controller]
    Traefik -->|Regla de Ingress| SVC[Service: primerdeploy]
    SVC -->|Balanceo| Pod[Pod: Apache/Python]
    Pod -->|Escribe| Vol[Volumen: $HOME/datos-k8s]
```

---

## Etapa 0: Instalación de herramientas
Si no las tienes, instala `k3d` y `kubectl`:
```bash
# k3d
curl -s https://raw.githubusercontent.com/k3d-io/k3d/main/install.sh | TAG=v5.6.0 bash

# kubectl
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
chmod +x ./kubectl
sudo mv ./kubectl /usr/local/bin/kubectl
```

## Etapa 1: Levantar el cluster
Creamos el cluster mapeando el puerto 80 del LoadBalancer interno al 8080 de tu PC.

```bash
mkdir -p $HOME/datos-k8s
k3d cluster delete ahk-cluster || true
k3d cluster create ahk-cluster \
  -p "8080:80@loadbalancer" \
  -v "$HOME/datos-k8s:/data@all" \
  --agents 1 --wait
```

## Etapa 2: Primer Deployment (Apache)
**Importante**: K8s es inmutable. Si cambias algo, generas una imagen nueva con un **Tag** (ej: `:v1`). **Nunca** uses `:latest` en producción ni en k3d porque K8s intentará descargarla de internet y fallará.

**Dockerfile**
```dockerfile
FROM httpd
RUN echo "Hola desde Apache en K8s!" > /usr/local/apache2/htdocs/index.html
```

```bash
# Creamos la imagen de apache a probar
docker build -t unaapache:v1 .
k3d image import unaapache:v1 -c ahk-cluster

# Desplegamos la imagen y creamos el pod / contenedor
kubectl create deployment primerdeploy --image=unaapache:v1
kubectl expose deployment primerdeploy --port=80

# Ingress: Sin esto, localhost:8080 dará error 404
cat <<EOF | kubectl apply -f -
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: main-ingress
spec:
  rules:
  - http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: primerdeploy
            port:
              number: 80
EOF
```
**Prueba**: `curl http://localhost:8080`

## Etapa 3: Confiabilidad (App Python)

Vamos a armar una aplicacion con un boton de autodestruccion, para entender como con K8s nos podemos recuperar de las fallas.

**server.py**
```python
from flask import Flask
import os
app = Flask(__name__)
@app.route('/app')
def hello_world(): return 'Hola Mundo! Soy la App de Python'
@app.route('/app/romper')
def romper(): os._exit(1)
if __name__ == '__main__': app.run(host='0.0.0.0', port=5000)
```

```bash
# Creamos la imagen
docker build -t webappvolatil:v1 .
k3d image import webappvolatil:v1 -c ahk-cluster
# Desplegamos nuevamente
kubectl create deployment segundodeploy --image=webappvolatil:v1
kubectl expose deployment segundodeploy --port=5000 --name=segundodeployservice

# Actualizamos el Ingress para que convivan Apache y Python
cat <<EOF | kubectl apply -f -
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: main-ingress
spec:
  rules:
  - http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: primerdeploy
            port:
              number: 80
      - path: /app
        pathType: Prefix
        backend:
          service:
            name: segundodeployservice
            port:
              number: 5000
EOF
```

## Etapa 4: Escalado y Resiliencia
```bash
kubectl scale deployment/segundodeploy --replicas 3
watch kubectl get pods
```
**Ejercicio**: Abre otra terminal y corre `curl http://localhost:8080/app/romper`. Observa cómo el pod muere y K8s crea uno nuevo para mantener las 3 réplicas que pediste.

## Etapa 5: Rollouts (Actualizaciones)

A medida que se avanza en el desarrollo, vamos a querer cambiar las versiones de nuestra app. 
Vamos a ver una forma de hacerlo fácilmente usando k8s.

```bash
# Cambia algo en server.py... por ejemplo texo

# Volvemos a armar la imagen
docker build -t webappvolatil:v2 .
k3d image import webappvolatil:v2 -c ahk-cluster

# Realizamos el rollout
kubectl set image deployment/segundodeploy webappvolatil=webappvolatil:v2
kubectl rollout status deployment/segundodeploy
```

## Etapa 7: Persistencia (PV/PVC)
Hasta ahora, si un pod muere, todos sus archivos se pierden. Para que K8s use tu carpeta del host de forma permanente y los datos sobrevivan, debemos usar Volúmenes Persistentes. Usaremos `storageClassName: manual`.

**volumen.yml** (Define el volumen en el disco)
```yaml
apiVersion: v1
kind: PersistentVolume
metadata:
  name: mivol
spec:
  storageClassName: manual
  capacity:
    storage: 1Gi
  accessModes: [ReadWriteOnce]
  persistentVolumeReclaimPolicy: Retain
  hostPath:
    path: /data
    type: Directory
```

**persistencia.yml** (Pide un pedazo de ese volumen para nuestra app)
```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: mivol-con
spec:
  storageClassName: manual
  accessModes: [ReadWriteOnce]
  resources:
    requests: {storage: 1Gi}
```

```bash
kubectl apply -f volumen.yml
kubectl apply -f persistencia.yml
```

### Ejercicio Práctico: Conectando el Volumen a la App Python
Vamos a modificar nuestra App para que guarde un log de visitas en este volumen. Así, podrás ver los archivos modificados en vivo desde tu PC.

1. **Modifica `server.py`**:
```python
from flask import Flask
import os
import datetime

app = Flask(__name__)

@app.route('/app')
def hello_world(): 
    # Escribimos un log en el volumen persistente
    try:
        with open('/data/visitas.txt', 'a') as f:
            f.write(f"Visita a las {datetime.datetime.now()}\n")
    except Exception as e:
        print("Error escribiendo en volumen", e)
    return 'Hola Mundo! Visita registrada en el volumen.'

@app.route('/app/romper')
def romper(): os._exit(1)

if __name__ == '__main__': app.run(host='0.0.0.0', port=5000)
```

2. **Crea la nueva versión de la imagen**:
```bash
docker build -t webappvolatil:v3 .
k3d image import webappvolatil:v3 -c ahk-cluster
```

3. **Actualiza el Deployment** para montar el volumen y usar la `v3` (`deployment-vol.yml`):
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: segundodeploy
spec:
  replicas: 1
  selector:
    matchLabels:
      app: segundodeploy
  template:
    metadata:
      labels:
        app: segundodeploy
    spec:
      containers:
      - name: python-app
        image: webappvolatil:v3
        ports:
        - containerPort: 5000
        volumeMounts:
        - name: datos-persistentes
          mountPath: /data
      volumes:
      - name: datos-persistentes
        persistentVolumeClaim:
          claimName: mivol-con
```

```bash
kubectl apply -f deployment-vol.yml
```

### Verificando la Persistencia
1. Ingresa a `http://localhost:8080/app` un par de veces para generar visitas.
2. **¡Mira tu PC local!** Abre el archivo en tu máquina:
   ```bash
   cat $HOME/datos-k8s/visitas.txt
   ```
   *Deberías ver las fechas de las visitas escritas por el Pod.*
3. **Mata el pod** (`curl http://localhost:8080/app/romper` o con `kubectl delete pod...`) y espera que K8s levante uno nuevo.
4. Genera más visitas y vuelve a revisar el archivo en tu PC. ¡El historial anterior no se perdió!

## Comandos de Verificación 
- `kubectl logs -f deployment/segundodeploy` (Ver qué pasa dentro)
- `kubectl describe pod [NOMBRE]` (Si el pod no levanta, aquí dice por qué)
- `kubectl get events --sort-by='.lastTimestamp'` (Historial de errores)

