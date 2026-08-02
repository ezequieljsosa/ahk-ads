---
layout: default
---

<div class="gamma-badge badge-transversal mb-2">
Observabilidad
</div>

<h2 class="text-3xl font-bold mb-4">
Monitoreo y Alertas en Producción
</h2>

<p class="text-sm text-slate-300 mb-3">
En MLOps monitoreamos **dos dimensiones en paralelo**: Infraestructura y Calidad del Modelo.
</p>

<div class="grid grid-cols-2 gap-4">
<div class="gamma-card p-4">
<h3 class="text-base font-semibold text-indigo-400 mb-2">
🛠️ Métricas de Infraestructura (DevOps)
</h3>
<ul class="text-xs text-slate-300 space-y-2">
<li>• <strong>Latencia de respuesta:</strong> p95 / p99 en milisegundos.</li>
<li>• <strong>Throughput:</strong> Request por segundo (RPS).</li>
<li>• <strong>Recursos:</strong> Uso de CPU, Memoria RAM y GPU.</li>
<li>• <strong>Uptime &amp; Errores:</strong> Tasa de respuestas 5xx / 4xx.</li>
<li>• <em>Herramientas: Prometheus + Grafana.</em></li>
</ul>
</div>

<div class="gamma-card p-4">
<h3 class="text-base font-semibold text-emerald-400 mb-2">
🧠 Métricas del Modelo &amp; Datos (MLOps)
</h3>
<ul class="text-xs text-slate-300 space-y-2">
<li>• <strong>Data Drift:</strong> Métricas de divergencia (KS test, PSI, Wasserstein).</li>
<li>• <strong>Prediction Drift:</strong> La distribución de las predicciones cambió acumulativamente.</li>
<li>• <strong>Performance Real:</strong> F1-Score / MSE con feedback real (ground truth demorado).</li>
<li>• <em>Herramientas: Evidently AI, Great Expectations, Whylogs.</em></li>
</ul>
</div>
</div>

<div class="gamma-card p-3 mt-4 text-center border-emerald-500/30">
<p class="text-xs text-emerald-300">
🔔 <strong>Ciclo Cerrado:</strong> Si la métrica de Drift supera un umbral crítico → Se dispara alerta Slack/PagerDuty → Auto-trigger de Pipeline de Entrenamiento (CT).
</p>
</div>
