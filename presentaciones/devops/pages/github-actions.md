<div class="h-full flex flex-col justify-between">
<div class="flex justify-between items-center mb-2">
<h2>Plataforma de CI/CD: GitHub Actions</h2>
<span class="gamma-badge badge-transversal">Workflows</span>
</div>

<div class="grid grid-cols-2 gap-4 my-auto">
<div class="gamma-card p-4">
<h3 class="text-sm font-bold text-cyan-300 mb-2">Componentes Principales</h3>
<ul class="text-xs text-slate-300 space-y-2">
<li><strong>Workflows:</strong> Proceso automatizado configurable definido en YAML (en <code>.github/workflows/</code>).</li>
<li><strong>Events:</strong> Eventos que disparan el flujo (ej: <code>push</code>, <code>pull_request</code>).</li>
<li><strong>Jobs:</strong> Conjunto de pasos que se ejecutan en un mismo runner.</li>
<li><strong>Steps / Actions:</strong> Tareas individuales ejecutadas secuencialmente.</li>
<li><strong>Runners:</strong> Servidores ejecutoras (Ubuntu, Windows, macOS).</li>
</ul>
</div>

<div class="gamma-card p-3 font-mono text-[10px] text-slate-200 bg-slate-950/80 overflow-x-auto">
<div class="text-slate-500 mb-1"># .github/workflows/ci.yml</div>
<span class="text-purple-400">name:</span> Push CI<br/><br/>
<span class="text-purple-400">on:</span> [push]<br/><br/>
<span class="text-purple-400">jobs:</span><br/>
      &nbsp;&nbsp;<span class="text-purple-400">test_commit:</span><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">runs-on:</span> ubuntu-latest<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">steps:</span><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- <span class="text-purple-400">uses:</span> actions/checkout@v4<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- <span class="text-purple-400">name:</span> Set up JDK 17<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">uses:</span> actions/setup-java@v3<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">with:</span> { java-version: '17', distribution: 'temurin' }<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- <span class="text-purple-400">name:</span> Correr pruebas<br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-400">run:</span> mvn test
</div>
</div>

<div class="gamma-card p-3 text-center bg-indigo-950/30 text-xs text-slate-300">
    ⚡ <em>Automatizar cada Pull Request previene la integración de errores en la rama principal.</em>
</div>
</div>
