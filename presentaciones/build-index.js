import fs from 'fs';
import path from 'path';

const distDir = path.resolve(process.cwd(), 'dist');

if (!fs.existsSync(distDir)) {
  console.error("Error: dist folder does not exist");
  process.exit(1);
}

// 1. Escanear Presentaciones (subdirectorios en dist/ excepto practicas)
const items = fs.readdirSync(distDir);
const presentations = [];

for (const item of items) {
  const itemPath = path.join(distDir, item);
  if (fs.statSync(itemPath).isDirectory() && item !== 'practicas') {
    const indexPath = path.join(itemPath, 'index.html');
    if (fs.existsSync(indexPath)) {
      const htmlContent = fs.readFileSync(indexPath, 'utf-8');
      const titleMatch = htmlContent.match(/<title>(.*?)<\/title>/);
      const title = titleMatch ? titleMatch[1].replace(' - Slidev', '') : item;
      presentations.push({
        dir: item,
        title: title,
        url: `./${item}/`
      });
    }
  }
}

// 2. Escanear Prácticas (archivos .html dentro de dist/practicas)
const practicas = [];
const practicasDistDir = path.join(distDir, 'practicas');

if (fs.existsSync(practicasDistDir)) {
  const practicaFiles = fs.readdirSync(practicasDistDir).filter(f => f.endsWith('.html'));
  for (const file of practicaFiles) {
    const filePath = path.join(practicasDistDir, file);
    const htmlContent = fs.readFileSync(filePath, 'utf-8');
    const titleMatch = htmlContent.match(/<title>(.*?)<\/title>/);
    const rawTitle = titleMatch ? titleMatch[1].replace(' - AHK Prácticas', '') : file;
    practicas.push({
      file: file,
      title: rawTitle,
      url: `./practicas/${file}`
    });
  }
}

const html = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Administración de Sistemas - AHK</title>
  <meta name="description" content="Material de la materia Administración de Sistemas - Carreras Data Science y Sistemas IT - AHK Cámara Argentino-Alemana">
  <link rel="icon" type="image/svg+xml" href="./ahk-logo.svg">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&family=Inter:wght@300;400;500;600&display=swap">
  <style>
    :root {
      --bg: radial-gradient(circle at 10% 20%, #0f172a 0%, #05070f 100%);
      --text: #f8fafc;
      --card-bg: rgba(255, 255, 255, 0.03);
      --card-border: rgba(255, 255, 255, 0.08);
    }
    body {
      margin: 0;
      padding: 0;
      font-family: 'Inter', sans-serif;
      background: var(--bg);
      color: var(--text);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      box-sizing: border-box;
    }
    header {
      width: 100%;
      max-width: 860px;
      padding: 4rem 1.5rem 2rem 1.5rem;
      text-align: center;
    }
    .logo-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1.5rem;
    }
    .logo-wrapper img {
      width: 56px;
      height: 56px;
      border-radius: 12px;
      margin-right: 1rem;
    }
    header h1 {
      font-family: 'Outfit', sans-serif;
      font-size: 2.75rem;
      margin: 0 0 0.5rem 0;
      background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      letter-spacing: -0.02em;
    }
    header .subtitle {
      color: #94a3b8;
      font-size: 1.05rem;
      margin: 0 0 0.35rem 0;
    }
    header .institution {
      color: #64748b;
      font-size: 0.9rem;
      margin: 0;
    }
    main {
      width: 100%;
      max-width: 860px;
      padding: 1.5rem;
      box-sizing: border-box;
      flex-grow: 1;
    }
    .section-label {
      font-family: 'Outfit', sans-serif;
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #6366f1;
      margin-bottom: 1.25rem;
      margin-top: 2rem;
    }
    .grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.25rem;
    }
    @media (min-width: 600px) {
      .grid {
        grid-template-columns: 1fr 1fr;
      }
    }
    .card {
      background: var(--card-bg);
      border: 1px solid var(--card-border);
      border-radius: 1rem;
      padding: 1.75rem;
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      text-decoration: none;
      color: var(--text);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .card:hover {
      background: rgba(255, 255, 255, 0.06);
      border-color: rgba(255, 255, 255, 0.15);
      transform: translateY(-2px);
      box-shadow: 0 15px 35px -10px rgba(0, 0, 0, 0.6), 0 0 15px 0 rgba(99, 102, 241, 0.1);
    }
    .card h3 {
      font-family: 'Outfit', sans-serif;
      font-size: 1.25rem;
      margin: 0 0 0.75rem 0;
      color: #ffffff;
      line-height: 1.3;
    }
    .card .badge {
      align-self: flex-start;
      padding: 0.2rem 0.6rem;
      font-size: 0.7rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      border-radius: 9999px;
      border: 1px solid rgba(168, 85, 247, 0.3);
      background: rgba(168, 85, 247, 0.15);
      color: #c084fc;
    }
    .card .badge-practica {
      border: 1px solid rgba(56, 189, 248, 0.3);
      background: rgba(56, 189, 248, 0.15);
      color: #38bdf8;
    }
    .card .arrow {
      margin-top: 2rem;
      font-size: 0.9rem;
      font-weight: 600;
      color: #6366f1;
      display: flex;
      align-items: center;
      gap: 0.25rem;
    }
    .card:hover .arrow {
      color: #818cf8;
    }
    footer {
      padding: 3rem 1.5rem;
      color: #64748b;
      font-size: 0.85rem;
      text-align: center;
    }
  </style>
</head>
<body>
  <header>
    <div class="logo-wrapper">
      <img src="./ahk-logo.svg" alt="Logo AHK">
    </div>
    <h1>Administración de Sistemas</h1>
    <p class="subtitle">Diapositivas y material interactivo de la materia</p>
    <p class="institution">Carreras Data Science &amp; Sistemas IT &mdash; AHK Cámara Argentino-Alemana</p>
  </header>
  <main>
    <div class="section-label">📑 Presentaciones</div>
    <div class="grid">
      ${presentations.map(p => `
        <a href="${p.url}" class="card">
          <div>
            <h3>${p.title}</h3>
            <span class="badge">Diapositivas</span>
          </div>
          <div class="arrow">Ver filminas &rarr;</div>
        </a>
      `).join('')}
    </div>

    ${practicas.length > 0 ? `
      <div class="section-label">🛠️ Guías Prácticas</div>
      <div class="grid">
        ${practicas.map(pr => `
          <a href="${pr.url}" class="card">
            <div>
              <h3>${pr.title}</h3>
              <span class="badge badge-practica">Laboratorio</span>
            </div>
            <div class="arrow" style="color: #38bdf8;">Ver guía paso a paso &rarr;</div>
          </a>
        `).join('')}
      </div>
    ` : ''}
  </main>
  <footer>
    &copy; ${new Date().getFullYear()} Administración de Sistemas &mdash; AHK
  </footer>
</body>
</html>
`;

fs.writeFileSync(path.join(distDir, 'index.html'), html);
console.log("Index generated successfully with Presentations and Practicas");
