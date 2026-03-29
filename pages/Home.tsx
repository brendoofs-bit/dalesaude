import React from 'react';
// Importação de todas as seções (restaurando o ImageMarquee)
import Hero from '@/components/Home/Hero';
import ImageMarquee from '@/components/Home/ImageMarquee';
import ServicesTabs from '@/components/Home/ServicesTabs';
import ValuesMarquee from '@/components/Home/ValuesMarquee';
import DalePlusTeaser from '@/components/Home/DalePlusTeaser';
import AboutSection from '@/components/Home/AboutSection';
import ReviewsSection from '@/components/Home/ReviewsSection';
import LocationSection from '@/components/Home/LocationSection';
import DaleIndicaSection from '@/components/Home/DaleIndicaSection';

const Home: React.FC = () => {
  return (
    <main>
      {/* 1. Impacto Inicial (Banner principal) */}
      <Hero />

      {/* 2. Faixa de Fotos da Clínica (O que você pensou em remover, mas agora voltou) */}
      <ImageMarquee />

      {/* 3. Abas de Especialidades e Exames (O coração do site) */}
      <ServicesTabs />

      {/* 4. Faixa de Valores (Texto correndo) */}
      <ValuesMarquee />

      {/* 5. Programa de Indicação */}
      <DaleIndicaSection />

      {/* 6. Chamada Dale+ */}
      <DalePlusTeaser />

      {/* 7. Seção Sobre (Institucional) */}
      <AboutSection />

      {/* 8. Depoimentos dos Clientes (Prova Social) */}
      <ReviewsSection />

      {/* 9. Localização e Mapa */}
      <LocationSection />
    </main>
  );
};

export default Home;
