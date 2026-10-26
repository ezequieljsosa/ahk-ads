<div class="h-full flex flex-col justify-between">
<div class="flex justify-between items-center mb-2">
<h2>Arquitectura y Componentes</h2>
<span class="gamma-badge badge-integration">Arquitectura</span>
</div>

```mermaid
graph LR
  CN["Nodo de control<br/>ansible-playbook"] -->|"SSH"| V1["vm1 - produccion"]
  CN -->|"SSH"| V2["vm2 - produccion"]
  CN -->|"SSH"| V3["vm3 - desarrollo"]
  INV["Inventario"] --> CN
  PB["Playbooks YAML"] --> CN
```

<div class="grid grid-cols-2 gap-3">
<div class="gamma-card p-3">
<ul class="text-xs text-slate-300 space-y-1">
<li><strong>Nodo de control:</strong> la máquina desde donde se ejecuta Ansible.</li>
<li><strong>Nodos gestionados:</strong> los servidores que se configuran.</li>
<li><strong>Inventario:</strong> grupos y listas de hosts.</li>
</ul>
</div>
<div class="gamma-card p-3">
<ul class="text-xs text-slate-300 space-y-1">
<li><strong>Playbook:</strong> archivo YAML que agrupa tareas.</li>
<li><strong>Tarea (task):</strong> una acción sobre los hosts.</li>
<li><strong>Módulo:</strong> biblioteca de acciones, normalmente un wrapper de comandos.</li>
</ul>
</div>
</div>
</div>
