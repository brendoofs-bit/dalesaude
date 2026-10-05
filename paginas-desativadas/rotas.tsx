import React from 'react';
import { Route } from 'react-router-dom';
import Especialidades from './paginas/Especialidades';
import Especialidade from './paginas/Especialidade';
import Exames from './paginas/Exames';
import Exame from './paginas/Exame';

/** Rotas das páginas de especialidades e exames. Só entram no site se a chave em ./config.ts estiver true. */
export const rotasEspecialidadesExames = (
  <>
    <Route path="/especialidades" element={<Especialidades />} />
    <Route path="/especialidades/:slug" element={<Especialidade />} />
    <Route path="/exames" element={<Exames />} />
    <Route path="/exames/:slug" element={<Exame />} />
  </>
);
