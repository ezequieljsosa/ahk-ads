<div class="h-full flex flex-col justify-between">
<div class="flex justify-between items-center mb-2">
<h2>Configuración e Inventario</h2>
<span class="gamma-badge badge-data">Inventario</span>
</div>

<div class="grid grid-cols-3 gap-3 my-auto">
<div class="gamma-card p-3 font-mono text-[10px] text-slate-200 bg-slate-950/80">
<div class="text-slate-500 mb-1"># ansible.cfg</div>
<span class="text-purple-400">[defaults]</span><br/>
inventory = ./inventario<br/><br/>
<span class="text-purple-400">[privilege_escalation]</span><br/>
become = True
</div>
<div class="gamma-card p-3 font-mono text-[10px] text-slate-200 bg-slate-950/80">
<div class="text-slate-500 mb-1"># inventario</div>
<span class="text-purple-400">[produccion]</span><br/>
vm1<br/>
vm2<br/><br/>
<span class="text-purple-400">[desarrollo]</span><br/>
vm3
</div>
<div class="gamma-card p-3 font-mono text-[10px] text-slate-200 bg-slate-950/80">
<div class="text-slate-500 mb-1"># /etc/hosts</div>
192.168.56.11 vm1<br/>
192.168.56.12 vm2<br/>
192.168.56.13 vm3
</div>
</div>

<div class="gamma-card p-3 text-xs text-slate-300">
<strong>Probar la conexión antes de escribir playbooks:</strong>
<code>ansible produccion -m ping</code> · <code>ansible all -m command -a "uptime"</code>
</div>
</div>
