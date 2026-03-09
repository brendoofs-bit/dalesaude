import React from 'react';
import Header from './components/Layout/Header';
import Hero from './components/Home/Hero';
import ImageMarquee from './components/Home/ImageMarquee';
import ServicesTabs from './components/Home/ServicesTabs';
import ValuesMarquee from './components/Home/ValuesMarquee';
import DaleIndicaSection from './components/Home/DaleIndicaSection';
import DalePlusTeaser from './components/Home/DalePlusTeaser';
import AboutSection from './components/Home/AboutSection';
import ReviewsSection from './components/Home/ReviewsSection';
import LocationSection from './components/Home/LocationSection';
import Footer from './components/Layout/Footer';
import FloatingWidget from './components/UI/FloatingWidget';

function App() {
  return (
    <div className="font-sans text-gray-800 bg-sand-50 selection:bg-dale-green selection:text-white">
      <Header />
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
      <Footer />
      <FloatingWidget />
    </div>
  );
}

export default App;