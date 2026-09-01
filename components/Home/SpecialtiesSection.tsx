import React from 'react';
import { motion } from 'framer-motion';
import { SPECIALTIES, WHATSAPP_NUMBER } from '../../constants';
import GradientButton from '../UI/GradientButton';
import WhatsAppIcon from '../UI/WhatsAppIcon';
import { ArrowUpRight } from 'lucide-react';

const SpecialtiesSection: React.FC = () => {
  const handleSpecialtyClick = (specialty: string) => {
    const text = `Olá! Gostaria de agendar uma consulta de ${specialty} na DaleSaúde.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="especialidades" className="py-20 md:py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="mb-10">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 md:gap-4 mb-12">
          {SPECIALTIES.map((specialty, index) => (
            <motion.div
              key={specialty}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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

        <div className="flex justify-center">
          <GradientButton
            variant="primary"
            onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20DaleSa%C3%BAde`, '_blank')}
            icon={<WhatsAppIcon size={20} />}
            className="w-full sm:w-auto text-base md:text-lg !py-4 !px-10 shadow-xl"
          >
            Agende sua consulta pelo WhatsApp
          </GradientButton>
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
