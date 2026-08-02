# Guía de Resolución de Problemas (Troubleshooting) y Colaboración

Esta guía recopila los aprendizajes y las soluciones a problemas técnicos comunes encontrados al trabajar con **Slidev** y **Mermaid** en este repositorio. Consúltala antes de crear nuevas presentaciones o si experimentas errores de compilación.

---

## 🟢 1. Versión de Node.js
* **Problema:** El compilador de Slidev o los scripts de Vite fallan o se cuelgan al ejecutarse con versiones antiguas de Node.js (como v16).
* **Solución:** Asegúrate de ejecutar el proyecto con **Node.js v20 o superior** (v26 recomendado en este entorno).
* **Uso del CLI:**
  ```bash
  # Forzar el uso de la versión de Node correcta si tienes NVM instalado:
  PATH=$HOME/.nvm/versions/node/v26.5.0/bin:$PATH pnpm run dev
  ```

---

## 🖼️ 2. Rutas de Imágenes y Assets en Diapositivas Modularizadas
* **Problema:** Al separar las diapositivas en archivos individuales dentro de la carpeta `pages/` (ej. `pages/1-portada.md`), el uso de rutas como `./public/imagen.jpg` falla en compilación porque Vite busca el archivo relativo a la carpeta `pages/` (o sea, dentro de `pages/public/`).
* **Solución:** 
  1. Si usas rutas relativas desde archivos dentro de `pages/`, sube un nivel con `../public/imagen.jpg`.
  2. Dado que Vite expone la carpeta `public` directamente en la raíz del servidor, también puedes usar rutas absolutas directas al recurso, ej. `/imagen.jpg` (sin el prefijo `public`).

---

## 📊 3. Reglas Críticas para diagramas Mermaid en Slidev

### A. Conflicto de Comas en estilos (`classDef` o `style`)
* **Problema:** Si intentas dar color a un nodo usando `rgba(...)` (ej: `fill:rgba(255,255,255,0.03)`), el compilador de Mermaid arroja un error de sintaxis y la diapositiva queda en blanco. Esto ocurre porque Mermaid usa las comas para separar propiedades CSS internas.
* **Solución:** Utiliza **colores hexadecimales con canal Alfa** (8 dígitos) para definir opacidades sin usar comas:
  * ❌ `fill:rgba(255,255,255,0.08)`
  *  `fill:#ffffff14` (Los últimos dos dígitos `14` representan el 8% de opacidad).
  * ❌ `fill:rgba(16,185,129,0.15)`
  *  `fill:#10b98126` (Los últimos dos dígitos `26` representan el 15% de opacidad).

