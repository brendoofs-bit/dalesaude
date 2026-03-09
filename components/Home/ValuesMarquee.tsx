import React from 'react';

const WORDS = [
  "Cuidado", "Confiança", "Excelência", "Humanização", "Proximidade", 
  "Empatia", "Segurança", "Acolhimento", "Transparência", "Respeito", 
  "Compromisso", "Dedicação", "Organização", "Agilidade", "Vida com qualidade"
];

const ValuesMarquee: React.FC = () => {
  const weights = [
    "font-light", 
    "font-normal", 
    "font-semibold", 
    "font-bold"
  ];
  
  return (
    <section className="py-12 bg-white overflow-hidden relative">
       <div className="flex w-max animate-marquee-slow whitespace-nowrap items-center">
         {[...WORDS, ...WORDS, ...WORDS, ...WORDS].map((word, index) => {
           const weightClass = weights[index % weights.length];
           return (
             <div key={index} className="flex items-center mx-8 md:mx-12">
               <span className={`text-2xl md:text-4xl text-gray-400 font-serif ${weightClass}`}>
                 {word}
               </span>
             </div>
           );
         })}
       </div>
    </section>
  );
};

export default ValuesMarquee;