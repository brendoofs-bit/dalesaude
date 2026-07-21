const fs = require('fs');

let html = fs.readFileSync('dist/index.html', 'utf-8');

// Extrair o conteúdo do <style> (se houver)
let styles = '';
const styleRegex = /<style[^>]*>([\s\S]*?)<\/style>/gi;
let match;
while ((match = styleRegex.exec(html)) !== null) {
  styles += match[1] + '\n';
}

// Extrair os scripts
let scripts = '';
const scriptRegex = /<script[^>]*>([\s\S]*?)<\/script>/gi;
while ((match = scriptRegex.exec(html)) !== null) {
  // Ignorar o script do tailwind config se for CDN, mas manter a lógica
  scripts += match[1] + '\n';
}

// Extrair o body
const bodyRegex = /<body[^>]*>([\s\S]*?)<\/body>/i;
const bodyMatch = bodyRegex.exec(html);
let bodyContent = bodyMatch ? bodyMatch[1] : '';

// Remover tags script do body
bodyContent = bodyContent.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');

// Processar CSS para adicionar o prefixo #site-dalesaude
// Isso é complexo com regex, mas faremos o básico
let prefixedStyles = styles.replace(/(^|\})([^{]+)\{/g, (m, p1, p2) => {
  if (p2.trim().startsWith('@') || p2.trim() === '') return m;
  const selectors = p2.split(',').map(s => {
    const trimmed = s.trim();
    if (trimmed === 'body' || trimmed === 'html') return `#site-dalesaude`;
    return `#site-dalesaude ${trimmed}`;
  }).join(', ');
  return `${p1}${selectors} {`;
});

const finalSnippet = `
<div id="site-dalesaude">
  <style>
    ${prefixedStyles}
  </style>
  ${bodyContent}
  <script>
    document.addEventListener("DOMContentLoaded", function() {
      ${scripts}
    });
  </script>
</div>
`;

fs.writeFileSync('elementor-snippet.html', finalSnippet.trim());
console.log('Snippet gerado com sucesso!');
