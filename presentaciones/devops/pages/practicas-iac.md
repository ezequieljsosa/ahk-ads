<div class="h-full flex flex-col justify-between">
<div class="flex justify-between items-center mb-2">
<h2>Prácticas: Infraestructura como Código (IaC)</h2>
<span class="gamma-badge badge-presentation">Declarativo</span>
</div>

<div class="grid grid-cols-2 gap-4 my-auto">
<div class="gamma-card p-4">
<h3 class="text-sm font-bold text-emerald-300 mb-2">Principios de IaC</h3>
<ul class="text-xs text-slate-300 space-y-2 list-disc list-inside">
<li><strong>Archivos de definición declarativos:</strong> Definir la infraestructura deseada en texto.</li>
<li><strong>Control de Versiones:</strong> Todo cambio de infraestructura pasa por Git (Code Review, PR).</li>
<li><strong>Sistemas Autodocumentados:</strong> El código refleja el estado exacto de los servidores.</li>
<li><strong>Repetibilidad:</strong> Recreación de entornos completos en minutos sin inconsistencias.</li>
</ul>
</div>

<div class="gamma-card p-3 font-mono text-[10px] text-slate-200 bg-slate-950/80 overflow-x-auto">
<div class="text-slate-500 mb-1"># Ejemplo: Servicio Kubernetes (YAML)</div>
<span class="text-purple-400">apiVersion:</span> v1<br/>
<span class="text-purple-400">kind:</span> Service<br/>
<span class="text-purple-400">metadata:</span><br/>
      &nbsp;&nbsp;<span class="text-purple-400">name:</span> hello-world-lb<br/>
      &nbsp;&nbsp;<span class="text-purple-400">labels:</span><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">run:</span> hello-world<br/>
<span class="text-purple-400">spec:</span><br/>
      &nbsp;&nbsp;<span class="text-purple-400">type:</span> LoadBalancer<br/>
      &nbsp;&nbsp;<span class="text-purple-400">ports:</span><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;- <span class="text-purple-400">port:</span> 80<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">targetPort:</span> 8080
</div>
</div>

<div class="gamma-card p-3 border-l-4 border-l-emerald-400 bg-emerald-950/20 text-xs text-slate-300">
<em>"Infrastructure as code is the approach to defining computing and network infrastructure through source code that can then be treated just like any software system."</em> — Martin Fowler
</div>
</div>
