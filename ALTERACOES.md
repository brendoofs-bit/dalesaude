# Ajustes do site – Guia de 02/10/2026

Aplicados sobre o projeto original, sem mudar textos, seções ou cores do restante do site.

## 1. Topo e botões (`components/Layout/Header.tsx`)

Topo branco, conforme a referência aprovada: logo, **Agendamento online**, **Resultados de exames**, **DALE+ Benefícios**, **Ligar** e **WhatsApp**.

- Agendamento online → `https://agendamento.quarkclinic.com.br/index/477336661`
- Resultados de exames → **visível e sem ação**. Quando a DALE enviar o link do ERP, cole em `RESULTADOS_EXAMES_URL` (`constants.ts`). O botão vira link sozinho.
- DALE+ Benefícios → `https://dalemais.com.br`
- Ligar → `tel:+552135256618`
- WhatsApp → mesmo link e mensagem já usados no site
- No celular, os três botões ficam numa faixa logo abaixo do logo. O menu do celular (Início, Sobre Nós, Dale+) é o mesmo de antes.
- A faixa verde "O Dale+ Chegou!" saiu do topo, porque não está na referência aprovada.

## 2 e 3. Banner/hero aprovado (`components/Home/Hero.tsx`)

Montado conforme a referência: título, Agendar pelo WhatsApp, Ligar, 4,9 no Google, Rua Uruguai, 147 · Tijuca, "Atendimento pelo WhatsApp 24h, inclusive sábados, domingos e feriados." e o card "Valores acessíveis" (R$ 129 / R$ 8).
Foto nova (enviada em alta) servida pelo Cloudinary, em AVIF/WebP no tamanho certo de cada tela (`AJUSTES_IMAGES.hero` em `constants.ts`):
- **Celular:** recorte da médica à direita, atrás do título, como na referência; botões abaixo.
- **A partir de 640px:** foto inteira como fundo do hero, com a médica à direita do texto.

Os quadradinhos decorativos agora vêm na própria imagem.

## 4. Webchat com IA (`index.html`)

Script colado exatamente como no guia, antes do `</body>`, em todas as páginas.
O botão flutuante do WhatsApp, que já existia, subiu para ficar acima do balão do webchat. Os dois ocupavam o mesmo canto (`components/UI/FloatingWidget.tsx`).

## 5 e 6. Seção DALE+ (`components/Home/DalePlusTeaser.tsx`)

Seção refeita na linguagem do dalemais.com.br: foto familiar, fundo escuro, título forte, texto curto e botão "Conheça o DALE+" → `https://dalemais.com.br`.

- **Logo:** a oficial do clube, sem redesenho.
- **Foto:** vem do próprio site do DALE+.
- **Textos:** o título é o do site do DALE+; o texto curto e os 4 benefícios são os que já estavam na seção.

## Correção do 404 ao dar F5 (`wrangler.jsonc`)

`"not_found_handling": "single-page-application"`: qualquer página (ex.: `/sobre-nos`) abre normalmente ao recarregar ou ao abrir pelo link direto.

## Outros arquivos

- `constants.ts`: links e imagens dos ajustes (bloco no fim do arquivo).
- `index.html`: cores da referência na config do Tailwind, altura do topo e degradê da foto.
- `pages/SobreNos.tsx`: espaçamento do topo acompanhando a nova altura do cabeçalho.
- `package-lock.json`: dependências atualizadas com `npm audit fix`, sem mudar o `package.json` (0 vulnerabilidades no `npm audit`).
- `public/images/logo-dalesaude.svg`: logo na versão positiva (topo branco), vetorizada a partir da referência. **Trocar pelo arquivo oficial** quando a DALE enviar.

## Páginas de especialidades e exames

Estão no projeto, **desativadas**: veja `paginas-desativadas/README.md`.

## Pendente da DALE

- Link de "Resultados de exames" (ERP)
- Logo oficial em SVG (versão positiva)
- Testar no ar: o webchat abre, a conversa chega no Omnichannel e a IA responde
