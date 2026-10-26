<div v-pre class="h-full flex flex-col justify-between">
<div class="flex justify-between items-center mb-2">
<h2>Manejo de Secretos con Ansible Vault</h2>
<span class="gamma-badge badge-transversal">Seguridad</span>
</div>

<div class="grid grid-cols-2 gap-4 my-auto">
<div class="gamma-card p-3 font-mono text-[10px] text-slate-200 bg-slate-950/80">
<span class="text-purple-400">$</span> ansible-vault create secretos.yml<br/>
<span class="text-purple-400">$</span> ansible-vault edit secretos.yml<br/>
<span class="text-purple-400">$</span> ansible-vault encrypt group_vars/produccion.yml<br/>
<span class="text-purple-400">$</span> ansible-playbook app.yml --ask-vault-pass<br/><br/>
<div class="text-slate-500 mb-1"># secretos.yml (cifrado en el repo)</div>
$ANSIBLE_VAULT;1.1;AES256<br/>
6338396233343638326263...
</div>
<div class="gamma-card p-4">
<h3 class="text-sm font-bold text-cyan-300 mb-2">Qué se cifra</h3>
<ul class="text-xs text-slate-300 space-y-1 list-disc list-inside">
<li>Contraseñas de bases de datos</li>
<li>Tokens y claves de API</li>
<li>Certificados y claves privadas</li>
</ul>
<p class="text-xs text-amber-300 mt-3">⚠️ Nunca subir secretos en texto plano a Git. La contraseña del vault tampoco va en el repo: en CI se pasa como secret.</p>
</div>
</div>
</div>
