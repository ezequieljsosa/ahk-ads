<div v-pre class="h-full flex flex-col justify-between">
<div class="flex justify-between items-center mb-2">
<h2>Ansible en el Ecosistema de Automatización</h2>
<span class="gamma-badge badge-domain">Contexto</span>
</div>

<div class="gamma-card p-3 my-auto">
<table class="text-xs text-slate-300 w-full">
<thead>
<tr class="text-cyan-300 text-left"><th class="p-2">Herramienta</th><th class="p-2">Enfoque</th><th class="p-2">Agente</th><th class="p-2">Lenguaje</th><th class="p-2">Uso típico</th></tr>
</thead>
<tbody>
<tr><td class="p-2"><strong>Ansible</strong></td><td class="p-2">Configuración + orquestación</td><td class="p-2">No (SSH)</td><td class="p-2">YAML</td><td class="p-2">Servidores, despliegues, tareas operativas</td></tr>
<tr><td class="p-2"><strong>Puppet / Chef</strong></td><td class="p-2">Configuración declarativa</td><td class="p-2">Sí</td><td class="p-2">DSL / Ruby</td><td class="p-2">Flotas grandes con estado continuo</td></tr>
<tr><td class="p-2"><strong>Terraform</strong></td><td class="p-2">Aprovisionamiento</td><td class="p-2">No (API)</td><td class="p-2">HCL</td><td class="p-2">Crear VMs, redes, buckets en la nube</td></tr>
<tr><td class="p-2"><strong>Scripts Bash</strong></td><td class="p-2">Imperativo</td><td class="p-2">No</td><td class="p-2">Bash</td><td class="p-2">Tareas puntuales</td></tr>
</tbody>
</table>
</div>

<div class="gamma-card p-3 text-center bg-indigo-950/30 text-xs text-slate-300">
💡 <em>Combinación habitual: Terraform crea las máquinas y Ansible las configura.</em>
</div>
</div>
