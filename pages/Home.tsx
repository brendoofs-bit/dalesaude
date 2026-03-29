import React from 'react';
// Importação das seções que compõem a Homepage
import Hero from '@/components/Home/Hero';
import ServicesTabs from '@/components/Home/ServicesTabs';
import ValuesMarquee from '@/components/Home/ValuesMarquee';
import DalePlusTeaser from '@/components/Home/DalePlusTeaser';
import AboutSection from '@/components/Home/AboutSection';
import ReviewsSection from '@/components/Home/ReviewsSection';
import LocationSection from '@/components/Home/LocationSection';
import WhyChooseUs from '@/components/Shared/WhyChooseUs';

const Home: React.FC = () => {
  return (
    <main>
      {/* 1. Seção de Impacto Inicial */}
      <Hero />

      {/* 2. Prova Social e Diferenciais */}
      <WhyChooseUs />

      {/* 3. Abas de Serviços e Especialidades */}
      <ServicesTabs />

      {/* 4. Faixa de Valores (Marquee de texto) */}
      <ValuesMarquee />

      {/* 5. Chamada para o plano Dale+ */}
      <DalePlusTeaser />

      {/* 6. Seção Institucional (Sobre) */}
      <AboutSection />

      {/* 7. Depoimentos de Clientes */}
      <ReviewsSection />

      {/* 8. Mapa e Localização */}
      <LocationSection />
    </main>
  );
};

export default Home;
