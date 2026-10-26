<div v-pre class="h-full flex flex-col justify-between">
<div class="flex justify-between items-center mb-2">
<h2>Roles: Organizar y Reutilizar</h2>
<span class="gamma-badge badge-integration">Organización</span>
</div>

<div class="grid grid-cols-2 gap-4 my-auto">
<div class="gamma-card p-3 font-mono text-[10px] text-slate-200 bg-slate-950/80">
<div class="text-slate-500 mb-1"># estructura de un rol</div>
roles/nginx/<br/>
├── tasks/main.yml<br/>
├── handlers/main.yml<br/>
├── templates/index.html.j2<br/>
├── files/<br/>
└── defaults/main.yml<br/><br/>
<div class="text-slate-500 mb-1"># site.yml</div>
<span class="text-purple-400">- hosts:</span> produccion<br/>
&nbsp;&nbsp;<span class="text-purple-400">roles:</span> [usuarios, nginx]
</div>
<div class="gamma-card p-4">
<ul class="text-xs text-slate-300 space-y-2 list-disc list-inside">
<li><strong>Rol:</strong> agrupa las tareas, handlers, plantillas y variables de una responsabilidad (ej.: nginx).</li>
<li><strong>Playbooks cortos:</strong> el playbook solo lista qué roles aplicar a cada grupo.</li>
<li><strong>Reutilizable:</strong> los casos nginx y usuarios vistos antes pasan a ser roles y se usan en cualquier proyecto.</li>
<li><strong>Convención de carpetas:</strong> Ansible sabe dónde buscar cada cosa sin que se lo indiquemos.</li>
</ul>
</div>
</div>
</div>
