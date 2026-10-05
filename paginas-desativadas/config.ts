/**
 * Páginas de ESPECIALIDADES e EXAMES — DESATIVADAS.
 *
 * Com `false` (padrão): as rotas não existem, nenhum link aponta para elas e o
 * código nem entra no build publicado. Quem abrir /especialidades/... ou /exames/...
 * cai na home, como qualquer URL desconhecida do site.
 *
 * Para ativar: troque para `true`, rode `npm run build` e publique.
 * Rotas criadas: /especialidades, /especialidades/{slug}, /exames, /exames/{categoria-ou-exame}
 */
export const PAGINAS_ESPECIALIDADES_E_EXAMES_ATIVAS = false;
