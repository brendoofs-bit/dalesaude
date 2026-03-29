import React from 'react';

// Specific images requested
const MARQUEE_IMAGES = [
  "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771425465/01_mxjnjj.webp",
  "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771425446/04_onjtqu.webp",
  "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771425446/03_rrauti.webp",
  "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771425445/05_sq0a42.webp",
  "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771425445/02_etccpu.webp"
];

const ImageMarquee: React.FC = () => {
  return (
    <section className="w-full py-16 bg-sand-50 overflow-hidden relative">
      {/* Side gradients opacity reduced by ~20% (opacity-60 instead of fully opaque or default) */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-sand-50/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-sand-50/80 to-transparent z-10 pointer-events-none" />
      
      <div className="flex w-max animate-marquee space-x-8">
        {[...MARQUEE_IMAGES, ...MARQUEE_IMAGES, ...MARQUEE_IMAGES, ...MARQUEE_IMAGES].map((src, index) => (
          <div 
            key={index} 
            className="w-[300px] h-[200px] md:w-[400px] md:h-[250px] flex-shrink-0 rounded-2xl overflow-hidden shadow-lg transform transition-transform hover:scale-105 duration-500"
          >
            <img 
              src={src} 
              alt={`Galeria DaleSaúde ${index}`} 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageMarquee;
