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
