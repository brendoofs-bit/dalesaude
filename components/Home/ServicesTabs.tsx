import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICES, PHONE_NUMBER, WHATSAPP_NUMBER } from '../../constants';
import { ServiceItem } from '../../types';
import GradientButton from '../UI/GradientButton';
import { ArrowRight, Activity, Scan, ClipboardCheck, MessageCircle, Phone } from 'lucide-react';

const ServicesTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'specialty' | 'ultrasound' | 'checkup'>('specialty');

  const filteredServices = SERVICES.filter(s => s.category === activeTab).slice(0, 6);
  
  const getTabLabel = (type: string) => {
    switch(type) {
      case 'specialty': return 'Especialidades';
      case 'ultrasound': return 'Ultrassonografias';
      case 'checkup': return 'Dale +';
      default: return '';
    }
  };

  const getRedirectLink = () => {
    switch(activeTab) {
      case 'specialty': return 'https://dalesaude.com/consultas';
      case 'ultrasound': return 'https://dalesaude.com/ultrassonografias';
      case 'checkup': return 'https://dalesaude.com/checkups';
      default: return '#';
    }
  };

  return (
    <section id="especialidades" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-dale-blue mb-6">
            A clínica da Tijuca onde você é tratado com respeito e paga um <span className="italic text-dale-green">preço justo</span>
          </h2>
          <div className="w-24 h-1 bg-dale-gold mx-auto rounded-full"></div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['specialty', 'ultrasound', 'checkup'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                activeTab === tab 
                  ? 'bg-dale-green text-white shadow-lg scale-105' 
                  : 'bg-sand-100 text-gray-600 hover:bg-sand-200'
              }`}
            >
              {tab === 'specialty' && <Activity size={18} />}
              {tab === 'ultrasound' && <Scan size={18} />}
              {tab === 'checkup' && <ClipboardCheck size={18} />}
              {getTabLabel(tab)}
            </button>
          ))}
        </div>

        {/* Grid Content */}
        {activeTab === 'checkup' ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-16 bg-sand-50 rounded-3xl border border-dashed border-dale-green/30 mb-12"
          >
            <ClipboardCheck size={64} className="text-dale-green/50 mb-4" />
            <h3 className="text-2xl font-bold text-dale-blue mb-2">Em breve!</h3>
            <p className="text-gray-500 text-center max-w-md">
              Estamos preparando uma novidade incrível para você cuidar da sua saúde de forma completa e acessível. Aguarde!
            </p>
          </motion.div>
        ) : (
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          >
            <AnimatePresence mode='popLayout'>
              {filteredServices.map((service) => (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative p-8 bg-sand-50 rounded-3xl border border-transparent hover:border-dale-green/20 hover:shadow-xl transition-all duration-300"
                >
                  <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                     {/* Decorative icon based on tab */}
                     {activeTab === 'specialty' ? <Activity size={48} className="text-dale-green" /> : 
                      activeTab === 'ultrasound' ? <Scan size={48} className="text-dale-green" /> :
                      <ClipboardCheck size={48} className="text-dale-green" />}
                  </div>
                  <h3 className="text-xl font-bold text-dale-blue mb-2 group-hover:text-dale-green transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Agende sua consulta ou exame com especialistas qualificados.
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {activeTab !== 'checkup' && (
          <div className="flex justify-center mb-12">
            <a 
              href={activeTab === 'specialty' ? '/consultas' : '/ultrassonografias'}
              className="text-dale-blue hover:text-dale-green font-bold flex items-center gap-2 transition-colors text-lg"
            >
              Ver todos os serviços <ArrowRight size={20} />
            </a>
          </div>
        )}

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <GradientButton 
            variant="primary" 
            href={`tel:${PHONE_NUMBER.replace(/\D/g,'')}`}
            icon={<Phone size={20} />}
          >
            Ligar Agora
          </GradientButton>
          <GradientButton 
            variant="outline" 
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Gostaria%20de%20agendar%20uma%20consulta`}
            target="_blank"
            icon={<MessageCircle size={20} />}
          >
            Falar no WhatsApp
          </GradientButton>
        </div>
      </div>
    </section>
  );
};

export default ServicesTabs;