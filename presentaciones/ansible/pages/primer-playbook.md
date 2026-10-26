<div class="h-full flex flex-col justify-between">
<div class="flex justify-between items-center mb-2">
<h2>Nuestro Primer Playbook</h2>
<span class="gamma-badge badge-domain">Playbooks</span>
</div>

<div class="grid grid-cols-2 gap-4 my-auto">
<div class="gamma-card p-3 font-mono text-[10px] text-slate-200 bg-slate-950/80">
<div class="text-slate-500 mb-1"># playbookX.yml</div>
<span class="text-purple-400">- name:</span> Ping a produccion<br/>
&nbsp;&nbsp;<span class="text-purple-400">hosts:</span> produccion<br/>
&nbsp;&nbsp;<span class="text-purple-400">tasks:</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;- <span class="text-purple-400">name:</span> Ping<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">ansible.builtin.ping:</span>
</div>
<div class="gamma-card p-4">
<h3 class="text-sm font-bold text-cyan-300 mb-2">Anatomía</h3>
<ul class="text-xs text-slate-300 space-y-2 list-disc list-inside">
<li><strong>hosts:</strong> a qué grupo del inventario se aplica.</li>
<li><strong>tasks:</strong> lista ordenada de tareas.</li>
<li><strong>módulo:</strong> qué acción ejecuta cada tarea.</li>
</ul>
<p class="text-xs text-slate-400 mt-3">Ejecución:</p>
<code class="text-xs">ansible-playbook playbookX.yml</code>
</div>
</div>

<div class="gamma-card p-3 font-mono text-[10px] text-slate-300 bg-slate-950/80">
PLAY [Ping a produccion] ***<br/>
ok: [vm1]<br/>
ok: [vm2]<br/>
PLAY RECAP: vm1 ok=2 changed=0 &nbsp;|&nbsp; vm2 ok=2 changed=0
</div>
</div>
