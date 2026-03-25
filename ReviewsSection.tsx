import React, { useState, useEffect } from 'react';
import { Star, MessageCircle, Phone } from 'lucide-react';
import { REVIEWS, PHONE_NUMBER, WHATSAPP_NUMBER } from '../../constants';
import GradientButton from '../UI/GradientButton';

// Google icon placeholder
const GoogleIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
  </svg>
);

const ReviewsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Auto-play logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(REVIEWS.length / 2));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const totalPages = Math.ceil(REVIEWS.length / 2);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
           <div className="flex items-center justify-center gap-2 mb-2">
              <GoogleIcon size={28} className="text-[#4285F4]" />
              <div className="flex text-[#F4B400]">
                 {[1,2,3,4,5].map(i => <Star key={i} size={20} className="fill-current" />)}
              </div>
           </div>
           <h2 className="text-3xl font-serif text-dale-blue mb-2">Nossas Avaliações</h2>
           <p className="text-gray-500 text-sm">
             São mais de 1.000 avaliações com nota 4.9 de 5.0!
           </p>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden max-w-5xl mx-auto mb-12">
           <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
           >
              {/* Create pages of 2 items */}
              {Array.from({ length: totalPages }).map((_, pageIndex) => {
                 // Get items for this page
                 const item1 = REVIEWS[pageIndex * 2];
                 const item2 = REVIEWS[pageIndex * 2 + 1];
                 
                 return (
                   <div key={pageIndex} className="min-w-full flex flex-col md:flex-row gap-6 px-2">
                     {/* Item 1 */}
                     <div className="flex-1 bg-sand-50 p-6 rounded-xl border border-transparent hover:border-dale-green/20 transition-colors">
                        <div className="flex text-[#F4B400] mb-3">
                          {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-current" />)}
                        </div>
                        <p className="text-gray-600 italic text-sm mb-4 leading-relaxed line-clamp-4">"{item1.text}"</p>
                        <div className="flex items-center gap-2 mt-auto">
                          <div className="w-8 h-8 rounded-full bg-dale-blue text-white flex items-center justify-center font-bold text-xs">
                             {item1.name.charAt(0)}
                          </div>
                          <span className="font-bold text-dale-blue text-xs">{item1.name}</span>
                        </div>
                     </div>
                     
                     {/* Item 2 (if exists) */}
                     {item2 ? (
                       <div className="flex-1 bg-sand-50 p-6 rounded-xl border border-transparent hover:border-dale-green/20 transition-colors">
                          <div className="flex text-[#F4B400] mb-3">
                            {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-current" />)}
                          </div>
                          <p className="text-gray-600 italic text-sm mb-4 leading-relaxed line-clamp-4">"{item2.text}"</p>
                          <div className="flex items-center gap-2 mt-auto">
                            <div className="w-8 h-8 rounded-full bg-dale-blue text-white flex items-center justify-center font-bold text-xs">
                               {item2.name.charAt(0)}
                            </div>
                            <span className="font-bold text-dale-blue text-xs">{item2.name}</span>
                          </div>
                       </div>
                     ) : (
                       <div className="flex-1 hidden md:block"></div> // Spacer
                     )}
                   </div>
                 );
              })}
           </div>
        </div>
        
        {/* Dots Indicators */}
        <div className="flex justify-center gap-2 mb-12">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button 
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all ${currentIndex === idx ? 'bg-dale-green w-4' : 'bg-gray-300'}`}
            />
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <GradientButton 
            variant="primary" 
            onClick={() => window.location.href = `tel:${PHONE_NUMBER.replace(/\D/g,'')}`}
            icon={<Phone size={20} />}
          >
            Ligar Agora
          </GradientButton>
          <GradientButton 
            variant="outline" 
            onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Gostaria%20de%20agendar%20uma%20consulta`, '_blank')}
            icon={<MessageCircle size={20} />}
          >
            Falar no WhatsApp
          </GradientButton>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
