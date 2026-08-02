---
layout: default
---

<div class="gamma-badge badge-concurrency mb-2">
Fenómenos de Producción
</div>

<h2 class="text-3xl font-bold mb-4">
Cuando el Mundo Cambia: Data & Concept Drift
</h2>

<p class="text-sm text-slate-300 mb-4">
A diferencia del código tradicional, los modelos de ML sufren degradación silenciosa porque la realidad evoluciona.
</p>

<div class="grid grid-cols-2 gap-4">
<div class="gamma-card p-4">
<div class="flex items-center gap-2 mb-2">
<span class="px-2 py-0.5 rounded text-xs bg-amber-500/20 text-amber-300 font-bold">Data Drift</span>
<h3 class="text-base font-semibold text-white">Cambios en las Entradas (X)</h3>
</div>
<p class="text-xs text-slate-300 mb-2">
La distribución de los datos de entrada en producción cambia respecto a los datos de entrenamiento.
</p>
<div class="bg-slate-900/60 p-2 rounded text-xs text-slate-400 font-mono">
Ejemplo: Un modelo bancario entrenado antes de una crisis económica recibe distribuciones de ingresos totalmente distintas.
</div>
</div>

<div class="gamma-card p-4">
<div class="flex items-center gap-2 mb-2">
<span class="px-2 py-0.5 rounded text-xs bg-rose-500/20 text-rose-300 font-bold">Concept Drift</span>
<h3 class="text-base font-semibold text-white">Cambios en la Relación (X → Y)</h3>
</div>
<p class="text-xs text-slate-300 mb-2">
La relación estadística entre las variables de entrada y el objetivo cambia con el tiempo.
</p>
<div class="bg-slate-900/60 p-2 rounded text-xs text-slate-400 font-mono">
Ejemplo: Patrones de consumo durante la pandemia. Las compras online cambiaron radicalmente el significado de "cliente activo".
</div>
</div>
</div>

<div class="gamma-card p-3 mt-4 text-center border-amber-500/30">
<p class="text-xs text-amber-300">
⚠️ <strong>Solución en MLOps:</strong> Monitorear métricas de distribución y desencadenar re-entrenamiento automático (CT).
</p>
</div>
