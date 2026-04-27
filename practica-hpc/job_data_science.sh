#!/bin/bash
#SBATCH --job-name=hyperparameter_search
#SBATCH --array=0-2               # Lanza 3 tareas (0, 1, 2)
#SBATCH --output=/home/xenon/results/slurm_%A_%a.out # Salida estándar de Slurm
# #SBATCH --mem=1M                # Opcional: Límite de memoria (desactivado en simulador)

LRS=(0.01 0.001 0.0001)
CURRENT_LR=${LRS[$SLURM_ARRAY_TASK_ID]}

python3 /train_model.py $CURRENT_LR $SLURM_ARRAY_TASK_ID
