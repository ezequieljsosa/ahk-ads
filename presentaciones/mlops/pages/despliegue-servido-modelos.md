---
layout: default
---

<div class="gamma-badge badge-concurrency mb-2">
Infraestructura & Servido
</div>

<h2 class="text-3xl font-bold mb-4">
Despliegue y Servido de Modelos (Serving)
</h2>

<div class="grid grid-cols-2 gap-4">
<div class="gamma-card p-4">
<h3 class="text-base font-semibold text-teal-400 mb-2">
⚡ Batch Serving (Offline)
</h3>
<p class="text-xs text-slate-300 mb-2">
Predicciones pre-calculadas en masa de forma programada.
</p>
<ul class="text-xs text-slate-400 space-y-1">
<li>• <strong>Cuándo usar:</strong> Reportes nocturnos, scoring de clientes semanal.</li>
<li>• <strong>Ventajas:</strong> Alto rendimiento masivo, no requiere baja latencia online.</li>
<li>• <strong>Herramientas:</strong> Apache Spark, Ray, scripts programados (Cron/Airflow).</li>
</ul>
</div>

<div class="gamma-card p-4">
<h3 class="text-base font-semibold text-cyan-400 mb-2">
🌐 Real-Time Serving (Online)
</h3>
<p class="text-xs text-slate-300 mb-2">
El modelo responde mediante una API REST/gRPC en tiempo real (milisegundos).
</p>
<ul class="text-xs text-slate-400 space-y-1">
<li>• <strong>Cuándo usar:</strong> Detección de fraude al pasar la tarjeta, recomendaciones web.</li>
<li>• <strong>Ventajas:</strong> Respuesta inmediata a datos frescos del usuario.</li>
<li>• <strong>Herramientas:</strong> FastAPI + Docker, KServe, Triton, TorchServe.</li>
</ul>
</div>
</div>

<div class="gamma-card p-3 mt-4">
<h4 class="text-xs font-semibold text-slate-200 mb-1">Estrategias de Despliegue Seguro:</h4>
<div class="grid grid-cols-2 gap-2 text-xs text-slate-400">
<div><strong>Canary Deployment:</strong> Enviar 5% del tráfico al nuevo modelo y evaluar errores antes del 100%.</div>
<div><strong>Shadow Deployment (A/B Test):</strong> Correr el nuevo modelo en paralelo sin impactar la respuesta al cliente.</div>
</div>
</div>
