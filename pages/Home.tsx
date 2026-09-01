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

const Home: React.FC = () => {
  return (
    <main>
      {/* 1. Impacto Inicial (Banner principal) */}
      <Hero />

      {/* 2. Faixa de Fotos da Clínica */}
      <ImageMarquee />

      {/* 3. Abas de Especialidades e Exames */}
      <ServicesTabs />

      {/* 4. Faixa de Valores (Texto correndo) */}
      <ValuesMarquee />

      {/* 5. Chamada Dale+ */}
      <DalePlusTeaser />

      {/* 6. Seção Sobre (Institucional) */}
      <AboutSection />

      {/* 7. Depoimentos dos Clientes (Prova Social) */}
      <ReviewsSection />

      {/* 8. Localização e Mapa */}
      <LocationSection />
    </main>
  );
};

export default Home;
