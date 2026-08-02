---
layout: default
---

<div class="gamma-badge badge-domain mb-2">
Ejemplo Práctico End-to-End
</div>

<h2 class="text-3xl font-bold mb-4">
Caso de Estudio: Predicción de Churn de Clientes
</h2>

<div class="grid grid-cols-2 gap-4 my-4">
<div class="gamma-card p-4">
<h3 class="text-base font-semibold text-emerald-400 mb-2">
🎯 El Objetivo de Negocio
</h3>
<p class="text-sm text-slate-300">
Predecir qué usuarios cancelarán su suscripción el próximo mes para enviarles una oferta de retención.
</p>
<ul class="text-xs text-slate-400 mt-3 space-y-1.5">
<li>• <strong>Entrada:</strong> Datos del cliente (antigüedad, consumo, tickets de soporte).</li>
<li>• <strong>Salida (Predicción):</strong> Probabilidad de cancelación (0.0 a 1.0).</li>
<li>• <strong>Desafío MLOps:</strong> Automatizar el flujo completo para que el modelo se mantenga actualizado sin intervención manual.</li>
</ul>
</div>

<div class="gamma-card p-4">
<h3 class="text-base font-semibold text-cyan-400 mb-2">
🛠️ Stack Elegido para la Práctica
</h3>
<div class="space-y-2 text-xs text-slate-300">
<div class="flex justify-between border-b border-slate-700/50 pb-1">
<span class="font-bold text-sky-400">1. Versionado Datos:</span>
<span class="font-mono text-slate-300">DVC + Git / S3</span>
</div>
<div class="flex justify-between border-b border-slate-700/50 pb-1">
<span class="font-bold text-purple-400">2. Tracking &amp; Registry:</span>
<span class="font-mono text-slate-300">MLflow</span>
</div>
<div class="flex justify-between border-b border-slate-700/50 pb-1">
<span class="font-bold text-indigo-400">3. Orquestación:</span>
<span class="font-mono text-slate-300">GitHub Actions</span>
</div>
<div class="flex justify-between border-b border-slate-700/50 pb-1">
<span class="font-bold text-emerald-400">4. Servido API:</span>
<span class="font-mono text-slate-300">FastAPI + Docker</span>
</div>
<div class="flex justify-between pb-1">
<span class="font-bold text-amber-400">5. Monitoreo:</span>
<span class="font-mono text-slate-300">Evidently AI</span>
</div>
</div>
</div>
</div>

<div class="gamma-card p-3 text-center border-slate-700/50">
<p class="text-xs text-slate-300">
👉 <em>A continuación, veremos cada una de las 5 etapas del ciclo de vida aplicadas a este proyecto ficticio.</em>
</p>
</div>
