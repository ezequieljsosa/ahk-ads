import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { marked } from 'marked';

const presentacionesDir = process.cwd();
const rootRepoDir = path.resolve(presentacionesDir, '..');
const distDir = path.resolve(presentacionesDir, 'dist');
const publicDir = path.resolve(presentacionesDir, 'public');
const practicasDir = path.resolve(rootRepoDir, 'practicas');

// Configure custom renderer for marked to process mermaid blocks
const renderer = new marked.Renderer();
renderer.code = function({ text, lang }) {
  if (lang === 'mermaid') {
    return `<div class="mermaid">\n${text}\n</div>\n`;
  }
  return `<pre><code class="language-${lang}">${text}</code></pre>\n`;
};

marked.use({ renderer });

// 1. Wipe dist directory before building to eliminate any stale/duplicate builds
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir, { recursive: true });

// 2. Find all presentation directories (subdirectories containing <dirname>.md)
const items = fs.readdirSync(presentacionesDir);
const presentations = [];

for (const item of items) {
  const itemPath = path.join(presentacionesDir, item);
  if (fs.statSync(itemPath).isDirectory() && item !== 'dist' && item !== 'public' && item !== 'node_modules') {
    const mdPath = path.join(itemPath, `${item}.md`);
    if (fs.existsSync(mdPath)) {
      presentations.push({ dir: item, md: `${item}/${item}.md` });
    }
  }
}

console.log(`Found ${presentations.length} presentation(s) to build:`, presentations.map(p => p.dir));

// 3. Build each presentation to dist/<dirname> with relative base
for (const p of presentations) {
  console.log(`\n📦 Building presentation: ${p.dir}...`);
  const outPath = path.join(distDir, p.dir);
  execSync(`npx slidev build ${p.md} --out "${outPath}" --base ./`, { stdio: 'inherit', cwd: presentacionesDir });
  
  // Ensure 404.html fallback exists in each presentation folder
  const indexPath = path.join(outPath, 'index.html');
  const presentation404Path = path.join(outPath, '404.html');
  if (fs.existsSync(indexPath)) {
    fs.copyFileSync(indexPath, presentation404Path);
  }

  // Copy public assets into subfolder dist to guarantee favicon resolution
  if (fs.existsSync(publicDir)) {
    for (const file of fs.readdirSync(publicDir)) {
      fs.copyFileSync(path.join(publicDir, file), path.join(outPath, file));
    }
  }
}

// 4. Build practicas (Convert Markdown files in practicas/ to HTML)
const distPracticasDir = path.join(distDir, 'practicas');
fs.mkdirSync(distPracticasDir, { recursive: true });

const practicaFiles = fs.existsSync(practicasDir) ? fs.readdirSync(practicasDir).filter(f => f.endsWith('.md')) : [];
console.log(`\n🛠️ Processing ${practicaFiles.length} practica(s)...`);

