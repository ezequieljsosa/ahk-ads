<div class="h-full flex flex-col">
<div class="flex justify-between items-center mb-6">
<h2>Pasos para desplegar una aplicación</h2>
<span class="gamma-badge badge-domain">Ciclo de Vida</span>
</div>

<div class="grid grid-cols-2 gap-6 my-auto">
<div class="gamma-card p-6 flex flex-col justify-between">
<div>
<h3 class="text-xl font-bold text-indigo-300 mb-2">Entorno de Desarrollo</h3>
<p class="text-sm text-slate-300 mb-4">
          Donde los desarrolladores escriben código, construyen características y generan artefactos de software.
</p>
</div>
<div class="bg-indigo-950/50 p-3 rounded-lg border border-indigo-800/40 text-xs text-indigo-200">
<strong>Genera:</strong> Artefacto / Versión (ZIP, JAR, Imagen Docker, binario).
</div>
</div>

<div class="gamma-card p-6 flex flex-col justify-between">
<div>
<h3 class="text-xl font-bold text-purple-300 mb-2">Entorno de Release / Producción</h3>
<p class="text-sm text-slate-300 mb-4">
          Entorno operativo donde los usuarios finales interactúan con la aplicación activa.
</p>
</div>
<div class="bg-purple-950/50 p-3 rounded-lg border border-purple-800/40 text-xs text-purple-200">
<strong>Paso clave:</strong> El artefacto se despliega en producción mediante un proceso confiable.
</div>
</div>
</div>

```mermaid
graph LR
  Dev["Entorno de Desarrollo"] -->|"1. Construye y Empaqueta"| Art["Artefacto (ZIP / Docker / JAR)"]
  Art -->|"2. Despliegue Automatizado/Confiable"| Prod["Entorno de Producción"]
```

<div class="gamma-card p-4 mt-4 border-l-4 border-l-amber-400 bg-amber-950/20">
<h4 class="text-sm font-bold text-amber-300 mb-1"> Preguntas para el debate:</h4>
<ul class="text-xs text-slate-300 list-disc list-inside space-y-1">
<li>¿Qué tipos de artefactos existen en sus proyectos actuales?</li>
<li>¿Cómo se lleva a producción cada tipo de artefacto? ¿Es manual o automatizado?</li>
</ul>
</div>
</div>
