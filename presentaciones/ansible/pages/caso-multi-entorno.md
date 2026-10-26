<div v-pre class="h-full flex flex-col justify-between">
<div class="flex justify-between items-center mb-2">
<h2>Caso Práctico 3: Producción y Desarrollo con el Mismo Código</h2>
<span class="gamma-badge badge-concurrency">Caso práctico</span>
</div>

<div class="grid grid-cols-3 gap-3 my-auto">
<div class="gamma-card p-3 font-mono text-[10px] text-slate-200 bg-slate-950/80">
<div class="text-slate-500 mb-1"># estructura</div>
proyecto/<br/>
├── ansible.cfg<br/>
├── inventario<br/>
├── group_vars/<br/>
│&nbsp;&nbsp;├── produccion.yml<br/>
│&nbsp;&nbsp;└── desarrollo.yml<br/>
└── app.yml
</div>
<div class="gamma-card p-3 font-mono text-[10px] text-slate-200 bg-slate-950/80">
<div class="text-slate-500 mb-1"># group_vars/produccion.yml</div>
app_debug: false<br/>
app_workers: 8<br/>
app_url: "https://app.empresa.com"<br/><br/>
<div class="text-slate-500 mb-1"># group_vars/desarrollo.yml</div>
app_debug: true<br/>
app_workers: 1<br/>
app_url: "http://vm3:8000"
</div>
<div class="gamma-card p-3 font-mono text-[10px] text-slate-200 bg-slate-950/80">
<div class="text-slate-500 mb-1"># templates/app.env.j2</div>
DEBUG={{ app_debug }}<br/>
WORKERS={{ app_workers }}<br/>
URL={{ app_url }}
</div>
</div>

<div class="gamma-card p-3 text-xs text-slate-300">
<strong>Idea clave:</strong> el playbook es uno solo; lo que cambia entre entornos son las variables del grupo. Se aplica con
<code>ansible-playbook app.yml --limit desarrollo</code> o <code>--limit produccion</code>.
</div>
</div>
