<div v-pre class="h-full flex flex-col justify-between">
<div class="flex justify-between items-center mb-2">
<h2>Caso Práctico 5: Workflow de GitHub Actions con Ansible</h2>
<span class="gamma-badge badge-concurrency">Caso práctico</span>
</div>

<div class="grid grid-cols-2 gap-3 my-auto">
<div class="gamma-card p-3 font-mono text-[9px] text-slate-200 bg-slate-950/80">
<div class="text-slate-500 mb-1"># .github/workflows/ansible.yml</div>
<span class="text-purple-400">on:</span> { pull_request: {}, push: { branches: [main] } }<br/>
<span class="text-purple-400">jobs:</span><br/>
&nbsp;&nbsp;<span class="text-purple-400">validar:</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">runs-on:</span> ubuntu-latest<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">steps:</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;- <span class="text-purple-400">uses:</span> actions/checkout@v4<br/>
&nbsp;&nbsp;&nbsp;&nbsp;- <span class="text-purple-400">run:</span> pip install ansible ansible-lint<br/>
&nbsp;&nbsp;&nbsp;&nbsp;- <span class="text-purple-400">run:</span> ansible-lint site.yml<br/>
&nbsp;&nbsp;<span class="text-purple-400">desplegar:</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">needs:</span> validar<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">if:</span> github.ref == 'refs/heads/main'<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">environment:</span> produccion<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">runs-on:</span> self-hosted<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">steps:</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;- <span class="text-purple-400">uses:</span> actions/checkout@v4<br/>
&nbsp;&nbsp;&nbsp;&nbsp;- <span class="text-purple-400">run:</span> ansible-playbook site.yml<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">env:</span> { ANSIBLE_VAULT_PASSWORD_FILE: .vault_pass }
</div>
<div class="gamma-card p-4">
<ul class="text-xs text-slate-300 space-y-2 list-disc list-inside">
<li><strong>validar:</strong> corre en cada PR; si el lint falla, no se puede mergear.</li>
<li><strong>desplegar:</strong> solo en <code>main</code> y solo si <code>validar</code> pasó.</li>
<li><strong>environment:</strong> permite exigir aprobación manual antes de tocar producción.</li>
<li><strong>self-hosted runner:</strong> el runner de GitHub no llega a servidores en una red privada; uno propio dentro de la red sí.</li>
<li><strong>Secretos:</strong> la clave SSH y la contraseña del Vault se guardan como secrets del repositorio, nunca en el código.</li>
</ul>
</div>
</div>
</div>
