# Práctica: De Docker a HPC: Orquestación por Lotes con Slurm y Apptainer

## Introducción Conceptual: ¿Por qué HPC?
A diferencia de **Docker/Kubernetes**, donde los contenedores son servicios persistentes que esperan peticiones (servidores web, APIs), en **HPC (High Performance Computing)** los contenedores son herramientas efímeras. El orquestador (**Slurm**) no mantiene "vivos" los servicios, sino que gestiona una cola de trabajos (jobs) para ejecutar cálculos intensivos y liberar los recursos en cuanto terminan.

---

## Paso 1: Despliegue del Laboratorio
Utilizamos un cluster Slurm simplificado en un solo contenedor para ahorrar recursos.

### Archivo: `docker-compose.yml`
```yaml
version: "3.8"
services:
  slurm:
    image: xenonmiddleware/slurm:latest
    container_name: slurm-cluster
    volumes:
      - ./results:/home/xenon/results  # Carpeta compartida (Simula NFS)
    networks:
      - slurm_network
networks:
  slurm_network:
    driver: bridge
```
*Ejecución:* `docker compose up -d`

> **Nota para usuarios de Linux:** Los archivos en la carpeta `results/` serán creados por el usuario `root` dentro del contenedor. Si tienes problemas para editarlos o borrarlos desde tu máquina, puedes ejecutar `sudo chown -R $USER:$USER results/` al finalizar la práctica.

**Pregunta de feedback:** ¿Cuál es la principal diferencia visual entre el log de un contenedor de Nginx y el de este cluster Slurm al iniciar?

---

## Mapa del Cluster (Arquitectura)
Aunque todo corre en un contenedor, Slurm está configurado de forma distribuida:
*   **Controller (slurmctld):** El "cerebro". Gestiona la cola y decide dónde corre cada job.
*   **Compute Nodes (slurmd):** El contenedor simula 5 nodos (`node-0` a `node-4`) escuchando en puertos internos distintos.
*   **Shared Storage:** El volumen `./results` emula un sistema de archivos tipo **NFS** o **Lustre**, esencial en HPC para que todos los nodos accedan a los mismos datasets y resultados.

---

## Paso 2: Introspección del Cluster
HPC se basa en conocer tus recursos para no desperdiciarlos.

```bash
docker exec -it slurm-cluster sinfo
docker exec -it slurm-cluster scontrol show nodes
```
**Pregunta de feedback:** Si tuvieras un dataset de 100GB, ¿cómo influiría el número de CPUs y memoria que ves en `sinfo` al decidir cuántas tareas lanzar en paralelo?

---

## Paso 3: Ejecución Interactiva (`srun`)
Verificamos la respuesta inmediata del planificador.

```bash
docker exec -it slurm-cluster srun -n 4 hostname
```
**Pregunta de feedback:** Si ejecutas `srun` y no hay nodos libres, ¿qué crees que sucede con el comando en comparación con un `docker run` que falla por falta de recursos?

---

## Paso 4: Data Science real con Job Arrays
En lugar de un script vacío, simularemos una **Búsqueda de Hiperparámetros**. Entrenaremos 3 modelos en paralelo con diferentes tasas de aprendizaje (*learning rates*).

> **Nota técnica:** Usaremos `.format()` en lugar de *f-strings* (f"...") para asegurar compatibilidad con la versión de Python 3.5 instalada en este cluster simulado.

### Archivo: `train_model.py`
```python
import sys, time, random
lr = sys.argv[1]
job_id = sys.argv[2]

# Escribimos en el volumen compartido
output_path = "/home/xenon/results/resultado_{0}_{1}.log".format(job_id, lr)

with open(output_path, "w") as f:
    f.write(" Iniciando entrenamiento: Job {0} | Learning Rate: {1}\n".format(job_id, lr))
    time.sleep(5) # Simulación de cómputo
    accuracy = random.uniform(0.85, 0.99)
    f.write(" Resultado: Accuracy={0:.4f}\n".format(accuracy))
```

### Archivo: `job_data_science.sh`
```bash
#!/bin/bash
#SBATCH --job-name=hyperparameter_search
#SBATCH --array=0-2               # Lanza 3 tareas (0, 1, 2)
#SBATCH --output=/home/xenon/results/slurm_%A_%a.out # Salida estándar de Slurm
# #SBATCH --mem=1M                # Opcional: Límite de memoria (desactivado en simulador)

LRS=(0.01 0.001 0.0001)
CURRENT_LR=${LRS[$SLURM_ARRAY_TASK_ID]}

python3 /train_model.py $CURRENT_LR $SLURM_ARRAY_TASK_ID
```

### Envío al cluster
```bash
docker cp train_model.py slurm-cluster:/train_model.py
docker cp job_data_science.sh slurm-cluster:/job_ds.sh
docker exec -it slurm-cluster sbatch /job_ds.sh
```
**Pregunta de feedback:** ¿Cómo facilita la variable `$SLURM_ARRAY_TASK_ID` el escalado de experimentos masivos en ciencia de datos?

---

## Paso 5: Monitoreo y Persistencia
Como usamos un volumen compartido, ahora puedes ver los resultados **desde tu propia terminal** (fuera de Docker):

```bash
ls -l hpc-lab/results/
cat hpc-lab/results/*.log
```
**Pregunta de feedback:** Observa los nombres de los archivos. ¿Por qué es importante usar `%A` (Job ID) y `%a` (Array Index) en HPC?

---

## Paso 6: Apptainer y Seguridad
En HPC no usamos Docker directamente porque requiere privilegios de `root`. **Apptainer** (antes Singularity) permite ejecutar contenedores con el usuario del sistema, garantizando seguridad en clusters compartidos.

**Flujo de trabajo profesional:**
1.  **Desarrollo:** Creas y pruebas tu imagen en Docker (como en la Etapa 2).
2.  **Conversión:** Conviertes la imagen Docker a un archivo `.sif` de Apptainer.
3.  **Ejecución:** Corres el `.sif` en el cluster Slurm con `apptainer exec`.

**Verificación conceptual:**
```bash
docker exec -it slurm-cluster srun --version
```
**Pregunta de feedback:** ¿Qué ventaja tiene un archivo único `.sif` frente a las múltiples capas de Docker cuando hablamos de mover petabytes de datos en un supercomputador?

---

## El Ciclo Híbrido: De Entrenamiento (HPC) a Producción (K8s)

Para finalizar, observa cómo conectamos todo el curso:

1.  **Etapa HPC:** Usamos Slurm para entrenar variantes de un modelo en paralelo.
2.  **Selección:** Elegimos el resultado con mejor **Accuracy** de la carpeta `results/`.
3.  **Etapa K8s:** La API de Flask (Etapa 3) toma ese modelo y lo sirve a los usuarios finales.

### Reflexión Final:
*   ¿Por qué no sería eficiente entrenar este modelo directamente dentro de un Pod de Kubernetes?
*   ¿Cómo ha cambiado tu visión sobre el uso de contenedores después de pasar de una simple API en Docker a un cluster de alto rendimiento?

---

## Resolución de Problemas (Debug)
Si algo no funciona, revisa los logs del sistema:

### 1. ¿Por qué mi trabajo no arranca?
Mira el log del controlador:
```bash
docker exec -it slurm-cluster tail -n 20 /var/log/slurm/job_completions
```

### 2. ¿Cómo sé si los nodos están vivos?
```bash
docker exec -it slurm-cluster sinfo -R
```

### 3. Ver logs de ejecución en tiempo real
```bash
tail -f hpc-lab/results/*.log
```
