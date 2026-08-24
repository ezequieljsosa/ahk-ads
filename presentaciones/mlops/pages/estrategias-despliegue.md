---
layout: default
class: compact-slide
---

<div class="gamma-badge badge-concurrency mb-2">
Infraestructura & Servido
</div>

<h2 class="text-2xl font-bold mb-2">
Estrategias de Despliegue Seguro
</h2>

<div class="grid grid-cols-2 gap-3 mb-2">
<div class="gamma-card p-3">
<h3 class="text-sm font-semibold text-teal-400 mb-1">
🐤 Canary Deployment
</h3>
<p class="text-[11px] text-slate-300 mb-1">
Se envía un % chico del tráfico real (ej. 5%) al modelo nuevo y se monitorean errores antes de escalar al 100%.
</p>
<ul class="text-[11px] text-slate-400 space-y-0.5">
<li>• <strong>Riesgo:</strong> ese % de usuarios sí recibe la respuesta del modelo nuevo.</li>
<li>• <strong>Ventaja:</strong> rollback inmediato si suben los errores.</li>
<li>• <strong>Variante A/B Testing:</strong> split fijo (no gradual) para medir métricas de negocio con significancia estadística.</li>
</ul>
</div>

<div class="gamma-card p-3">
<h3 class="text-sm font-semibold text-amber-400 mb-1">
👤 Shadow Testing
</h3>
<p class="text-[11px] text-slate-300 mb-1">
El modelo candidato (<strong>shadow</strong>) recibe una copia del tráfico en paralelo al de producción (<strong>champion</strong>), pero su predicción <strong>nunca se devuelve al usuario</strong>.
</p>
<ul class="text-[11px] text-slate-400 space-y-0.5">
<li>• <strong>Riesgo:</strong> cero, nadie ve la predicción del modelo nuevo.</li>
<li>• <strong>Se compara offline:</strong> accuracy, latencia y error vs. el champion.</li>
<li>• <strong>Uso típico:</strong> modelos críticos (fraude, riesgo crediticio).</li>
</ul>
</div>
</div>

<div class="scale-90 origin-top">

```mermaid
graph LR
    User["Usuario"] --> LB["Router"]
    LB --> Champion["Champion (Prod)"]
    LB -.->|"copia async"| Shadow["Shadow (Candidato)"]
    Champion --> Resp["Respuesta real"]
    Shadow --> Log["Log offline (sin respuesta)"]

    style User fill:#0f172a,stroke:#38bdf8,stroke-width:1px,color:#fff
    style LB fill:#0f172a,stroke:#818cf8,stroke-width:1px,color:#fff
    style Champion fill:#0f172a,stroke:#34d399,stroke-width:1px,color:#fff
    style Shadow fill:#0f172a,stroke:#fbbf24,stroke-width:1px,color:#fff
    style Resp fill:#0f172a,stroke:#34d399,stroke-width:1px,color:#fff
    style Log fill:#0f172a,stroke:#fbbf24,stroke-width:1px,color:#fff
```

</div>

<div class="gamma-card p-2 bg-slate-800/50 border border-slate-700/50">
<p class="text-[10px] text-slate-400 text-center">
🔑 En <em>Canary</em> el usuario real recibe la respuesta del modelo nuevo; en <em>Shadow Testing</em> nunca la ve — es la opción de menor riesgo para validar con datos reales antes de exponerlo.
</p>
</div>
