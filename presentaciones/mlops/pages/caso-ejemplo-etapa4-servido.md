---
layout: default
---

<div class="gamma-badge badge-presentation mb-2">
Etapa 4 — Serving & Infra
</div>

<h2 class="text-3xl font-bold mb-4">
Etapa 4: Servido de Inferencia (API REST)
</h2>

<div class="grid grid-cols-2 gap-4">
<div class="gamma-card p-4">
<h3 class="text-base font-semibold text-cyan-400 mb-2">
📌 ¿Qué hacemos en este proyecto?
</h3>
<p class="text-xs text-slate-300 mb-2">
Exponemos un endpoint `/predict` para que la aplicación web del banco consulte en tiempo real la probabilidad de cancelación cuando un cliente entra al sistema.
</p>
<ul class="text-xs text-slate-400 space-y-1">
<li>• Entrada: JSON con datos del cliente.</li>
<li>• Respuesta: JSON con scoring y recomendado de retención.</li>
</ul>
</div>

<div class="gamma-card p-4">
<div class="flex items-center justify-between mb-2">
<h3 class="text-base font-semibold text-cyan-400">
🛠️ Stack: FastAPI + Docker
</h3>
<span class="px-2 py-0.5 rounded text-[10px] bg-cyan-500/20 text-cyan-300 font-mono">Microservicio REST</span>
</div>
<p class="text-xs text-slate-300 mb-2">
FastAPI provee baja latencia y alta concurrencia asincrónica.
</p>
<div class="bg-slate-900/80 p-2 rounded text-[11px] font-mono text-cyan-300 border border-slate-700/50 space-y-1">
<div>@app.post("/predict")</div>
<div>def predict_churn(data: CustomerData):</div>
<div>&nbsp;&nbsp;prob = model.predict_proba(data)</div>
<div>&nbsp;&nbsp;return {</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;"churn_prob": prob,</div>
<div>&nbsp;&nbsp;&nbsp;&nbsp;"action": "send_discount" if prob > 0.7 else "none"</div>
<div>&nbsp;&nbsp;}</div>
</div>
</div>
</div>

<div class="gamma-card p-3 mt-4 text-center">
<p class="text-xs text-slate-300">
🌐 <strong>Resultado de la Etapa:</strong> Microservicio de ML corriendo en un contenedor Docker respondiendo en menos de 50ms.
</p>
</div>
