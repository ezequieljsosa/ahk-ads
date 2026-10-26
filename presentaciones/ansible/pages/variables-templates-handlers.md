<div v-pre class="h-full flex flex-col justify-between">
<div class="flex justify-between items-center mb-2">
<h2>Variables, Plantillas y Handlers</h2>
<span class="gamma-badge badge-data">Reutilización</span>
</div>

<div class="grid grid-cols-2 gap-3 my-auto">
<div class="gamma-card p-3 font-mono text-[10px] text-slate-200 bg-slate-950/80">
<div class="text-slate-500 mb-1"># playbook con variable y handler</div>
<span class="text-purple-400">- hosts:</span> all<br/>
&nbsp;&nbsp;<span class="text-purple-400">vars:</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;mensaje: "Servidor de {{ group_names[0] }}"<br/>
&nbsp;&nbsp;<span class="text-purple-400">tasks:</span><br/>
&nbsp;&nbsp;- <span class="text-purple-400">ansible.builtin.template:</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src: index.html.j2<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dest: /var/www/html/index.html<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">notify:</span> Reiniciar nginx<br/>
&nbsp;&nbsp;<span class="text-purple-400">handlers:</span><br/>
&nbsp;&nbsp;- <span class="text-purple-400">name:</span> Reiniciar nginx<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">ansible.builtin.service:</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name: nginx<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;state: restarted
</div>
<div class="gamma-card p-4">
<ul class="text-xs text-slate-300 space-y-2 list-disc list-inside">
<li><strong>Variables:</strong> evitan repetir valores; se pueden definir por grupo o por host.</li>
<li><strong>Plantillas Jinja2:</strong> un mismo archivo genera una configuración distinta por host (<code>{{ inventory_hostname }}</code>).</li>
<li><strong>Handlers:</strong> se ejecutan solo si la tarea que los notifica <em>cambió</em> algo; ideal para reiniciar servicios.</li>
</ul>
</div>
</div>

<div class="grid grid-cols-2 gap-3">
<div class="gamma-card p-2 font-mono text-[9px] text-slate-300 bg-slate-950/80">
<div class="text-slate-500">$ ansible-playbook web.yml &nbsp;(primera ejecución)</div>
TASK [template] ***<br/>
<span class="text-amber-300">changed: [vm1]</span> &nbsp; <span class="text-amber-300">changed: [vm2]</span><br/>
RUNNING HANDLER [Reiniciar nginx] ***<br/>
<span class="text-amber-300">changed: [vm1]</span> &nbsp; <span class="text-amber-300">changed: [vm2]</span><br/>
RECAP: vm1 ok=3 <span class="text-amber-300">changed=2</span> | vm2 ok=3 <span class="text-amber-300">changed=2</span>
</div>
<div class="gamma-card p-2 font-mono text-[9px] text-slate-300 bg-slate-950/80">
<div class="text-slate-500">$ ansible-playbook web.yml &nbsp;(segunda ejecución)</div>
TASK [template] ***<br/>
<span class="text-emerald-300">ok: [vm1]</span> &nbsp; <span class="text-emerald-300">ok: [vm2]</span><br/>
<span class="text-slate-500">(el handler no se ejecuta: nada cambió)</span><br/>
RECAP: vm1 ok=2 <span class="text-emerald-300">changed=0</span> | vm2 ok=2 <span class="text-emerald-300">changed=0</span><br/>
$ curl vm1 &nbsp;→ Servidor de produccion
</div>
</div>
</div>
