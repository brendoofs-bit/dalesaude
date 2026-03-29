import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import path from 'path';

// Isso substitui o __dirname que o Cloudflare às vezes rejeita
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react()],
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
