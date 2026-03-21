import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Phone } from 'lucide-react';
import GradientButton from '../UI/GradientButton';
import { IMAGES, PHONE_NUMBER, WHATSAPP_NUMBER } from '../../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[90vh] min-h-[750px] md:min-h-[600px] flex items-center justify-center overflow-hidden mt-[72px]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img 
            src={IMAGES.heroBg} 
            alt="Atendimento médico humanizado" 
            className="w-full h-full object-cover object-center"
          />
        </motion.div>
        {/* Blue overlay instead of dark green */}
        <div className="absolute inset-0 bg-gradient-to-r from-dale-blue/90 via-dale-blue/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-dale-blue/80 via-transparent to-dale-blue/40" />
        
        {/* Bottom Fade Gradient Removed as requested */}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10 pt-10 md:pt-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex flex-col items-start mb-6">
              <span className="inline-block py-1 px-3 rounded-full bg-dale-green/20 text-dale-green text-sm font-bold tracking-wider border border-dale-green/30 backdrop-blur-sm mb-2">
                Avaliação no Google
              </span>
              <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#4285F4]">
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
                </svg>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-[#F4B400]">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.1] mb-6">
              Elevando o seu <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-dale-green to-teal-200">
                bem-estar
              </span>
            </h1>
            <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
              Não espere semanas para cuidar da saúde. Tenha acesso à melhor estrutura e corpo clínico da Tijuca com um preço super justo. Agendamento rápido de consultas e exames até para o mesmo dia!
            </p>
            
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
                className="!text-white !border-white hover:!bg-white hover:!text-dale-blue"
                onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Gostaria%20de%20agendar%20uma%20consulta`, '_blank')}
                icon={<MessageCircle size={20} />}
              >
                Falar no WhatsApp
              </GradientButton>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;