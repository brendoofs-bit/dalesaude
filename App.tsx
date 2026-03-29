import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Usando o alias '@' para evitar erros de caminho
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import FloatingWidget from '@/components/UI/FloatingWidget';
import Home from '@/pages/Home';
import Consultas from '@/pages/Consultas';
import Ultrassonografias from '@/pages/Ultrassonografias';
import SobreNos from '@/pages/SobreNos';

function App() {
  return (
    <Router>
      <div className="font-sans text-gray-800 bg-sand-50 selection:bg-dale-green selection:text-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/consultas" element={<Consultas />} />
          <Route path="/ultrassonografias" element={<Ultrassonografias />} />
          <Route path="/sobre-nos" element={<SobreNos />} />
        </Routes>
        <Footer />
        <FloatingWidget />
      </div>
    </Router>
  );
}

export default App;
