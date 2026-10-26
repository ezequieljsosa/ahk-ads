<div v-pre class="h-full flex flex-col justify-between">
<div class="flex justify-between items-center mb-2">
<h2>El Problema: Gestión de Configuración</h2>
<span class="gamma-badge badge-domain">Concepto general</span>
</div>

<div class="grid grid-cols-2 gap-4">
<div class="gamma-card p-4">
<h3 class="text-sm font-bold text-rose-300 mb-2">Sin automatización</h3>
<ul class="text-xs text-slate-300 space-y-1 list-disc list-inside">
<li>Entrar por SSH a cada servidor y ejecutar comandos a mano.</li>
<li>Servidores "copo de nieve": cada uno queda un poco distinto (<em>configuration drift</em>).</li>
<li>Nadie sabe qué se cambió, cuándo ni por qué.</li>
<li>Reconstruir un servidor caído lleva horas.</li>
</ul>
</div>
<div class="gamma-card p-4">
<h3 class="text-sm font-bold text-emerald-300 mb-2">Con gestión de configuración</h3>
<ul class="text-xs text-slate-300 space-y-1 list-disc list-inside">
<li>El estado deseado se escribe en archivos de texto (infraestructura como código).</li>
<li>Los archivos viven en Git: historial, revisión y vuelta atrás.</li>
<li>La misma definición se aplica a 1 o a 100 servidores.</li>
<li>Reconstruir un servidor es volver a ejecutar el código.</li>
</ul>
</div>
</div>

<div class="gamma-card p-3">
<h3 class="text-sm font-bold text-cyan-300 mb-2">Ejes para entender las herramientas</h3>
<div class="grid grid-cols-3 gap-3 text-xs text-slate-300">
<div><strong>Imperativo vs. declarativo:</strong> "ejecutá estos pasos" frente a "el sistema debe quedar así".</div>
<div><strong>Con agente vs. sin agente:</strong> software instalado en cada nodo, o acceso remoto por SSH/API.</div>
<div><strong>Push vs. pull:</strong> el control envía los cambios, o cada nodo los consulta periódicamente.</div>
</div>
</div>

<div class="gamma-card p-3 text-center bg-indigo-950/30 text-xs text-slate-300">
🔧 <em>Configuración (qué hay dentro del servidor) y aprovisionamiento (crear el servidor) son problemas distintos, con herramientas distintas.</em>
</div>
</div>
