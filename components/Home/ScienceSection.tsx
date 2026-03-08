import React from 'react';
import { Quote, MessageCircle, Phone } from 'lucide-react';
import { SCIENCE_ARTICLES, PHONE_NUMBER, WHATSAPP_NUMBER } from '../../constants';
import GradientButton from '../UI/GradientButton';

const ScienceSection: React.FC = () => {
  return (
    <section className="py-24 bg-dale-blue text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-dale-green rounded-full blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Ciência e Bem-estar</h2>
          <p className="text-gray-400 max-w-2xl">
            Acompanhamentos clínicos regulares não são apenas prevenção, são a chave comprovada cientificamente para uma vida longeva e plena.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {SCIENCE_ARTICLES.map((article, index) => (
            <div 
              key={index} 
              className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors duration-300 flex flex-col h-full justify-between"
            >
              <div>
                <Quote className="text-dale-green mb-6 opacity-50" size={32} />
                <h3 className="text-xl font-bold mb-4 leading-tight">
                  {article.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  "{article.summary}"
                </p>
              </div>
              <div className="flex justify-between items-center text-xs text-dale-green uppercase tracking-wider font-bold mt-auto">
                <span>{article.source}</span>
                <span>{article.year}</span>
              </div>
            </div>
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
            className="!text-white !border-white hover:!bg-white hover:!text-dale-blue"
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

export default ScienceSection;