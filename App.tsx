import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// Usando o alias '@' para evitar erros de caminho
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import FloatingWidget from '@/components/UI/FloatingWidget';
import Home from '@/pages/Home';
import SobreNos from '@/pages/SobreNos';
// Páginas de especialidades e exames: existem no projeto, mas estão DESATIVADAS (veja paginas-desativadas/config.ts)
import { PAGINAS_ESPECIALIDADES_E_EXAMES_ATIVAS } from '@/paginas-desativadas/config';
import { rotasEspecialidadesExames } from '@/paginas-desativadas/rotas';

function App() {
  return (
    <Router>
      <div className="font-sans text-gray-800 bg-sand-50 selection:bg-dale-green selection:text-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-nos" element={<SobreNos />} />
          {PAGINAS_ESPECIALIDADES_E_EXAMES_ATIVAS ? rotasEspecialidadesExames : null}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
        <FloatingWidget />
      </div>
    </Router>
  );
}

export default App;
