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
<div class="text-[11px] text-slate-400 bg-slate-800/40 rounded p-2 mt-2 border-l-2 border-teal-400/60">
💡 <strong>Ejemplo:</strong> scoring de riesgo crediticio recalculado cada noche para toda la cartera. Se usa <strong>batch</strong> y no real-time porque la decisión no se necesita al instante (se consume recién al día siguiente) y procesar millones de registros juntos es mucho más eficiente que invocar el modelo cliente por cliente.
</div>
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
<div class="text-[11px] text-slate-400 bg-slate-800/40 rounded p-2 mt-2 border-l-2 border-cyan-400/60">
💡 <strong>Ejemplo:</strong> aprobar o rechazar una transacción al pasar la tarjeta. Se usa <strong>real-time</strong> y no batch porque la decisión requiere los datos del evento recién ocurrido — un cálculo nocturno llegaría cuando el fraude ya se concretó.
</div>
</div>
</div>
