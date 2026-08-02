# Instrucciones de Contexto para Agentes de IA (AGENTS.md)

Este archivo contiene directivas obligatorias para cualquier agente de Inteligencia Artificial (IA) que colabore, modifique o cree archivos en este repositorio.

---

## 📖 1. Lectura Obligatoria Inicial
Antes de realizar cualquier propuesta o modificar código, debes leer los siguientes archivos en la raíz de este directorio:
* **[README.md](./README.md):** Para comprender la estructura de las diapositivas modularizadas y cómo correr la CLI.
* **[TROUBLESHOOTING.md](./TROUBLESHOOTING.md):** Para conocer las restricciones de sintaxis en gráficos Mermaid, problemas de caché, formato y manejo de imágenes.

---

## ⚡ 2. Directivas de Comportamiento del Agente
* **No solicitar confirmación de edición:** No preguntes al usuario si puedes crear, renombrar o modificar archivos de código dentro de la carpeta de trabajo (`presentaciones/`). Procede a editarlos de forma directa e interactiva.
* **Compatibilidad de Node.js:** Todo comando de Slidev o Vite (`dev`, `build`, `export`) debe ejecutarse especificando el PATH a Node.js v26:
  `PATH=$HOME/.nvm/versions/node/v26.5.0/bin:$PATH pnpm ...`
* **Reglas para Guías Prácticas (`practicas/`):** Todos los laboratorios y guías prácticas residen en la carpeta `practicas/` en formato Markdown (`.md`) con nombres en **kebab-case** semántico (ej. `practica-mlops.md`).
* **Validación obligatoria:** Antes de dar por finalizado tu turno, debes ejecutar la compilación completa con `node build-all.js` para certificar que tanto las presentaciones como las prácticas compilan sin errores ni advertencias:
  `PATH=$HOME/.nvm/versions/node/v20.20.1/bin:$PATH node build-all.js`

---

## 🎨 3. Reglas de Estructura, Imagen y Estética (Resumen)
Para mantener la consistencia y evitar errores del compilador, debes adherirte estrictamente a:
* Las **Reglas de Diseño y Estilo** detalladas en [README.md](./README.md#🎨-tipografía-y-estilo-de-diseño-gamma-icebreaker) (tema Gamma "Icebreaker", fuentes, tarjetas glassmorphic, badges).
* **Regla de Indentación HTML Crítica:** NUNCA indentar etiquetas HTML (`<div>`, `<p>`, `<span>`, etc.) con 4 o más espacios en los archivos Markdown dentro de `pages/`. CommonMark interpreta 4+ espacios de sangría como bloques de código literal (`<pre><code>`), exponiendo el marcado HTML en pantalla. Usar siempre un máximo de 0 a 2 espacios de sangría para etiquetas HTML.
* **Copia Local Obligatoria de `style.css`:** Slidev busca el archivo de estilos en el subdirectorio de la presentación (ej: `presentaciones/<tema>/style.css`). Toda actualización a `style.css` en la raíz DEBE copiarse en cada subdirectorio de presentación para que surta efecto en tiempo de ejecución.
* **Selección de texto habilitada:** Mantener en `style.css` la regla de selección acotada a elementos de texto (`p, li, span, code, blockquote, h1, h2, h3, h4 { user-select: text !important; -webkit-user-select: text !important; }`) para permitir al usuario copiar texto sin romper el diseño/interactividad.
* **Estructura Aislada por Presentación (Subdirectorios):** Cada presentación DEBE residir dentro de su propio subdirectorio dedicado dentro de `presentaciones/` (ej. `presentaciones/<nombre-tema>/`). Está prohibido mezclar páginas de distintas presentaciones en un directorio `pages/` global o dejar archivos `.md` principales en la raíz. Cada subdirectorio contiene:
  1. `<nombre-tema>.md` (Archivo principal de la presentación).
  2. `pages/` (Directorio exclusivo con sus páginas modularizadas).
  3. `style.css` (Copia del archivo de estilos global en la raíz de la subcarpeta, requerido por Slidev).
* **Sin numeración en nombres de archivos:** Está strictly prohibido anteponer números en los nombres de carpetas, presentaciones o páginas (ej. NO usar `01-intro.md` ni `1-portada.md`). Nombra los directorios, archivos y páginas en `pages/` de forma semántica en **kebab-case** (ej. `intro/intro.md`, `linux-fundamentos/linux-fundamentos.md`, `portada.md`, `contenido.md`). Esto permite reordenar e intercambiar clases y diapositivas libremente sin renombrar archivos.
* **Favicon Institucional:** Al crear o modificar una presentación, especifica siempre en el frontmatter principal el favicon de AHK (`favicon: /ahk-logo.svg`).
* La **Restricción de imágenes binarias:** Está estrictamente prohibido agregar archivos de imágenes binarias (`.png`, `.jpg`, `.odp`, etc.). Si necesitas diagramas o ilustraciones, diséñalos en código usando **Mermaid** o sube recursos vectoriales **SVG** en la carpeta `public/` global.
* Las **Reglas de Sintaxis Mermaid** detalladas en [TROUBLESHOOTING.md](./TROUBLESHOOTING.md#📊-3-reglas-críticas-para-diagramas-mermaid-en-slidev) (colores hexadecimales de 8 dígitos sin comas en CSS, uso de comillas dobles, evitar HTML anidado y enlaces invisibles de ordenamiento).

---

## 🏫 4. Contexto de la Materia
* **Materia:** Administración de Sistemas
* **Institución:** AHK - Cámara de Industria y Comercio Argentino-Alemana
* **Carreras:** Data Science y Sistemas IT
* **Idioma:** Todo el contenido de las presentaciones debe estar en **español**.
* **Temas típicos:** Linux/Unix, redes, scripting (Bash, Python), virtualización, contenedores (Docker), monitoreo, seguridad, servicios web, bases de datos administración, CI/CD y automatización.
