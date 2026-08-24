---
layout: default
class: compact-slide
---

<div class="gamma-badge badge-data mb-2">
Fundamentos de Datos
</div>

<h2 class="text-2xl font-bold mb-2">
Feature Store &amp; Data Validation
</h2>

<div class="grid grid-cols-2 gap-3 mb-2">
<div class="gamma-card p-3">
<h3 class="text-sm font-semibold text-purple-400 mb-1">
🗄️ Feature Store
</h3>
<p class="text-[11px] text-slate-300 mb-1">
Resuelve el <strong>training-serving skew</strong>: que una feature se calcule distinto en el pipeline de entrenamiento y en producción.
</p>
<ul class="text-[11px] text-slate-400 space-y-0.5">
<li>• <strong>Offline Store:</strong> histórico (Parquet/S3), alimenta el entrenamiento batch.</li>
<li>• <strong>Online Store:</strong> baja latencia (Redis), alimenta la inferencia real-time.</li>
<li>• <strong>Extra:</strong> reutilización de features entre modelos y equipos.</li>
<li>• <strong>Herramientas:</strong> Feast, Tecton, Hopsworks.</li>
</ul>
</div>

<div class="gamma-card p-3">
<h3 class="text-sm font-semibold text-sky-400 mb-1">
✅ Data Validation
</h3>
<p class="text-[11px] text-slate-300 mb-1">
Verifica que los datos cumplan un <strong>contrato de calidad</strong> (schema, tipos, rangos, nulos) antes de usarlos.
</p>
<ul class="text-[11px] text-slate-400 space-y-0.5">
<li>• <strong>En training:</strong> bloquea el pipeline si el dataset llega corrupto.</li>
<li>• <strong>En producción:</strong> gatea cada batch/request antes de que llegue al modelo.</li>
<li>• <strong>Ejemplo:</strong> rechazar un registro con <code>MonthlyCharges</code> negativo.</li>
<li>• <strong>Herramientas:</strong> Great Expectations, Whylogs, Pandera.</li>
</ul>
</div>
</div>

<div class="scale-90 origin-top">

```mermaid
graph LR
    Sources["Fuentes de Datos (SQL / Logs / S3)"] --> FS["Feature Store (Feast)"]
    FS -->|"Offline Store: Parquet/S3"| Train["Entrenamiento Batch"]
    FS -->|"Online Store: Redis"| API["Servido Real-Time"]

    style Sources fill:#0f172a,stroke:#38bdf8,stroke-width:1px,color:#fff
    style FS fill:#0f172a,stroke:#c084fc,stroke-width:1px,color:#fff
    style Train fill:#0f172a,stroke:#818cf8,stroke-width:1px,color:#fff
    style API fill:#0f172a,stroke:#34d399,stroke-width:1px,color:#fff
```

</div>

<div class="gamma-card p-2 bg-slate-800/50 border border-slate-700/50">
<p class="text-[10px] text-slate-400 text-center">
📌 Ambos son "puertas de calidad" antes del modelo: <em>Data Validation</em> asegura que el dato es válido; <em>Feature Store</em> asegura que es consistente entre training y producción.
</p>
</div>
