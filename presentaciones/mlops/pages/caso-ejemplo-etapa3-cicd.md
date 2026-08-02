---
layout: default
---

<div class="gamma-badge badge-concurrency mb-2">
Etapa 3 — CI/CD Pipeline
</div>

<h2 class="text-3xl font-bold mb-4">
Etapa 3: Pipeline Automatizado (CI/CD/CT)
</h2>

<div class="grid grid-cols-2 gap-4">
<div class="gamma-card p-4">
<h3 class="text-base font-semibold text-indigo-400 mb-2">
📌 ¿Qué hacemos en este proyecto?
</h3>
<p class="text-xs text-slate-300 mb-2">
Cada vez que subimos código nuevo a Git o se aprueba una nueva versión de modelo en MLflow, el pipeline se dispara automáticamente.
</p>
<ul class="text-xs text-slate-400 space-y-1">
<li>• Ejecuta tests unitarios de datos y código.</li>
<li>• Construye una nueva imagen Docker con la API del modelo.</li>
</ul>
</div>

<div class="gamma-card p-4">
<div class="flex items-center justify-between mb-2">
<h3 class="text-base font-semibold text-indigo-400">
🛠️ Herramienta: GitHub Actions
</h3>
<span class="px-2 py-0.5 rounded text-[10px] bg-indigo-500/20 text-indigo-300 font-mono">CI/CD Workflow</span>
</div>
<p class="text-xs text-slate-300 mb-2">
Orquesta el flujo continuo de construcción y testeo.
</p>
<div class="bg-slate-900/80 p-2 rounded text-[11px] font-mono text-indigo-300 border border-slate-700/50 space-y-1">
<div># .github/workflows/mlops.yml</div>
<div>jobs:</div>
<div>&nbsp;&nbsp;build-and-test:</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;runs-on: ubuntu-latest</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;steps:</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- run: pytest tests/</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- run: docker build -t churn-api:v2 .</div>
</div>
</div>
</div>

<div class="gamma-card p-3 mt-4 text-center">
<p class="text-xs text-slate-300">
🚀 <strong>Resultado de la Etapa:</strong> Artefacto inmutable `churn-api:v2` empaquetado y validado listo para desplegar.
</p>
</div>
