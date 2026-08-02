<div class="h-full flex flex-col justify-between">
<div class="flex justify-between items-center mb-2">
<h2>CI/CD: Integración y Despliegue Continuo</h2>
<span class="gamma-badge badge-domain">Pipeline de Automatización</span>
</div>

<div class="grid grid-cols-2 gap-4">
<div class="gamma-card p-4">
<div class="flex items-center gap-2 mb-2 border-b border-indigo-800/40 pb-2">
<span class="text-xl">🔄</span>
<h3 class="text-base font-bold text-indigo-300">Continuous Integration (CI)</h3>
</div>
<p class="text-xs text-slate-300 mb-2">
        Proceso en el cual el código desarrollado por múltiples integrantes del equipo se integra automáticamente.
</p>
<ul class="text-xs text-slate-300 space-y-1 list-disc list-inside">
<li>Push a Git / Pull Request</li>
<li>Servidor compila el código automáticamente</li>
<li>Ejecución de suite de tests automáticos</li>
<li>Generación de reportes de calidad</li>
</ul>
</div>

<div class="gamma-card p-4">
<div class="flex items-center gap-2 mb-2 border-b border-purple-800/40 pb-2">
<span class="text-xl">🚀</span>
<h3 class="text-base font-bold text-purple-300">Continuous Deployment (CD)</h3>
</div>
<p class="text-xs text-slate-300 mb-2">
        Toma el resultado exitoso del proceso de CI y lo despliega automáticamente en la infraestructura.
</p>
<ul class="text-xs text-slate-300 space-y-1 list-disc list-inside">
<li>Construcción y almacenamiento del artefacto (Imagen Docker/Binary)</li>
<li>Despliegue automático a Staging / Producción</li>
<li>Pruebas post-despliegue (Smoke tests)</li>
</ul>
</div>
</div>

```mermaid
graph LR
  Code["Commit / PR"] --> CI_Build["1. Build & Test"]
  CI_Build --> CI_Qual["2. Quality & Security"]
  CI_Qual --> CD_Art["3. Build Docker Image"]
  CD_Art --> CD_Dep["4. Deploy to Prod"]
```
</div>