function renderPracticaHTML(title, contentMarkdown) {
  // Pre-process GitHub Alerts (> [!NOTE], > [!TIP], > [!IMPORTANT])
  let processedMarkdown = contentMarkdown
    .replace(/^>\s*\[!NOTE\]\s*\n/gm, '> **📌 Nota:** ')
    .replace(/^>\s*\[!TIP\]\s*\n/gm, '> **💡 Tip:** ')
    .replace(/^>\s*\[!IMPORTANT\]\s*\n/gm, '> **⚠️ Importante:** ')
    .replace(/^>\s*\[!WARNING\]\s*\n/gm, '> **🚨 Advertencia:** ');

  // Render markdown with custom marked renderer
  const parsedHTML = marked.parse(processedMarkdown);

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title} - AHK Prácticas</title>
  <link rel="icon" type="image/svg+xml" href="../ahk-logo.svg">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&family=Inter:wght@300;400;500;600&family=Fira+Code&display=swap">
  <script type="module">
    import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';
    mermaid.initialize({ startOnLoad: true, theme: 'dark' });
  </script>
  <style>
    :root {
      --bg: #0b0f19;
      --card-bg: rgba(255, 255, 255, 0.03);
      --card-border: rgba(255, 255, 255, 0.08);
      --text: #f8fafc;
      --text-muted: #94a3b8;
      --accent: #38bdf8;
    }
    body {
      font-family: 'Inter', sans-serif;
      background-color: var(--bg);
      color: var(--text);
      line-height: 1.7;
      margin: 0;
      padding: 0;
    }
    header {
      background: rgba(15, 23, 42, 0.8);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid var(--card-border);
      position: sticky;
      top: 0;
      z-index: 50;
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    header a {
      color: var(--accent);
      text-decoration: none;
      font-weight: 600;
      font-size: 0.95rem;
      transition: opacity 0.2s;
    }
    header a:hover { opacity: 0.8; }
    .container {
      max-width: 900px;
      margin: 2.5rem auto;
      padding: 2.5rem;
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      border-radius: 16px;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    }
    h1 {
      font-family: 'Outfit', sans-serif;
      font-size: 2.2rem;
      background: linear-gradient(135deg, #38bdf8 0%, #818cf8 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-top: 0;
      border-bottom: 1px solid var(--card-border);
      padding-bottom: 0.75rem;
    }
    h2 { font-size: 1.5rem; margin-top: 2rem; border-bottom: 1px solid var(--card-border); padding-bottom: 0.4rem; color: #38bdf8; }
    h3 { font-size: 1.2rem; margin-top: 1.5rem; color: #a855f7; }
    code {
      font-family: 'Fira Code', monospace;
      background: rgba(255, 255, 255, 0.08);
      padding: 0.2rem 0.4rem;
      border-radius: 4px;
      font-size: 0.88em;
      color: #38bdf8;
    }
    pre {
      background: #0f172a !important;
      padding: 1.25rem;
      border-radius: 8px;
      border: 1px solid var(--card-border);
      overflow-x: auto;
    }
    pre code {
      background: transparent;
      padding: 0;
      color: #e2e8f0;
    }
    blockquote {
      border-left: 4px solid #38bdf8;
      background: rgba(56, 189, 248, 0.05);
      margin: 1.5rem 0;
      padding: 0.75rem 1.25rem;
      border-radius: 0 8px 8px 0;
    }
    .mermaid {
      background: rgba(15, 23, 42, 0.6);
      padding: 1.5rem;
      border-radius: 8px;
      border: 1px solid var(--card-border);
      margin: 1.5rem 0;
      display: flex;
      justify-content: center;
    }
    a { color: var(--accent); }
  </style>
</head>
<body>
  <header>
    <a href="../index.html">&larr; Volver al Hub de Administración de Sistemas</a>
    <div style="display:flex; align-items:center; gap:0.5rem; color:#64748b; font-size:0.85rem;">
      <img src="../ahk-logo.svg" style="height:20px;"> AHK Prácticas
    </div>
  </header>
  <div class="container">
    ${parsedHTML}
  </div>
</body>
</html>`;
}

for (const file of practicaFiles) {
  const filePath = path.join(practicasDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');
  const slug = file.replace('.md', '');
  const firstLine = content.split('\n')[0].replace('#', '').trim();
  const title = firstLine || slug;
  
  const outHtmlPath = path.join(distPracticasDir, `${slug}.html`);
  fs.writeFileSync(outHtmlPath, renderPracticaHTML(title, content));
  console.log(`  ✓ Generated HTML for practica: ${slug}`);
}

// 5. Copy public assets to dist root
if (fs.existsSync(publicDir)) {
  for (const file of fs.readdirSync(publicDir)) {
    fs.copyFileSync(path.join(publicDir, file), path.join(distDir, file));
  }
}

// 6. Generate index landing page
console.log('\n🌐 Generating index landing page...');
execSync(`node build-index.js`, { stdio: 'inherit', cwd: presentacionesDir });

// 7. Create root 404.html fallback
const rootIndexPath = path.join(distDir, 'index.html');
const root404Path = path.join(distDir, '404.html');
if (fs.existsSync(rootIndexPath)) {
  fs.copyFileSync(rootIndexPath, root404Path);
}

console.log('\n✨ Build complete! Open dist/index.html in your browser or run pnpm run preview.');
