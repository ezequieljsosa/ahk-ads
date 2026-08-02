---
layout: default
---

<div class="gamma-badge badge-domain mb-2">
Herramientas & Stack
</div>

<h2 class="text-3xl font-bold mb-4">
Ecosistema y Arquitectura MLOps
</h2>

<div class="my-3 scale-95 origin-top-left">

```mermaid
graph LR
    Data["Data Sources"] --> FE["Feature Store"]
    FE --> Train["Train Pipeline"]
    Train --> MLflow["Model Registry"]
    MLflow --> Serve["Serving API"]
    Serve --> Mon["Monitoring"]
    Mon -.->|"Drift Trigger"| Train

    style Data fill:#0f172a,stroke:#38bdf8,stroke-width:1px,color:#fff
    style FE fill:#0f172a,stroke:#818cf8,stroke-width:1px,color:#fff
    style Train fill:#0f172a,stroke:#c084fc,stroke-width:1px,color:#fff
    style MLflow fill:#0f172a,stroke:#f472b6,stroke-width:1px,color:#fff
    style Serve fill:#0f172a,stroke:#34d399,stroke-width:1px,color:#fff
    style Mon fill:#0f172a,stroke:#fbbf24,stroke-width:1px,color:#fff
```

</div>

<div class="grid grid-cols-4 gap-2 text-xs text-center mt-2">
<div class="gamma-card p-2">
<span class="font-bold text-sky-400 block text-xs mb-1">Data &amp; Versioning</span>
<p class="text-slate-400 text-30px font-mono text-[10px]">DVC, Feast, MinIO, S3</p>
</div>
<div class="gamma-card p-2">
<span class="font-bold text-purple-400 block text-xs mb-1">Orquestación</span>
<p class="text-slate-400 font-mono text-[10px]">Airflow, Kubeflow, Prefect</p>
</div>
<div class="gamma-card p-2">
<span class="font-bold text-emerald-400 block text-xs mb-1">Registry &amp; Serving</span>
<p class="text-slate-400 font-mono text-[10px]">MLflow, FastAPI, Docker, K8s</p>
</div>
<div class="gamma-card p-2">
<span class="font-bold text-amber-400 block text-xs mb-1">Observabilidad</span>
<p class="text-slate-400 font-mono text-[10px]">Evidently AI, Prometheus, Grafana</p>
</div>
</div>
