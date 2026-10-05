# Páginas de especialidades e exames (desativadas)

Esta pasta guarda as páginas de **especialidades** (20) e **exames** (2 categorias e 13 exames).
Elas **não estão no ar**: com a chave desligada, não existe rota, nenhum link aponta para elas
e o código nem entra no build publicado.

## Ativar

1. Em `paginas-desativadas/config.ts`, troque `PAGINAS_ESPECIALIDADES_E_EXAMES_ATIVAS` para `true`.
2. `npm run build` e publique.

Rotas criadas: `/especialidades`, `/especialidades/{slug}`, `/exames`, `/exames/{categoria-ou-exame}`.

## Antes de ativar

- Revisão dos textos pelo responsável técnico da clínica (`dados/especialidades.ts` e `dados/exames.ts`).
- Ligar os cards de especialidades e exames da home a estas páginas (hoje eles abrem o WhatsApp).
- O site é renderizado no navegador: para essas páginas renderem bem no Google, vale pré-renderizar o HTML.

## Arquivos

| Arquivo | O que é |
| --- | --- |
| `config.ts` | Chave liga/desliga |
| `rotas.tsx` | Rotas usadas pelo `App.tsx` quando a chave está ligada |
| `dados/` | Textos das especialidades, exames e categorias |
| `paginas/` | Modelos das páginas (lista e detalhe), no visual do site |
