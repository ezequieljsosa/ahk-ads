---
layout: default
---

<div class="gamma-badge badge-integration mb-2">
Automatización en CI/CD/CT
</div>

<h2 class="text-3xl font-bold mb-4">
Pipelines de Entrenamiento: CI / CD / CT
</h2>

<p class="text-sm text-slate-300 mb-3">
En MLOps agregamos la dimensión <strong>CT (Continuous Training)</strong> a la ecuación tradicional de DevOps.
</p>

<div class="grid grid-cols-3 gap-3 text-xs mb-4">
<div class="gamma-card p-3 border-t-2 border-t-cyan-400">
<h3 class="font-bold text-cyan-400 mb-1">CI (Continuous Integration)</h3>
<p class="text-slate-300">Testeo de código de pipelines, validación de schemas de datos y unit tests de transformaciones.</p>
</div>

<div class="gamma-card p-3 border-t-2 border-t-indigo-400">
<h3 class="font-bold text-indigo-400 mb-1">CD (Continuous Delivery)</h3>
<p class="text-slate-300">Empaquetado de la API de inferencia (Docker) y despliegue automatizado en entornos de staging/prod.</p>
</div>

<div class="gamma-card p-3 border-t-2 border-t-emerald-400">
<h3 class="font-bold text-emerald-400 mb-1">CT (Continuous Training)</h3>
<p class="text-slate-300">Ejecución periódica o por eventos (Drift) del pipeline de entrenamiento y evaluación automatizada.</p>
</div>
</div>

<div class="gamma-card p-3">
<h4 class="text-xs font-bold text-slate-200 mb-2">Disparadores típicos de Continuous Training (CT):</h4>
<div class="grid grid-cols-3 gap-2 text-xs text-slate-400">
<div>⏰ <strong>Por Calificación/Tiempo:</strong> Cron diario/semanal.</div>
<div>📥 <strong>Nuevos Datos:</strong> Arribo de dataset a S3/GCS.</div>
<div>🚨 <strong>Por Alerta:</strong> Data Drift detectado en monitoreo.</div>
</div>
</div>
