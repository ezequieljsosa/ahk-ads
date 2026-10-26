<div v-pre class="h-full flex flex-col justify-between">
<div class="flex justify-between items-center mb-2">
<h2>Caso Práctico 2: Usuarios y Hardening de SSH</h2>
<span class="gamma-badge badge-concurrency">Caso práctico</span>
</div>

<div class="grid grid-cols-2 gap-4 my-auto">
<div class="gamma-card p-3 font-mono text-[9px] text-slate-200 bg-slate-950/80">
<div class="text-slate-500 mb-1"># seguridad.yml</div>
<span class="text-purple-400">- hosts:</span> all<br/>
&nbsp;&nbsp;<span class="text-purple-400">tasks:</span><br/>
&nbsp;&nbsp;- <span class="text-purple-400">name:</span> Crear usuario operador<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">ansible.builtin.user:</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name: operador<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;groups: sudo<br/>
&nbsp;&nbsp;- <span class="text-purple-400">name:</span> Crear ~/.ssh<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">ansible.builtin.file:</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;path: /home/operador/.ssh<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;state: directory<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;owner: operador<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mode: "0700"<br/>
&nbsp;&nbsp;- <span class="text-purple-400">name:</span> Cargar clave publica<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">ansible.builtin.copy:</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;content: "{{ lookup('file', '~/.ssh/id_ed25519.pub') }}\n"<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dest: /home/operador/.ssh/authorized_keys<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;owner: operador<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mode: "0600"<br/>
&nbsp;&nbsp;- <span class="text-purple-400">name:</span> Deshabilitar root por SSH<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">ansible.builtin.lineinfile:</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;path: /etc/ssh/sshd_config<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;regexp: '^PermitRootLogin'<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;line: PermitRootLogin no<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">notify:</span> Reiniciar sshd
</div>
<div class="gamma-card p-4">
<h3 class="text-sm font-bold text-cyan-300 mb-2">Por qué importa</h3>
<ul class="text-xs text-slate-300 space-y-2 list-disc list-inside">
<li>Reproduce los requisitos de la diapositiva anterior: usuario con sudo y sin acceso root.</li>
<li>Con 3 o 300 servidores el esfuerzo es el mismo.</li>
<li>El playbook queda en Git: es documentación y auditoría a la vez.</li>
</ul>
<p class="text-xs text-amber-300 mt-3">⚠️ Antes de cerrar root, verificar que el nuevo usuario ya accede; si no, se pierde el acceso.</p>
</div>
</div>
</div>
