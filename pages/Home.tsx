import React from 'react';
import Hero from '@/components/Home/Hero';
import ImageMarquee from '@/components/Home/ImageMarquee';
import SpecialtiesSection from '@/components/Home/SpecialtiesSection';
import ExamsSection from '@/components/Home/ExamsSection';
import ValuesMarquee from '@/components/Home/ValuesMarquee';
import DalePlusTeaser from '@/components/Home/DalePlusTeaser';
import AboutSection from '@/components/Home/AboutSection';
import ReviewsSection from '@/components/Home/ReviewsSection';
import LocationSection from '@/components/Home/LocationSection';

const Home: React.FC = () => {
  return (
    <main>
      {/* 1. Impacto Inicial */}
      <Hero />

      {/* 2. Faixa de Fotos da Clínica */}
      <ImageMarquee />

      {/* 3. Especialidades Médicas */}
      <SpecialtiesSection />

      {/* 4. Exames & Ultrassonografias */}
      <ExamsSection />

      {/* 5. Faixa de Valores */}
      <ValuesMarquee />

      {/* 6. Chamada Dale+ */}
      <DalePlusTeaser />

      {/* 7. Seção Sobre (Institucional) */}
      <AboutSection />

      {/* 8. Depoimentos dos Clientes */}
      <ReviewsSection />

      {/* 9. Localização e Mapa */}
      <LocationSection />
    </main>
  );
};

export default Home;
