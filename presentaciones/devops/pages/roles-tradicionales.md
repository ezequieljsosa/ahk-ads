<div class="h-full flex flex-col">
<div class="flex justify-between items-center mb-4">
<h2>Organización Tradicional por Función</h2>
<span class="gamma-badge badge-transversal">Cascada / Silos</span>
</div>

```mermaid
graph LR
  Analista["Analista"] -->|"req"| Dev["Dev / Diseñador"]
  Dev -->|"entregable"| Tester["Tester"]
  Tester -->|"probado"| Ops["Sysadmin / Ops"]
  Ops -->|"producción"| Prod["Producción"]
  Tester -.->|"bug"| Dev
```

<div class="grid grid-cols-2 gap-4 mt-4">
<div class="gamma-card p-4">
<h4 class="text-sm font-bold text-rose-300 mb-1">Problemas de Responsabilidades</h4>
<p class="text-xs text-slate-300">
        ¿Qué pasa cuando algo no funciona en producción? "En mi máquina funciona", falta de propiedad compartida y fricción entre equipos.
</p>
</div>
<div class="gamma-card p-4">
<h4 class="text-sm font-bold text-cyan-300 mb-1">Soluciones Modernas / SRE</h4>
<p class="text-xs text-slate-300">
<strong>Site Reliability Engineering (Google):</strong> Equipos 50% Devs y 50% Sysadmins.<br/>
<em>"You build it, you run it..."</em> (Werner Vogels - Amazon).
</p>
</div>
</div>
</div>
