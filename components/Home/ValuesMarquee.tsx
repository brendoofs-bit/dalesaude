import React from 'react';
import { VALUES } from '../../constants';

const ValuesMarquee: React.FC = () => {
  const weights = ["font-light", "font-normal", "font-medium", "font-bold", "font-extrabold"];
  
  return (
    <section className="py-8 bg-white overflow-hidden relative border-y border-gray-100">
       <div className="flex w-max animate-marquee-slow whitespace-nowrap items-center">
         {[...VALUES, ...VALUES, ...VALUES, ...VALUES].map((value, index) => {
           const weightClass = weights[index % weights.length];
           return (
             <div key={index} className="flex items-center mx-6">
               <span className="text-xl md:text-2xl font-serif text-gray-200 font-italic mx-4">•</span>
               <span className={`text-base md:text-lg uppercase tracking-widest text-gray-400 hover:text-dale-green transition-colors duration-300 font-sans ${weightClass}`}>
                 {value}
               </span>
             </div>
           );
         })}
       </div>
    </section>
  );
};

export default ValuesMarquee;