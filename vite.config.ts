import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import path from 'path';
import { generateSitemapXml, generateRobotsTxt, writeSitemapFiles } from './scripts/generate-sitemap.mjs';

// Isso substitui o __dirname que o Cloudflare às vezes rejeita
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Plugin do Vite para servir o sitemap.xml e robots.txt de forma 100% dinâmica no servidor
 * local e gerá-los automaticamente a cada build para produção.
 */
function dynamicSitemapPlugin() {
  return {
    name: 'dynamic-sitemap',
    configureServer(server: any) {
      server.middlewares.use((req: any, res: any, next: any) => {
        const url = req.url?.split('?')[0];
        if (url === '/sitemap.xml') {
          const xml = generateSitemapXml();
          res.setHeader('Content-Type', 'application/xml; charset=utf-8');
          res.end(xml);
          return;
        }
        if (url === '/robots.txt') {
          const robots = generateRobotsTxt();
          res.setHeader('Content-Type', 'text/plain; charset=utf-8');
          res.end(robots);
          return;
        }
        next();
      });
    },
    buildStart() {
      writeSitemapFiles();
    },
    closeBundle() {
      writeSitemapFiles();
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
      allowedHosts: true,
    },
    plugins: [react(), dynamicSitemapPlugin()],
    define: {
      // Shims para compatibilidade com códigos que buscam process.env
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        // Define que '@' aponta para a raiz do projeto
        '@': path.resolve(__dirname, './'),
      },
    },
    // Garante que o build não trave por avisos menores no Cloudflare
    build: {
      chunkSizeWarningLimit: 1600,
    }
  };
});
