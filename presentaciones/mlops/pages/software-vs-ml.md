---
layout: default
---

<div class="gamma-badge badge-integration mb-2">
Comparativa de Paradigmas
</div>

<h2 class="text-3xl font-bold mb-4">
Software Tradicional vs. Sistemas de ML
</h2>

<div class="grid grid-cols-2 gap-4">
<div class="gamma-card p-4">
<h3 class="text-lg font-semibold text-cyan-400 mb-2">
💻 Software Tradicional (DevOps)
</h3>
<ul class="text-sm text-slate-300 space-y-2">
<li><strong>Entidad principal:</strong> Código fuente.</li>
<li><strong>Comportamiento:</strong> Determinístico (Código + Entrada → Salida).</li>
<li><strong>Ciclo de vida:</strong> Escribir código → Testear → Build (Docker) → Desplegar.</li>
<li><strong>Degradación:</strong> Bugs de código o fallas de infraestructura.</li>
</ul>
</div>

<div class="gamma-card p-4">
<h3 class="text-lg font-semibold text-purple-400 mb-2">
🤖 Sistema de Machine Learning (MLOps)
</h3>
<ul class="text-sm text-slate-300 space-y-2">
<li><strong>Entidad principal:</strong> Código + Datos + Modelo.</li>
<li><strong>Comportamiento:</strong> Probabilístico (Aprendido de datos pasados).</li>
<li><strong>Ciclo de vida:</strong> Datos → Entrenamiento → Evaluación → Registro → Servido.</li>
<li><strong>Degradación:</strong> El mundo cambia y los datos cambian (Drift).</li>
</ul>
</div>
</div>

<div class="gamma-card p-3 mt-4 text-center">
<p class="text-sm text-emerald-400 font-mono">
MLOps = DevOps aplicado a sistemas donde los datos modifican el comportamiento del software en producción.
</p>
</div>
