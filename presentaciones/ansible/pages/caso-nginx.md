<div class="h-full flex flex-col justify-between">
<div class="flex justify-between items-center mb-2">
<h2>Caso Práctico 1: Desplegar un Servidor Web</h2>
<span class="gamma-badge badge-concurrency">Caso práctico</span>
</div>

<div class="grid grid-cols-2 gap-4 my-auto">
<div class="gamma-card p-3 font-mono text-[10px] text-slate-200 bg-slate-950/80">
<div class="text-slate-500 mb-1"># nginx.yml</div>
<span class="text-purple-400">- hosts:</span> produccion<br/>
&nbsp;&nbsp;<span class="text-purple-400">tasks:</span><br/>
&nbsp;&nbsp;- <span class="text-purple-400">name:</span> Instalar nginx<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">ansible.builtin.apt:</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name: nginx<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;state: present<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;update_cache: true<br/>
&nbsp;&nbsp;- <span class="text-purple-400">name:</span> Publicar index.html<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">ansible.builtin.copy:</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;src: index.html<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dest: /var/www/html/index.html<br/>
&nbsp;&nbsp;- <span class="text-purple-400">name:</span> Nginx activo al arranque<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">ansible.builtin.service:</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name: nginx<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;state: started<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;enabled: true
</div>
<div class="gamma-card p-4">
<h3 class="text-sm font-bold text-cyan-300 mb-2">Qué demuestra</h3>
<ul class="text-xs text-slate-300 space-y-2 list-disc list-inside">
<li>Tres tareas, varios módulos: paquete, archivo y servicio.</li>
<li>El mismo playbook configura vm1 y vm2 en paralelo.</li>
<li>Verificación: <code>curl http://vm1</code> y <code>curl http://vm2</code>.</li>
<li>Se puede correr N veces: la segunda vez todo da <code>ok</code>, sin cambios.</li>
</ul>
<p class="text-xs text-slate-400 mt-3">Ejercicio: modificar <code>index.html</code> y volver a ejecutar. ¿Qué tareas dan <code>changed</code>?</p>
</div>
</div>
</div>