### B. Anidamiento de bloques de código en HTML
* **Problema:** Intentar meter un bloque ` ```mermaid ` adentro de contenedores HTML como `<div>...</div>` para aplicarles tarjetas de fondo rompe el parser de Markdown y hace que la diapositiva no se renderice.
* **Solución:** Deja siempre los bloques de código `mermaid` a nivel raíz del archivo Markdown (con saltos de línea arriba y abajo). No los envuelvas en etiquetas HTML.

### C. Textos con espacios o caracteres especiales en Nodos
* **Problema:** Escribir textos con espacios o caracteres especiales directamente en la definición del nodo, ej: `D(Diseño de Sistemas)` o `C[Código & Pruebas]`, causa errores de sintaxis y bloquea la presentación.
* **Solución:** Envuelve siempre los textos con comillas dobles:
  * `D("Diseño de Sistemas")`
  * `C["Código y Pruebas"]` (evitando el símbolo `&` libre, que puede romper el parseo XML).

### D. Orden jerárquico y subgráficos anidados
* **Problema:** Crear subgráficos anidados con direcciones opuestas (ej: un subgráfico con `direction BT` dentro de uno con `direction TB`) para forzar que un nodo quede arriba de otro suele provocar que las flechas desaparezcan o se crucen de forma caótica.
* **Solución:** Mantén un único flujo y utiliza **enlaces invisibles de ordenamiento** (`~~~`) para forzar la jerarquía de los nodos:
  * `B ~~~ C` (fuerza a que el nodo B se posicione arriba del nodo C).
  * `C --> B` (dibuja la flecha apuntando hacia arriba, de C a B).

---

## 📝 4. Formateo de Texto dentro de HTML

### A. Estructuras de texto enriquecido
* **Problema:** La sintaxis de Markdown como `**negrita**` o `*itálica*` no se renderiza si está escrita dentro de etiquetas HTML crudas (como `<p class="...">`). El navegador mostrará literalmente los asteriscos.
* **Solución:** Si escribes texto enriquecido dentro de bloques HTML en Slidev, utiliza etiquetas HTML puras:
  * Utiliza `<strong>texto</strong>` o `<b>texto</b>` para negritas.
  * Utiliza `<em>texto</em>` o `<i>texto</i>` para cursivas.

### B. Indentación de etiquetas HTML
* **Problema:** Indentar etiquetas HTML crudas (como `<div>`, `<h1>`, o `<svg>`) con 4 o más espacios o tabulaciones hace que el parser de Markdown las interprete como un bloque de código literal (`<pre><code>`), renderizando el HTML tal cual (con las etiquetas visibles en la pantalla) en lugar de interpretarlas como diseño.
* **Solución:** Escribe siempre las etiquetas HTML pegadas al borde izquierdo (0 espacios de indentación) o con un máximo de 2 espacios. Nunca uses 4 espacios o tabuladores para sangrar HTML dentro de tus archivos Markdown de Slidev.

---

## 🕳️ 5. Diapositivas en Blanco al Importar Portadas
* **Problema:** Si defines el primer bloque frontmatter en tu archivo raíz (ej. `01-intro.md`) y seguidamente agregas un separador `---` importando la portada con `src: ./pages/1-portada.md`, Slidev interpreta que tu primer slide está en blanco y la portada real aparece en el slide 2.
* **Solución:** Declara la propiedad `src` de la portada directamente en el primer bloque de configuración de tu archivo principal:
  ```yaml
  ---
  theme: default
  title: Título
  src: ./pages/1-portada.md
  ---
  ```

---

## ⚡ 6. Caché Persistente en el Servidor y Navegador
* **Problema:** Modificas el código de las diapositivas o arreglas errores de sintaxis, pero sigues viendo la versión rota en el navegador.
* **Solución:**
  1. **En la Consola (Vite Cache):** Detén el servidor de desarrollo y vuelve a ejecutar agregando la bandera `--force` para limpiar la caché de dependencias optimizadas de Vite:
     ```bash
     pnpm slidev --open <archivo>.md --force
     ```
  2. **En el Navegador (Hard Reload):** Slidev guarda caché de sesión agresiva en el cliente. Haz una recarga limpia usando **`Ctrl + F5`** (Windows/Linux) o **`Cmd + Shift + R`** (Mac).

---

## 🎨 7. Ubicación de style.css en Proyectos Modularizados
* **Problema:** La presentación se compila con fondo completamente blanco, tipografía estándar del navegador y sin los bordes glassmorphic del tema Gamma "Icebreaker", a pesar de tener un archivo `style.css` correcto en la raíz del proyecto.
* **Solución:** Slidev busca el archivo de estilos en la carpeta del archivo Markdown de entrada (principal). Si tu presentación está modularizada dentro de un subdirectorio (ej. `diagramas-secuencia/diagramas-secuencia.md`), debes copiar el archivo `style.css` de la raíz en esa misma carpeta (`diagramas-secuencia/style.css`), de lo contrario Vite ignorará el archivo global.

---

## 📊 8. Desbordes Verticales en Diagramas y Lógica Anidada
* **Problema:** En diagramas de secuencia largos con bloques `loop` o `alt`, o diagramas de arquitectura verticales (`graph TD`) con muchos componentes, el gráfico y el texto al pie desbordan hacia abajo, perdiéndose fuera de la pantalla.
* **Solución:**
  1. **Evitar diagramas verticales anchos:** En diagramas de arquitectura C4 extensos, prefiere una dirección horizontal (`graph LR`) utilizando subgrupos para balancear y acotar la altura del gráfico, aplicando luego una clase de escalado personalizada en `style.css` (ej. `zoom: 1.4 !important;`).
  2. **Usar diapositivas compactas:** Para slides que contengan lógica anidada y explicaciones de texto obligatorias, define la clase `compact-slide` en el frontmatter del slide:
     ```yaml
     ---
     class: compact-slide
     ---
     ```
     Y define en `style.css` las siguientes reducciones:
     ```css
     .compact-slide {
       padding-top: 1rem !important;
       padding-bottom: 1rem !important;
     }
     .compact-slide h2, .compact-slide p {
       margin-bottom: 0.5rem !important;
     }
     .compact-slide .mermaid {
       zoom: 0.65 !important; /* Achica el diagrama lo suficiente */
     }
     ```

---

## 🛠️ 9. Renderizado de Guías Prácticas (Markdown a HTML con Marked y Mermaid)
* **Problema:** Al procesar archivos Markdown en la carpeta `practicas/` para generar guías HTML estáticas (vía `build-all.js`), el parser predeterminado de `marked` puede envolver diagramas Mermaid (` ```mermaid `) en etiquetas `<pre><code>`, produciendo texto plano roto como `MERMAID_BLOCK_0` o exponiendo código sin renderizar.
* **Solución:** En `build-all.js`, se utiliza un **Renderer personalizado de `marked`** que intercepta el lenguaje `mermaid` e imprime directamente la estructura limpia `<div class="mermaid">\n...</div>\n`:
  ```javascript
  const renderer = new marked.Renderer();
  renderer.code = function({ text, lang }) {
    if (lang === 'mermaid') {
      return `<div class="mermaid">\n${text}\n</div>\n`;
    }
    return `<pre><code class="language-${lang}">${text}</code></pre>\n`;
  };
  marked.use({ renderer });
  ```
  Esto permite que la librería cliente de Mermaid (`mermaid.esm.min.mjs`) inicialice y dibuje correctamente todos los gráficos.

