import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

export const DEFAULT_SITE_URL = 'https://dalesaude.com.br';

/**
 * Converte PascalCase ou camelCase em kebab-case
 * Ex: 'SobreNos' -> 'sobre-nos', 'TermosDeUso' -> 'termos-de-uso'
 */
function toKebabCase(str) {
  return str
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
    .toLowerCase();
}

/**
 * Descobre dinamicamente todas as rotas ativas do site inspecionando:
 * 1. Diretório /pages
 * 2. Arquivo App.tsx (rotas declaradas no <Route path="..." />)
 * 3. Flag de páginas em paginas-desativadas/config.ts (especialidades e exames)
 */
export function getRoutes() {
  const routes = new Set();
  // Página inicial sempre presente
  routes.add('/');

  // 1. Escaneia a pasta pages/
  const pagesDir = path.join(ROOT_DIR, 'pages');
  if (fs.existsSync(pagesDir)) {
    const files = fs.readdirSync(pagesDir);
    for (const file of files) {
      if (file.endsWith('.tsx') || file.endsWith('.jsx') || file.endsWith('.ts') || file.endsWith('.js')) {
        const baseName = path.basename(file, path.extname(file));
        if (baseName.toLowerCase() === 'home' || baseName.toLowerCase() === 'index') {
          routes.add('/');
        } else {
          routes.add('/' + toKebabCase(baseName));
        }
      }
    }
  }

  // 2. Escaneia rotas adicionais configuradas em App.tsx
  const appPath = path.join(ROOT_DIR, 'App.tsx');
  if (fs.existsSync(appPath)) {
    const appContent = fs.readFileSync(appPath, 'utf-8');
    const routeRegex = /<Route\s+[^>]*path=["']([^"']+)["']/g;
    let match;
    while ((match = routeRegex.exec(appContent)) !== null) {
      const p = match[1];
      if (p && p !== '*' && !p.includes(':')) {
        routes.add(p.startsWith('/') ? p : '/' + p);
      }
    }
  }

  // 3. Se a flag de especialidades e exames for ativada (paginas-desativadas/config.ts):
  const configPath = path.join(ROOT_DIR, 'paginas-desativadas', 'config.ts');
  let isEspecialidadesAtivas = false;
  if (fs.existsSync(configPath)) {
    const configContent = fs.readFileSync(configPath, 'utf-8');
    if (/PAGINAS_ESPECIALIDADES_E_EXAMES_ATIVAS\s*=\s*true/.test(configContent)) {
      isEspecialidadesAtivas = true;
    }
  }

  if (isEspecialidadesAtivas) {
    routes.add('/especialidades');
    routes.add('/exames');

    // Lê slugs de especialidades
    const espPath = path.join(ROOT_DIR, 'paginas-desativadas', 'dados', 'especialidades.ts');
    if (fs.existsSync(espPath)) {
      const espContent = fs.readFileSync(espPath, 'utf-8');
      const slugRegex = /slug:\s*["']([^"']+)["']/g;
      let slugMatch;
      while ((slugMatch = slugRegex.exec(espContent)) !== null) {
        routes.add(`/especialidades/${slugMatch[1]}`);
      }
    }

    // Lê slugs de exames e categorias
    const examesPath = path.join(ROOT_DIR, 'paginas-desativadas', 'dados', 'exames.ts');
    if (fs.existsSync(examesPath)) {
      const examesContent = fs.readFileSync(examesPath, 'utf-8');
      const slugRegex = /slug:\s*["']([^"']+)["']/g;
      let slugMatch;
      while ((slugMatch = slugRegex.exec(examesContent)) !== null) {
        routes.add(`/exames/${slugMatch[1]}`);
      }
    }
  }

  // Retorna ordenado
  return Array.from(routes).sort((a, b) => {
    if (a === '/') return -1;
    if (b === '/') return 1;
    return a.localeCompare(b);
  });
}

/**
 * Determina a prioridade de SEO para o sitemap
 */
function getPriority(route) {
  if (route === '/') return '1.0';
  if (route === '/sobre-nos') return '0.8';
  if (route === '/especialidades' || route === '/exames') return '0.9';
  if (route.startsWith('/especialidades/') || route.startsWith('/exames/')) return '0.7';
  return '0.8';
}

/**
 * Determina a frequência de alteração
 */
function getChangeFreq(route) {
  if (route === '/') return 'weekly';
  if (route === '/especialidades' || route === '/exames') return 'weekly';
  return 'monthly';
}

/**
 * Gera a string XML válida do sitemap.xml
 */
export function generateSitemapXml(baseUrl = DEFAULT_SITE_URL) {
  const routes = getRoutes();
  const today = new Date().toISOString().split('T')[0];
  const cleanBase = baseUrl.replace(/\/+$/, '');

  const urlsXml = routes
    .map((route) => {
      const fullUrl = route === '/' ? `${cleanBase}/` : `${cleanBase}${route}`;
      const priority = getPriority(route);
      const changefreq = getChangeFreq(route);
      return `  <url>
    <loc>${fullUrl}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlsXml}
</urlset>
`;
}

/**
 * Gera o conteúdo do robots.txt apontando para o sitemap
 */
export function generateRobotsTxt(baseUrl = DEFAULT_SITE_URL) {
  const cleanBase = baseUrl.replace(/\/+$/, '');
  return `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /

Sitemap: ${cleanBase}/sitemap.xml
`;
}

/**
 * Escreve sitemap.xml e robots.txt nas pastas public/ e dist/ (se existir)
 */
export function writeSitemapFiles(baseUrl = DEFAULT_SITE_URL) {
  const xml = generateSitemapXml(baseUrl);
  const robots = generateRobotsTxt(baseUrl);

  // 1. Escreve em public/
  const publicDir = path.join(ROOT_DIR, 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xml, 'utf-8');
  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robots, 'utf-8');

  // 2. Se a pasta dist/ já existir, escreve também em dist/
  const distDir = path.join(ROOT_DIR, 'dist');
  if (fs.existsSync(distDir)) {
    fs.writeFileSync(path.join(distDir, 'sitemap.xml'), xml, 'utf-8');
    fs.writeFileSync(path.join(distDir, 'robots.txt'), robots, 'utf-8');
  }

  console.log(`[sitemap] sitemap.xml e robots.txt gerados com sucesso com ${getRoutes().length} rotas!`);
}

// Se executado diretamente via terminal (`node scripts/generate-sitemap.mjs`)
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  writeSitemapFiles();
}
