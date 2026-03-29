import React from 'react';
// Importando todas as peças do quebra-cabeça usando o alias @
import Hero from '@/components/Home/Hero';
import ImageMarquee from '@/components/Home/ImageMarquee';
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
      <Hero />
      <ImageMarquee />
      <WhyChooseUs />
      <ServicesTabs />
      <ValuesMarquee />
      <DalePlusTeaser />
      <AboutSection />
      <ReviewsSection />
      <LocationSection />
    </main>
  );
};

export default Home;
