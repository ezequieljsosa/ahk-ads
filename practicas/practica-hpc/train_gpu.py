# train_gpu.py (Compatible con Python 3.5.2)
import os
import sys
import time

def main():
    print("--- [GPU-MOCK] Iniciando Proceso de Deep Learning ---")
    
    # 1. Verificar si Slurm asignó el recurso GRES
    gres_alloc = os.getenv('SLURM_JOB_GRES', '')
    requested_vram = int(os.getenv('VRAM_REQUESTED', '0'))
    
    if 'gpu' not in gres_alloc:
        print("❌ ERROR: Este proceso requiere una GPU y no fue asignada.")
        sys.exit(1)

    print("✅ Dispositivo detectado: [AMD Radeon Virtualized Accelerator]")
    
    # 2. Simular uso de VRAM
    limit_vram = 4096
    print("📋 Solicitud de VRAM: {}MB / Disponible en Nodo: {}MB".format(requested_vram, limit_vram))
    
    if requested_vram > limit_vram:
        print("💥 FATAL ERROR: Out of Memory (OOM) en GPU.")
        print("No se pueden cargar los tensores en la memoria de video.")
        sys.exit(1)
    
    # 3. Simular Cómputo
    print("🚀 Entrenando redes neuronales...")
    for i in range(5):
        print("   Epoca {}: Procesando tensores...".format(i))
        time.sleep(1)
    
    print("✨ Entrenamiento completado exitosamente.")

if __name__ == "__main__":
    main()
