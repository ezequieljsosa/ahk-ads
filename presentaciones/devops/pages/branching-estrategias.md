<div class="h-full flex flex-col justify-between">
<div class="flex justify-between items-center mb-2">
<h2>Estrategias de Ramificación y Despliegue</h2>
<span class="gamma-badge badge-concurrency">Branching &amp; Deploy Strategies</span>
</div>

<div class="grid grid-cols-2 gap-4">
<div class="gamma-card p-4">
<h3 class="text-sm font-bold text-indigo-300 mb-2">Modelo GitFlow</h3>
<p class="text-xs text-slate-300 mb-2">
        Define la estrategia para el ciclo de vida de ramas y merges entre ellas.
</p>
<ul class="text-xs text-slate-300 space-y-1 list-disc list-inside">
<li><code>main / master</code>: Código estable en producción.</li>
<li><code>staging</code>: Pre-producción.</li>
<li><code>development</code>: Integración de características.</li>
<li><code>feature/*</code>, <code>hotfix/*</code>.</li>
</ul>
<p class="text-[10px] text-amber-300 mt-2">
        ⚠️ <em>Trunk-Based Development surge como alternativa moderna más ágil a GitFlow.</em>
</p>
</div>

<div class="gamma-card p-4">
<h3 class="text-sm font-bold text-purple-300 mb-2">Estrategias de Despliegue</h3>
<div class="space-y-3 text-xs text-slate-300">
<div>
<strong class="text-blue-300">Blue-Green Deployment:</strong><br/>
          Dos entornos idénticos. Se despliega en "Green" y se conmuta el balanceador de cargas sin downtime.
</div>
<div>
<strong class="text-amber-300">Canary Release:</strong><br/>
          Se envía una pequeña fracción del tráfico (ej: 5%) a la nueva versión para validar métricas antes de migrar al 100%.
</div>
</div>
</div>
</div>

```mermaid
graph LR
  subgraph GitFlow["Estrategia de Ramificación"]
    Main["main"]
    Develop["develop"]
    Feature["feature/*"]
    Feature --> Develop
    Develop --> Main
  end
  subgraph Deploy["Blue-Green / Canary"]
    Green["Versión Actual (100%)"]
    Canary["Nueva Versión (5%)"]
  end
```
</div>
