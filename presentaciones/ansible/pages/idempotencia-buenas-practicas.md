<div class="h-full flex flex-col justify-between">
<div class="flex justify-between items-center mb-2">
<h2>Idempotencia y Buenas Prácticas</h2>
<span class="gamma-badge badge-transversal">Buenas prácticas</span>
</div>

<div class="grid grid-cols-2 gap-4 my-auto">
<div class="gamma-card p-4">
<h3 class="text-sm font-bold text-cyan-300 mb-2">Idempotencia</h3>
<p class="text-xs text-slate-300 mb-2">Ejecutar un playbook una o diez veces deja el sistema en el mismo estado.</p>
<ul class="text-xs text-slate-300 space-y-1 list-disc list-inside">
<li><code>ok</code>: ya estaba como se pidió.</li>
<li><code>changed</code>: Ansible modificó algo.</li>
<li><code>failed</code>: la tarea falló y se detiene en ese host.</li>
</ul>
<p class="text-xs text-slate-400 mt-2">Por eso se prefiere <code>apt</code> a <code>shell: apt install</code>.</p>
</div>
<div class="gamma-card p-4">
<h3 class="text-sm font-bold text-emerald-300 mb-2">Buenas prácticas</h3>
<ul class="text-xs text-slate-300 space-y-1 list-disc list-inside">
<li>Probar con <code>--check --diff</code> antes de aplicar.</li>
<li>Usar <code>--limit vm1</code> para acotar el alcance.</li>
<li>Preferir módulos antes que <code>command</code>/<code>shell</code>.</li>
<li>Versionar playbooks e inventario en Git.</li>
<li>Secretos con <code>ansible-vault</code>, nunca en texto plano.</li>
<li>Reutilizar con roles cuando el proyecto crece.</li>
</ul>
</div>
</div>

<div class="gamma-card p-3 font-mono text-[10px] text-slate-200 bg-slate-950/80">
<span class="text-purple-400">$</span> ansible-playbook nginx.yml --check --diff --limit vm1
</div>
</div>
