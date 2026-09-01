import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SPECIALTIES, ULTRASOUNDS, CARDIO_VASCULAR_EXAMS, WHATSAPP_NUMBER, IMAGES, DALE_PLUS_BENEFITS } from '../../constants';
import GradientButton from '../UI/GradientButton';
import WhatsAppIcon from '../UI/WhatsAppIcon';
import { Activity, Scan, ClipboardCheck, ArrowUpRight, Stethoscope, Wallet, Clock, Users } from 'lucide-react';

const iconMap: Record<string, any> = {
  Stethoscope, Wallet, Clock, Users
};

const ServicesTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'specialties' | 'exams' | 'daleplus'>('specialties');

  const handleSpecialtyClick = (specialty: string) => {
    const text = `Olá! Gostaria de agendar uma consulta de ${specialty} na DaleSaúde.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleUltrasoundClick = (exam: string) => {
    const text = `Olá! Gostaria de agendar um exame de Ultrassonografia ${exam} na DaleSaúde.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleCardioExamClick = (exam: string) => {
    const text = `Olá! Gostaria de agendar um exame de ${exam} na DaleSaúde.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="especialidades" className="py-20 md:py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        
        {/* Tab Switcher */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-14">
          <button
            onClick={() => setActiveTab('specialties')}
            className={`px-6 py-3.5 rounded-full text-base md:text-lg font-semibold transition-all duration-300 flex items-center gap-2.5 ${
              activeTab === 'specialties'
                ? 'bg-dale-green text-white shadow-lg shadow-dale-green/20 scale-105'
                : 'bg-sand-100 text-gray-700 hover:bg-sand-200'
            }`}
          >
            <Activity size={20} />
            Especialidades Médicas ({SPECIALTIES.length})
          </button>

          <button
            onClick={() => setActiveTab('exams')}
            className={`px-6 py-3.5 rounded-full text-base md:text-lg font-semibold transition-all duration-300 flex items-center gap-2.5 ${
              activeTab === 'exams'
                ? 'bg-dale-green text-white shadow-lg shadow-dale-green/20 scale-105'
                : 'bg-sand-100 text-gray-700 hover:bg-sand-200'
            }`}
          >
            <Scan size={20} />
            Exames & Ultrassonografias
          </button>

          <button
            onClick={() => setActiveTab('daleplus')}
            className={`px-6 py-3.5 rounded-full text-base md:text-lg font-semibold transition-all duration-300 flex items-center gap-2.5 ${
              activeTab === 'daleplus'
                ? 'bg-dale-blue text-white shadow-lg shadow-dale-blue/20 scale-105'
                : 'bg-sand-100 text-gray-700 hover:bg-sand-200'
            }`}
          >
            <ClipboardCheck size={20} />
            Dale+
          </button>
        </div>

        {/* Tab 1: Especialidades Médicas */}
        {activeTab === 'specialties' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="mb-10 text-left md:text-left">
              <span className="text-dale-green font-semibold text-sm md:text-base tracking-wider uppercase block mb-2">
                Especialidades
              </span>
              <h2 className="text-3xl md:text-5xl font-serif text-dale-blue mb-3 leading-tight">
                Mais de 20 especialidades médicas em um só lugar
              </h2>
              <p className="text-gray-600 text-base md:text-lg max-w-3xl">
                Agende sua consulta com nossos especialistas — atendimento até para o mesmo dia.
              </p>
            </div>

            {/* Grid of Specialties */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 md:gap-4 mb-12">
              {SPECIALTIES.map((specialty, index) => (
                <motion.div
                  key={specialty}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: index * 0.02 }}
                  onClick={() => handleSpecialtyClick(specialty)}
                  className="group bg-[#eef5ee] hover:bg-dale-green text-dale-blue hover:text-white p-4 md:p-5 rounded-2xl transition-all duration-300 flex items-center justify-between cursor-pointer border border-transparent hover:border-dale-green hover:shadow-lg hover:-translate-y-0.5"
                >
                  <span className="font-semibold text-base md:text-lg transition-colors">
                    {specialty}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/60 group-hover:bg-white/20 flex items-center justify-center transition-colors shrink-0">
                    <ArrowUpRight size={18} className="text-dale-green group-hover:text-white transition-colors" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom Section CTA */}
            <div className="flex justify-center mt-6">
              <GradientButton
                variant="primary"
                onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20DaleSa%C3%BAde`, '_blank')}
                icon={<WhatsAppIcon size={20} />}
                className="w-full sm:w-auto text-base md:text-lg !py-4 !px-10 shadow-xl"
              >
                Agende sua consulta pelo WhatsApp
              </GradientButton>
            </div>
          </motion.div>
        )}

        {/* Tab 2: Exames & Ultrassonografias */}
        {activeTab === 'exams' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="mb-10 text-left">
              <span className="text-dale-green font-semibold text-sm md:text-base tracking-wider uppercase block mb-2">
                Exames
              </span>
              <h2 className="text-3xl md:text-5xl font-serif text-dale-blue mb-3 leading-tight">
                Exames com agendamento rápido e preço acessível
              </h2>
              <p className="text-gray-600 text-base md:text-lg max-w-3xl">
                Realizamos os principais exames de imagem e cardiológicos — tudo em um só lugar.
              </p>
            </div>

            {/* Subcategory 1: Ultrassonografias */}
            <div className="mb-10">
              <h3 className="text-xs md:text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">
                Ultrassonografias
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 md:gap-4">
                {ULTRASOUNDS.map((exam, index) => (
                  <motion.div
                    key={exam}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: index * 0.02 }}
                    onClick={() => handleUltrasoundClick(exam)}
                    className="group bg-[#f5eef1] hover:bg-dale-green text-dale-blue hover:text-white p-4 md:p-5 rounded-2xl transition-all duration-300 flex items-center justify-between cursor-pointer border border-transparent hover:border-dale-green hover:shadow-lg hover:-translate-y-0.5"
                  >
                    <span className="font-semibold text-base md:text-lg transition-colors">
                      {exam}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/60 group-hover:bg-white/20 flex items-center justify-center transition-colors shrink-0">
                      <ArrowUpRight size={18} className="text-dale-green group-hover:text-white transition-colors" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Subcategory 2: Exames Cardiológicos e Vasculares */}
            <div className="mb-12">
              <h3 className="text-xs md:text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">
                Exames Cardiológicos e Vasculares
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 md:gap-4">
                {CARDIO_VASCULAR_EXAMS.map((exam, index) => (
                  <motion.div
                    key={exam}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: index * 0.02 }}
                    onClick={() => handleCardioExamClick(exam)}
                    className="group bg-[#f5eef1] hover:bg-dale-green text-dale-blue hover:text-white p-4 md:p-5 rounded-2xl transition-all duration-300 flex items-center justify-between cursor-pointer border border-transparent hover:border-dale-green hover:shadow-lg hover:-translate-y-0.5"
                  >
                    <span className="font-semibold text-base md:text-lg transition-colors">
                      {exam}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/60 group-hover:bg-white/20 flex items-center justify-center transition-colors shrink-0">
                      <ArrowUpRight size={18} className="text-dale-green group-hover:text-white transition-colors" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom Section CTA */}
            <div className="flex justify-center mt-6">
              <GradientButton
                variant="primary"
                onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20exame%20na%20DaleSa%C3%BAde`, '_blank')}
                icon={<WhatsAppIcon size={20} />}
                className="w-full sm:w-auto text-base md:text-lg !py-4 !px-10 shadow-xl"
              >
                Agende seu exame pelo WhatsApp
              </GradientButton>
            </div>
          </motion.div>
        )}

        {/* Tab 3: Dale+ */}
        {activeTab === 'daleplus' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-dale-blue text-white rounded-3xl p-8 md:p-14 shadow-2xl relative overflow-hidden"
          >
            <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
              <div className="lg:w-1/2">
                <img 
                  src={IMAGES.dalePlusLogo} 
                  alt="Dale+ Logo Oficial" 
                  className="h-14 md:h-16 w-auto object-contain mb-6" 
                />
                <h3 className="text-2xl md:text-4xl font-serif mb-4 leading-tight">
                  A forma mais inteligente de cuidar da sua saúde
                </h3>
                <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed">
                  Com uma assinatura simples, você garante consultas incluídas, descontos exclusivos em exames e vantagens em farmácias parceiras.
                </p>
                <GradientButton
                  variant="secondary"
                  onClick={() => window.open('https://dalemais.com.br', '_blank')}
                >
                  Conheça o Dale+
                </GradientButton>
              </div>

              <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {DALE_PLUS_BENEFITS.map((benefit, index) => {
                  const Icon = iconMap[benefit.icon] || Activity;
                  return (
                    <div
                      key={index}
                      className="bg-white/10 backdrop-blur-md border border-white/15 p-5 rounded-2xl hover:bg-white/15 transition-all"
                    >
                      <div className="w-10 h-10 bg-dale-gold/20 rounded-full flex items-center justify-center mb-3 text-dale-gold">
                        <Icon size={20} />
                      </div>
                      <h4 className="text-white font-bold text-base mb-1">{benefit.title}</h4>
                      <p className="text-gray-300 text-xs leading-relaxed">{benefit.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
};

export default ServicesTabs;
