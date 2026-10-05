# DaleSaúde – guia para agentes de IA (Antigravity / AI Studio)

Site da clínica DaleSaúde (Rua Uruguai, 147 – Tijuca, RJ). React 19 + Vite + React Router (SPA), Tailwind via CDN (config no `index.html`), publicado como Cloudflare Worker com arquivos estáticos (`wrangler.jsonc`, pasta `dist`).

## Comandos

- `npm install` e depois `npm run dev`: servidor local em http://localhost:3000
- `npm run build`: gera `dist/`

## Regras

1. **Escopo:** só mude o que foi pedido. Não crie textos, seções ou páginas novas sem pedido explícito.
2. **Topo e hero seguem a referência visual aprovada pelo cliente** (`components/Layout/Header.tsx`, `components/Home/Hero.tsx`). Não alterar textos, cores, logo ou composição sem nova validação.
3. **"WhatsApp 24h"** é atendimento para informações e agendamentos. Nunca apresentar como pronto atendimento.
4. **Links e contatos ficam em `constants.ts`:** telefone, WhatsApp, Quark Clinic, Resultados de exames, DALE+ e imagens.
5. **"Resultados de exames":** fica sem ação até `RESULTADOS_EXAMES_URL` ser preenchido com o link do ERP.
6. **Webchat:** o script do Omnichannel fica no fim do `index.html`, exatamente como enviado pelo cliente.
7. **Botão flutuante do WhatsApp:** fica acima do balão do webchat (canto inferior direito). Não colocar os dois no mesmo lugar.
8. **F5 / link direto:** `wrangler.jsonc` usa `"not_found_handling": "single-page-application"`. Não remover.
9. **Páginas de especialidades e exames:** existem em `paginas-desativadas/` e ficam **desligadas** (`paginas-desativadas/config.ts`). Só ativar quando o usuário pedir.
10. Antes de entregar, teste no celular (390px), tablet (768px) e desktop (1280px+): nada sobreposto e nenhuma rolagem lateral.

O histórico dos ajustes do guia de 02/10/2026 está em `ALTERACOES.md`.
