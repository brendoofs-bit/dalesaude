import React from 'react';
import { IMAGES, PHONE_NUMBER, WHATSAPP_NUMBER } from '../constants';
import { Heart, Star, CalendarCheck, Wallet, MessageCircle, Phone } from 'lucide-react';
import GradientButton from '../UI/GradientButton';

const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-sand-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Composition */}
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
              <img 
                src={IMAGES.clinicInterior} 
                alt="Recepção DaleSaúde" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dale-blue/60 to-transparent"></div>
              <div className="absolute bottom-6 left-4 md:left-6 text-white">
                <p className="font-serif italic text-lg">Ambiente acolhedor</p>
              </div>
            </div>
            {/* Floating Badge with Looping Border */}
            <div className="absolute bottom-6 right-2 md:right-6 bg-white rounded-2xl shadow-xl w-[140px] md:w-48 z-20 group">
              {/* Animated Border Container */}
              <div className="absolute -inset-[6px] bg-gradient-to-r from-dale-green via-teal-400 to-dale-green rounded-2xl bg-[length:200%_100%] animate-border-flow z-0 opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative bg-white p-3 md:p-4 rounded-2xl z-10 flex flex-col items-center justify-center text-center">
                <div className="flex items-center gap-1 md:gap-2 mb-1 md:mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#4285F4] md:w-6 md:h-6">
                    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
                  </svg>
                  <span className="font-bold text-lg md:text-xl text-gray-800 leading-none">4.9</span>
                </div>
                <div className="flex gap-0.5 mb-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="fill-[#F4B400] text-[#F4B400] md:w-[14px] md:h-[14px]" />
                  ))}
                </div>
                <span className="font-bold text-[10px] md:text-xs text-gray-500 text-center leading-tight uppercase tracking-wide">Mais de 1.000<br/>avaliações</span>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-serif text-dale-blue mb-8">
              DaleSaúde: saúde que cabe na sua rotina
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg mb-10">
              <p>
                Na Tijuca, a <strong>DaleSaúde</strong> foi criada para quem precisa de <strong>atendimento médico de qualidade</strong>, mas não pode perder tempo com filas e idas desnecessárias.
              </p>
              <p>
                Reunimos <strong>diversas especialidades médicas</strong> e exames no mesmo lugar e, em muitos casos, oferecemos laudo na hora, garantindo uma experiência acolhedora, organizada e com <strong>custo-benefício inteligente</strong> para você e sua família.
              </p>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
               {[
                 { icon: Heart, text: "Atendimento humanizado" },
                 { icon: Star, text: "Nota 4.9 no Google" },
                 { icon: CalendarCheck, text: "Agendamento até para o mesmo dia" },
                 { icon: Wallet, text: "Preço justo" },
               ].map((item, idx) => (
                 <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-sand-200 flex items-center gap-3 hover:shadow-md transition-shadow">
                   <div className="w-10 h-10 rounded-full bg-dale-light flex items-center justify-center text-dale-green">
                     <item.icon size={20} />
                   </div>
                   <span className="font-semibold text-dale-blue text-sm">{item.text}</span>
                 </div>
               ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
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
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
