---
layout: default
---

<div class="gamma-badge badge-transversal mb-2">
Etapa 5 — Monitoring & Drift
</div>

<h2 class="text-3xl font-bold mb-4">
Etapa 5: Monitoreo de Data Drift y Alertas
</h2>

<div class="grid grid-cols-2 gap-4">
<div class="gamma-card p-4">
<h3 class="text-base font-semibold text-amber-400 mb-2">
📌 ¿Qué hacemos en este proyecto?
</h3>
<p class="text-xs text-slate-300 mb-2">
Capturamos los datos de los usuarios que entran a la API en producción y los comparamos contra el dataset original de entrenamiento.
</p>
<ul class="text-xs text-slate-400 space-y-1">
<li>• Evaluamos si cambió la distribución de edad o consumos.</li>
<li>• Si detectamos Drift > 20% → Disparamos alerta y re-entrenamiento (CT).</li>
</ul>
</div>

<div class="gamma-card p-4">
<div class="flex items-center justify-between mb-2">
<h3 class="text-base font-semibold text-amber-400">
🛠️ Herramienta: Evidently AI
</h3>
<span class="px-2 py-0.5 rounded text-[10px] bg-amber-500/20 text-amber-300 font-mono">Drift Detection</span>
</div>
<p class="text-xs text-slate-300 mb-2">
Genera reportes de Data Drift y métricas en formato Prometheus / Grafana.
</p>
<div class="bg-slate-900/80 p-2 rounded text-[11px] font-mono text-amber-300 border border-slate-700/50 space-y-1">
<div>from evidently.report import Report</div>
<div>from evidently.metric_preset import DataDriftPreset</div>
<div></div>
<div>report = Report(metrics=[DataDriftPreset()])</div>
<div>report.run(reference_data=train_df, current_data=prod_df)</div>
<div># Disparar pipeline CT si drift > threshold</div>
</div>
</div>
</div>

<div class="gamma-card p-3 mt-4 text-center border-amber-500/30">
<p class="text-xs text-amber-300">
🔄 <strong>Cierre de Ciclo:</strong> Al detectar Drift, Evidently gatilla el workflow de GitHub Actions que ejecuta `dvc pull` + `train.py` para regenerar el modelo.
</p>
</div>
