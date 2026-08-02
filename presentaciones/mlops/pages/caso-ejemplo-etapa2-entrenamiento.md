---
layout: default
---

<div class="gamma-badge badge-integration mb-2">
Etapa 2 — Training & Experiments
</div>

<h2 class="text-3xl font-bold mb-4">
Etapa 2: Entrenamiento, Experimentos y Registry
</h2>

<div class="grid grid-cols-2 gap-4">
<div class="gamma-card p-4">
<h3 class="text-base font-semibold text-purple-400 mb-2">
📌 ¿Qué hacemos en este proyecto?
</h3>
<p class="text-xs text-slate-300 mb-2">
Entrenamos múltiples algoritmos (XGBoost vs RandomForest) ajustando parámetros como profundidad de árbol y número de estimadores.
</p>
<ul class="text-xs text-slate-400 space-y-1">
<li>• Evaluamos F1-Score y ROC-AUC.</li>
<li>• Registramos el modelo ganador para despliegue.</li>
</ul>
</div>

<div class="gamma-card p-4">
<div class="flex items-center justify-between mb-2">
<h3 class="text-base font-semibold text-purple-400">
🛠️ Herramienta: MLflow
</h3>
<span class="px-2 py-0.5 rounded text-[10px] bg-purple-500/20 text-purple-300 font-mono">MLflow Tracking &amp; Registry</span>
</div>
<p class="text-xs text-slate-300 mb-2">
Guarda automáticamente métricas, parámetros y guarda el archivo binario del modelo asignando versiones.
</p>
<div class="bg-slate-900/80 p-2 rounded text-[11px] font-mono text-purple-300 border border-slate-700/50 space-y-1">
<div>import mlflow</div>
<div>with mlflow.start_run():</div>
<div>&nbsp;&nbsp;mlflow.log_param("max_depth", 5)</div>
<div>&nbsp;&nbsp;mlflow.log_metric("f1_score", 0.89)</div>
<div>&nbsp;&nbsp;mlflow.sklearn.log_model(model, "churn-model")</div>
</div>
</div>
</div>

<div class="gamma-card p-3 mt-4 text-center border-purple-500/30">
<p class="text-xs text-purple-300">
🏆 <strong>Resultado de la Etapa:</strong> Modelo `ChurnModel-v2` promovido a estado <strong>"Staging/Production"</strong> en MLflow Model Registry.
</p>
</div>
