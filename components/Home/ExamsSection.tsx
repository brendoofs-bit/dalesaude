import React from 'react';
import { motion } from 'framer-motion';
import { ULTRASOUNDS, CARDIO_VASCULAR_EXAMS, WHATSAPP_NUMBER } from '../../constants';
import GradientButton from '../UI/GradientButton';
import WhatsAppIcon from '../UI/WhatsAppIcon';
import { ArrowUpRight } from 'lucide-react';

const ExamsSection: React.FC = () => {
  const handleUltrasoundClick = (exam: string) => {
    const text = `Olá! Gostaria de agendar um exame de Ultrassonografia ${exam} na DaleSaúde.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleCardioExamClick = (exam: string) => {
    const text = `Olá! Gostaria de agendar um exame de ${exam} na DaleSaúde.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="exames" className="py-20 md:py-24 bg-sand-50 relative">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="mb-10">
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

        {/* Ultrassonografias */}
        <div className="mb-10">
          <h3 className="text-xs md:text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">
            Ultrassonografias
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 md:gap-4">
            {ULTRASOUNDS.map((exam, index) => (
              <motion.div
                key={exam}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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

        {/* Exames Cardiológicos e Vasculares */}
        <div className="mb-12">
          <h3 className="text-xs md:text-sm font-bold text-gray-500 uppercase tracking-widest mb-4">
            Exames Cardiológicos e Vasculares
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 md:gap-4">
            {CARDIO_VASCULAR_EXAMS.map((exam, index) => (
              <motion.div
                key={exam}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
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

        <div className="flex justify-center">
          <GradientButton
            variant="primary"
            onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20exame%20na%20DaleSa%C3%BAde`, '_blank')}
            icon={<WhatsAppIcon size={20} />}
            className="w-full sm:w-auto text-base md:text-lg !py-4 !px-10 shadow-xl"
          >
            Agende seu exame pelo WhatsApp
          </GradientButton>
        </div>
      </div>
    </section>
  );
};

export default ExamsSection;
