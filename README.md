# AHK - Administración de Sistemas

Bienvenido al repositorio de **Administración de Sistemas (AHK)**. Este repositorio contiene el material teórico (presentaciones interactivas en Slidev) y los laboratorios prácticos paso a paso para la formación en DevOps, MLOps, Kubernetes y Computación de Alto Rendimiento (HPC).

---

## 🌐 Portal Web & GitHub Pages

Tanto las filminas teóricas como las guías de laboratorio están disponibles y compiladas en el portal interactivo:

👉 **[https://ezequieljsosa.github.io/ahk-ads/](https://ezequieljsosa.github.io/ahk-ads/)**

---

## 📑 Presentaciones Teóricas (`presentaciones/`)

- 🚀 **[Introducción a DevOps](https://ezequieljsosa.github.io/ahk-ads/devops/)** — Cultura, CI/CD Pipelines, GitHub Actions e Infraestructura como Código.
- 🤖 **[Introducción a MLOps](https://ezequieljsosa.github.io/ahk-ads/mlops/)** — Ciclo de Vida de ML, Data Drift, Experiment Tracking (MLflow) y Servido de Modelos.

---

## 🛠️ Guías Prácticas (`practicas/`)

- 🤖 **[Práctica de MLOps](https://ezequieljsosa.github.io/ahk-ads/practicas/practica-mlops.html)** — DVC, MLflow Server, FastAPI en Docker y Monitoreo de Data Drift con Evidently AI. (`practicas/practica-mlops.md`)
- ☸️ **[Práctica de Kubernetes (k3d)](https://ezequieljsosa.github.io/ahk-ads/practicas/practica-k3d.html)** — Creación de clústeres locales ligeros con k3d, Deployments y Services. (`practicas/practica-k3d.md`)
- ⚡ **[Práctica de HPC](https://ezequieljsosa.github.io/ahk-ads/practicas/practica-hpc.html)** — Slurm Workload Manager, ejecución de Jobs paralelos y entrenamiento. (`practicas/practica-hpc.md`)
- 🎮 **[Práctica de Extensión GPU](https://ezequieljsosa.github.io/ahk-ads/practicas/practica-gpu-extension.html)** — Configuración e integración de soporte CUDA / GPU en clústeres. (`practicas/practica-gpu-extension.md`)

---

## 💻 Desarrollo Local

Para compilar y previsualizar localmente las presentaciones y las guías HTML:

```bash
cd presentaciones
npm install
node build-all.js
python3 -m http.server 4173 --directory dist
```
Abre en tu navegador: `http://localhost:4173`
