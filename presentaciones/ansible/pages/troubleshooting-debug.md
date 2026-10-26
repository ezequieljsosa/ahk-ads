<div v-pre class="h-full flex flex-col justify-between">
<div class="flex justify-between items-center mb-2">
<h2>Cuando Algo Falla: Diagnóstico</h2>
<span class="gamma-badge badge-transversal">Troubleshooting</span>
</div>

<div class="grid grid-cols-2 gap-3 my-auto">
<div class="gamma-card p-3">
<h3 class="text-sm font-bold text-rose-300 mb-2">Errores frecuentes</h3>
<ul class="text-xs text-slate-300 space-y-2 list-disc list-inside">
<li><code>UNREACHABLE</code>: SSH no conecta (host, usuario o clave incorrectos).</li>
<li><code>Permission denied</code>: falta <code>become: true</code> o sudo sin contraseña.</li>
<li><code>Host key verification failed</code>: aceptar primero la huella con <code>ssh vm1</code>.</li>
<li>Error de sintaxis YAML: casi siempre es indentación.</li>
<li><code>module not found</code>: falta instalar la colección.</li>
</ul>
</div>
<div class="gamma-card p-3 font-mono text-[10px] text-slate-200 bg-slate-950/80">
<div class="text-slate-500 mb-1"># Herramientas de diagnóstico</div>
<span class="text-purple-400">$</span> ansible-playbook x.yml --syntax-check<br/>
<span class="text-purple-400">$</span> ansible-playbook x.yml -vvv<br/>
<span class="text-purple-400">$</span> ansible-playbook x.yml --step<br/>
<span class="text-purple-400">$</span> ansible-inventory --graph<br/>
<span class="text-purple-400">$</span> ansible-doc ansible.builtin.copy<br/>
<span class="text-purple-400">$</span> ssh -v ansible@vm1
</div>
</div>
</div>
