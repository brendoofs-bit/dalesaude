import React from 'react';
import { motion } from 'framer-motion';
import { DALE_PLUS_BENEFITS, WHATSAPP_NUMBER } from '../../constants';
import GradientButton from '../UI/GradientButton';
import { Stethoscope, Wallet, Clock, Users, ArrowRight } from 'lucide-react';

const iconMap: Record<string, any> = {
  Stethoscope, Wallet, Clock, Users
};

const DalePlusTeaser: React.FC = () => {
  return (
    <section id="daleplus" className="py-24 bg-dale-blue relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 opacity-10">
         <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
           <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
         </svg>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="lg:w-1/2 text-white">
            <span className="bg-dale-gold text-dale-dark px-3 py-1 rounded text-xs font-bold uppercase tracking-wider mb-4 inline-block">
              Em breve
            </span>
            <h2 className="text-4xl md:text-6xl font-serif mb-6">
              Dale<span className="text-dale-gold">+</span>
            </h2>
            <p className="text-xl font-light mb-8 opacity-90">
              A forma mais prática e acessível de cuidar da sua saúde com frequência.
            </p>
            <p className="text-gray-200 mb-8 leading-relaxed">
              Com uma assinatura simples, você garante consultas gratuitas, descontos exclusivos em exames, além de vantagens em farmácias e parceiros locais. Ideal para quem quer prevenir, economizar e cuidar da família com tranquilidade.
            </p>
            <GradientButton 
              variant="secondary"
              onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Gostaria%20de%20saber%20mais%20sobre%20o%20Dale+`, '_blank')}
            >
              Entrar na Lista de Espera
            </GradientButton>
          </div>

          {/* Interactive Cards Grid */}
          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {DALE_PLUS_BENEFITS.map((benefit, index) => {
              const Icon = iconMap[benefit.icon];
              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl hover:bg-white/20 transition-all duration-300 cursor-default"
                >
                  <div className="w-12 h-12 bg-dale-gold/20 rounded-full flex items-center justify-center mb-4 text-dale-gold">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DalePlusTeaser;
