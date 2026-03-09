import React from 'react';
import Hero from '../components/Home/Hero';
import ImageMarquee from '../components/Home/ImageMarquee';
import ServicesTabs from '../components/Home/ServicesTabs';
import DaleIndicaSection from '../components/Home/DaleIndicaSection';
import DalePlusTeaser from '../components/Home/DalePlusTeaser';
import AboutSection from '../components/Home/AboutSection';
import ReviewsSection from '../components/Home/ReviewsSection';
import LocationSection from '../components/Home/LocationSection';
import ValuesMarquee from '../components/Home/ValuesMarquee';

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <ImageMarquee />
      <ServicesTabs />
      <ValuesMarquee />
      <DaleIndicaSection />
      <DalePlusTeaser />
      <AboutSection />
      <ReviewsSection />
      <LocationSection />
    </main>
  );
};

export default Home;
