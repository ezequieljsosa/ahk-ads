---
layout: default
---

<div class="gamma-badge badge-presentation mb-2">
Evolución Organizacional
</div>

<h2 class="text-3xl font-bold mb-4">
Niveles de Madurez en MLOps (Google / Microsoft)
</h2>

<div class="space-y-3 text-xs">
<div class="gamma-card p-3 border-l-4 border-l-rose-500">
<div class="flex justify-between items-center mb-1">
<h3 class="font-bold text-sm text-rose-400">Nivel 0: Proceso Manual (Ad-hoc)</h3>
<span class="text-slate-400">Notebooks &amp; Hand-off manual</span>
</div>
<p class="text-slate-300">
Scripts manuales en Jupyter. El Data Scientist entrena y entrega un archivo `.pkl` / `.h5` a Sistemas IT. Sin CI/CD ni monitoreo.
</p>
</div>

<div class="gamma-card p-3 border-l-4 border-l-amber-500">
<div class="flex justify-between items-center mb-1">
<h3 class="font-bold text-sm text-amber-400">Nivel 1: Automatización de Pipelines (Continuous Training - CT)</h3>
<span class="text-slate-400">Pipelines de ML automatizados</span>
</div>
<p class="text-slate-300">
El proceso de entrenamiento de ML está automatizado. Ante nuevos datos en producción, el pipeline se dispara solo y genera un nuevo modelo validado.
</p>
</div>

<div class="gamma-card p-3 border-l-4 border-l-emerald-500">
<div class="flex justify-between items-center mb-1">
<h3 class="font-bold text-sm text-emerald-400">Nivel 2: CI/CD + CT Automatizado</h3>
<span class="text-slate-400">MLOps Enterprise</span>
</div>
<p class="text-slate-300">
Pipelines completos de CI/CD para el código del pipeline de ML + re-entrenamiento automático + despliegue automatizado en Kubernetes/Cloud con zero-downtime.
</p>
</div>
</div>
