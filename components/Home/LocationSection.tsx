import React from 'react';
import { MapPin, Clock, MessageCircle, Phone } from 'lucide-react';
import { ADDRESS, ADDRESS_LINK, PHONE_NUMBER, WHATSAPP_NUMBER } from '../../constants';
import GradientButton from '../UI/GradientButton';

const LocationSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="bg-sand-50 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row">
          {/* Info Side */}
          <div className="p-10 md:p-16 md:w-1/3 flex flex-col justify-center">
            <h2 className="text-3xl font-serif text-dale-blue mb-8">Nossa Unidade</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-dale-green/10 rounded-full flex items-center justify-center text-dale-green shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Tijuca</h3>
                  <p className="text-gray-600 leading-relaxed">{ADDRESS}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-dale-green/10 rounded-full flex items-center justify-center text-dale-green shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Horário de Funcionamento</h3>
                  <p className="text-gray-600">Seg - Sex: 07h às 18h</p>
                  <p className="text-gray-600">Sábado: 07h às 12h</p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-3">
               <GradientButton 
                 fullWidth 
                 onClick={() => window.open(ADDRESS_LINK, '_blank')}
               >
                 Como Chegar
               </GradientButton>
               <GradientButton 
                 variant="primary"
                 fullWidth 
                 onClick={() => window.location.href = `tel:${PHONE_NUMBER.replace(/\D/g,'')}`}
                 icon={<Phone size={20} />}
               >
                 Ligar Agora
               </GradientButton>
               <GradientButton 
                 variant="outline"
                 fullWidth 
                 onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Gostaria%20de%20agendar%20uma%20consulta`, '_blank')}
                 icon={<MessageCircle size={20} />}
               >
                 WhatsApp
               </GradientButton>
            </div>
          </div>

          {/* Map Side (Simulated with Image or Iframe placeholder) */}
          <div className="md:w-2/3 h-80 md:h-auto bg-gray-200 relative">
             <iframe 
               title="Mapa DaleSaúde"
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.375323424168!2d-43.23565092374668!3d-22.926442639019674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997e6859555555%3A0x123456789!2sR.%20Uruguai%2C%20147%20-%20Tijuca%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2020510-060!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
               width="100%" 
               height="100%" 
               style={{ border: 0, filter: 'grayscale(0.5)' }} 
               allowFullScreen 
               loading="lazy" 
               referrerPolicy="no-referrer-when-downgrade"
             ></iframe>
             {/* Gradient overlay on map edge for smooth transition */}
             <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-sand-50 to-transparent pointer-events-none hidden md:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;