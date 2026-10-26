<div v-pre class="h-full flex flex-col justify-between">
<div class="flex justify-between items-center mb-2">
<h2>Facts, Condicionales y Bucles</h2>
<span class="gamma-badge badge-data">Lógica</span>
</div>

<div class="grid grid-cols-2 gap-3 my-auto">
<div class="gamma-card p-3 font-mono text-[10px] text-slate-200 bg-slate-950/80">
<div class="text-slate-500 mb-1"># Un playbook que se adapta al sistema</div>
<span class="text-purple-400">- hosts:</span> all<br/>
&nbsp;&nbsp;<span class="text-purple-400">tasks:</span><br/>
&nbsp;&nbsp;- <span class="text-purple-400">name:</span> Instalar herramientas<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">ansible.builtin.apt:</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name: "{{ item }}"<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;state: present<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">loop:</span> [git, htop, curl, tmux]<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">when:</span> ansible_os_family == "Debian"<br/>
&nbsp;&nbsp;- <span class="text-purple-400">name:</span> Mostrar memoria<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">ansible.builtin.debug:</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;msg: "{{ ansible_memtotal_mb }} MB en {{ inventory_hostname }}"
</div>
<div class="gamma-card p-4">
<ul class="text-xs text-slate-300 space-y-2 list-disc list-inside">
<li><strong>Facts:</strong> información que Ansible recolecta de cada host (SO, IP, memoria, discos). Se listan con <code>ansible vm1 -m setup</code>.</li>
<li><strong>when:</strong> ejecuta una tarea solo si se cumple la condición.</li>
<li><strong>loop:</strong> repite una tarea para cada elemento de una lista.</li>
<li><strong>debug:</strong> imprime valores para entender qué está pasando.</li>
</ul>
</div>
</div>

<div class="grid grid-cols-2 gap-3">
<div class="gamma-card p-2 font-mono text-[9px] text-slate-300 bg-slate-950/80">
<div class="text-slate-500">$ ansible-playbook herramientas.yml</div>
TASK [Instalar herramientas] ***<br/>
<span class="text-amber-300">changed: [vm1]</span> =&gt; (item=git)<br/>
<span class="text-emerald-300">ok: [vm1]</span> =&gt; (item=htop)<br/>
<span class="text-amber-300">changed: [vm1]</span> =&gt; (item=curl)<br/>
<span class="text-sky-300">skipping: [vm3]</span> <span class="text-slate-500"># when falso: vm3 no es Debian</span>
</div>
<div class="gamma-card p-2 font-mono text-[9px] text-slate-300 bg-slate-950/80">
TASK [Mostrar memoria] ***<br/>
ok: [vm1] =&gt; { "msg": "1963 MB en vm1" }<br/>
ok: [vm2] =&gt; { "msg": "1963 MB en vm2" }<br/>
<div class="text-slate-500 mt-1">$ ansible vm1 -m setup -a "filter=ansible_os_family"</div>
vm1 | SUCCESS =&gt; { "ansible_facts": { "ansible_os_family": "Debian" } }
</div>
</div>
</div>
