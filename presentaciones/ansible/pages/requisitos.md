<div class="h-full flex flex-col justify-between">
<div class="flex justify-between items-center mb-2">
<h2>Requisitos y Preparación del Entorno</h2>
<span class="gamma-badge badge-transversal">Setup</span>
</div>

<div class="grid grid-cols-2 gap-4">
<div class="gamma-card p-4">
<h3 class="text-sm font-bold text-cyan-300 mb-2">Nodo de control</h3>
<ul class="text-xs text-slate-300 space-y-1 list-disc list-inside">
<li>Linux o WSL (Windows no es soportado como nodo de control)</li>
<li>Python 3.8 o superior</li>
<li>Cliente SSH</li>
<li>Clave privada SSH</li>
</ul>
</div>
<div class="gamma-card p-4">
<h3 class="text-sm font-bold text-emerald-300 mb-2">Nodos gestionados</h3>
<ul class="text-xs text-slate-300 space-y-1 list-disc list-inside">
<li>Linux con servidor SSH</li>
<li>Clave pública correspondiente en <code>authorized_keys</code></li>
<li>Usuario con <code>sudo</code> sin contraseña</li>
<li>Evitar <code>root</code> y deshabilitar su acceso por SSH</li>
</ul>
</div>
</div>

<div class="gamma-card p-3 font-mono text-[10px] text-slate-200 bg-slate-950/80">
<div class="text-slate-500 mb-1"># Preparación mínima</div>
<span class="text-purple-400">$</span> sudo apt install ansible<br/>
<span class="text-purple-400">$</span> ssh-keygen -t ed25519<br/>
<span class="text-purple-400">$</span> ssh-copy-id ansible@vm1<br/>
<span class="text-purple-400">$</span> ansible --version
</div>
</div>
