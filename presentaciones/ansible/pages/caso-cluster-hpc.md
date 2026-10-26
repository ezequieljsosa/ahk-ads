<div v-pre class="h-full flex flex-col justify-between">
<div class="flex justify-between items-center mb-2">
<h2>Caso Práctico 4: Preparar los Nodos de un Clúster</h2>
<span class="gamma-badge badge-concurrency">Caso práctico</span>
</div>

<div class="gamma-card p-3 bg-indigo-950/30">
<p class="text-xs text-slate-300">
<strong>Intuición:</strong> un clúster (Slurm, Kubernetes) reparte trabajo entre muchas máquinas y solo funciona si todas son <em>iguales</em>: mismo software, misma hora, mismos usuarios. Con 3 nodos se hace a mano; con 30 siempre se olvida algo en alguno. La "receta" en Ansible garantiza que cada nodo quede idéntico, y para sumar un nodo nuevo basta con volver a ejecutarla.
</p>
</div>

<div class="grid grid-cols-2 gap-3">
<div class="gamma-card p-3 font-mono text-[9px] text-slate-200 bg-slate-950/80">
<div class="text-slate-500 mb-1"># nodos-cluster.yml</div>
<span class="text-purple-400">- hosts:</span> workers<br/>
&nbsp;&nbsp;<span class="text-purple-400">tasks:</span><br/>
&nbsp;&nbsp;- <span class="text-purple-400">name:</span> Paquetes base<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">ansible.builtin.apt:</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name: [docker.io, chrony]<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;state: present<br/>
&nbsp;&nbsp;- <span class="text-purple-400">name:</span> Reloj sincronizado<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">ansible.builtin.service:</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name: chrony<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;state: started<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;enabled: true<br/>
&nbsp;&nbsp;- <span class="text-purple-400">name:</span> Usuario del scheduler<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">ansible.builtin.user:</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name: slurm<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;uid: 1500<br/>
&nbsp;&nbsp;- <span class="text-purple-400">name:</span> Configuración del clúster<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">ansible.builtin.template:</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src: slurm.conf.j2<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dest: /etc/slurm/slurm.conf
</div>
<div class="gamma-card p-3">
<h3 class="text-sm font-bold text-cyan-300 mb-2">¿Por qué cada tarea?</h3>
<ul class="text-xs text-slate-300 space-y-2">
<li><strong>📦 Paquetes base:</strong> si un nodo no tiene Docker, los trabajos que lo usan fallan solo en ese nodo.</li>
<li><strong>🕒 Reloj sincronizado:</strong> los componentes del clúster se autentican con marcas de tiempo; con la hora desfasada rechazan al nodo.</li>
<li><strong>👤 Mismo <code>uid</code>:</strong> si <code>slurm</code> es 1500 en un nodo y 1501 en otro, aparecen errores de permisos sobre archivos compartidos.</li>
<li><strong>📄 Misma configuración:</strong> si los nodos no coinciden con el controlador, el scheduler no los reconoce.</li>
</ul>
<p class="text-[11px] text-slate-400 mt-2">Es el paso previo a las prácticas de HPC (Slurm) y Kubernetes.</p>
</div>
</div>
</div>
