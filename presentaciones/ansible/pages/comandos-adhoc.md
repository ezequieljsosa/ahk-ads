<div v-pre class="h-full flex flex-col justify-between">
<div class="flex justify-between items-center mb-2">
<h2>Comandos Ad-hoc: Automatizar sin Escribir un Playbook</h2>
<span class="gamma-badge badge-integration">Ad-hoc</span>
</div>

<div class="grid grid-cols-2 gap-4 my-auto">
<div class="gamma-card p-3 font-mono text-[10px] text-slate-200 bg-slate-950/80">
<div class="text-slate-500 mb-1"># ansible &lt;grupo&gt; -m &lt;modulo&gt; -a "&lt;args&gt;"</div>
<span class="text-purple-400">$</span> ansible all -m ping<br/>
<span class="text-purple-400">$</span> ansible produccion -a "uptime"<br/>
<span class="text-purple-400">$</span> ansible all -m apt -a "name=htop state=present"<br/>
<span class="text-purple-400">$</span> ansible desarrollo -m service -a "name=nginx state=restarted"<br/>
<span class="text-purple-400">$</span> ansible all -m setup -a "filter=ansible_distribution*"<br/>
<span class="text-purple-400">$</span> ansible all -m copy -a "src=motd dest=/etc/motd"
</div>
<div class="gamma-card p-4">
<h3 class="text-sm font-bold text-cyan-300 mb-2">Cuándo usarlos</h3>
<ul class="text-xs text-slate-300 space-y-2 list-disc list-inside">
<li>Tareas únicas: reiniciar un servicio, ver el uso de disco, chequear la versión del kernel.</li>
<li>Diagnóstico rápido sobre toda la flota.</li>
<li>Explorar un módulo antes de ponerlo en un playbook.</li>
</ul>
<p class="text-xs text-slate-400 mt-3">Si se repite, se convierte en playbook y va a Git.</p>
</div>
</div>
</div>
