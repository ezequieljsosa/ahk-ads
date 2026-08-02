#!/bin/bash
#SBATCH --job-name=entrenamiento_ia
#SBATCH --output=/home/xenon/results/resultado_gpu_%j.out
#SBATCH --nodes=1
#SBATCH --gres=gpu:1,vram:2048  # Pedimos 1 GPU y 2GB de VRAM

# Definimos una variable para que nuestro script de Python sepa cuánto pedimos
export VRAM_REQUESTED=2048

echo "Lanzando entrenamiento en el nodo: $SLURM_NODELIST"
srun python3 /train_gpu.py
