---
layout: default
---

<div class="gamma-badge badge-data mb-2">
Etapa 1 — Ingestion & Prep
</div>

<h2 class="text-3xl font-bold mb-4">
Etapa 1: Ingesta, Features y Versionado de Datos
</h2>

<div class="grid grid-cols-2 gap-4">
<div class="gamma-card p-4">
<h3 class="text-base font-semibold text-sky-400 mb-2">
📌 ¿Qué hacemos en este proyecto?
</h3>
<p class="text-xs text-slate-300 mb-2">
Extraemos datos de usuarios desde bases PostgreSQL y archivos CSV históricos, generando features como *promedio de facturación mensual* y *días desde el último ticket*.
</p>
<ul class="text-xs text-slate-400 space-y-1">
<li>• Limpieza de valores nulos y codificación de variables.</li>
<li>• Versionado exacto del conjunto de datos usado para entrenar.</li>
</ul>
</div>

<div class="gamma-card p-4">
<div class="flex items-center justify-between mb-2">
<h3 class="text-base font-semibold text-emerald-400">
🛠️ Herramienta: DVC (Data Version Control)
</h3>
<span class="px-2 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-300 font-mono">DVC + Git</span>
</div>
<p class="text-xs text-slate-300 mb-2">
Git no puede guardar archivos de datos pesados (GBs). DVC guarda punteros `.dvc` livianos en Git y almacena los datasets pesados en S3 / MinIO.
</p>
<div class="bg-slate-900/80 p-2 rounded text-[11px] font-mono text-emerald-300 border border-slate-700/50 space-y-1">
<div># Guardar dataset y subir al storage</div>
<div>dvc add data/churn_dataset.csv</div>
<div>git add data/churn_dataset.csv.dvc .gitignore</div>
<div>git commit -m "Dataset Churn v1.2"</div>
<div>dvc push</div>
</div>
</div>
</div>

<div class="gamma-card p-3 mt-4 text-center">
<p class="text-xs text-slate-300">
💡 <strong>Resultado de la Etapa:</strong> Un dataset inmutable y reproducible `churn_dataset_v1.2` listo para entrenar.
</p>
</div>
