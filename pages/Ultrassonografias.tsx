import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { WHATSAPP_NUMBER } from '../constants';
import GradientButton from '../components/UI/GradientButton';
import ValuesMarquee from '../components/Home/ValuesMarquee';

const ULTRASOUNDS_DATA = [
  { name: "USG pélvica", price: "R$149" },
  { name: "USG transvaginal", price: "R$149" },
  { name: "USG mamas", price: "R$149" },
  { name: "USG próstata via abdominal", price: "R$149" },
  { name: "USG aparelho urinário", price: "R$149" },
  { name: "USG partes moles", price: "R$149" },
  { name: "USG articulações", price: "R$149" },
  { name: "USG tórax", price: "R$149" },
  { name: "USG abdômen superior", price: "R$169" },
  { name: "USG abdômen total", price: "R$169" },
  { name: "USG parede abdominal", price: "R$169" },
  { name: "USG pélvica com doppler", price: "R$249" },
  { name: "USG transvaginal com doppler", price: "R$249" },
  { name: "USG mamas com doppler", price: "R$249" },
  { name: "USG próstata via abdominal com doppler", price: "R$249" },
  { name: "USG bolsa escrotal com Doppler", price: "R$249" },
  { name: "USG abdômen superior com doppler", price: "R$249" },
  { name: "USG próstata via trans retal", price: "R$249" },
  { name: "USG aparelho urinário com doppler", price: "R$149" },
  { name: "USG tireoide com doppler", price: "R$249" },
  { name: "USG abdômen total com doppler", price: "R$249" },
  { name: "USG parede abdominal com doppler", price: "R$249" },
  { name: "USG articulações com doppler", price: "R$249" },
  { name: "USG ecocardiograma com doppler", price: "R$249" },
  { name: "Ultrassonografia tórax com doppler", price: "R$249" },
  { name: "Ultrassonografia translucência nucal", price: "R$279" },
  { name: "Ultrassonografia carótidas e vertebrais", price: "R$279" },
  { name: "Ultrassonografia transfontanela", price: "R$299" },
  { name: "Ultrassonografia partes moles com doppler", price: "R$299" },
  { name: "Ultrassonografia morfológica", price: "R$329" },
  { name: "Ultrassonografia artérias renais", price: "R$329" },
  { name: "Ultrassonografia dermatológica com doppler", price: "R$329" },
  { name: "Ultrassonografia eco fetal", price: "R$350" },
];

const Ultrassonografias: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-[72px] bg-sand-50">
      {/* Hero Section */}
      <section className="bg-dale-blue text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center pb-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">Ultrassonografias</h1>
          <h2 className="text-xl md:text-2xl font-serif mb-6 text-white/90">
            Exames seguros para cuidar do que mais importa: sua saúde
          </h2>
          <p className="text-base md:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            Na DaleSaúde, você realiza exames de ultrassonografia com tecnologia moderna e atendimento humanizado, para diagnosticar, acompanhar e prevenir uma série de condições com tranquilidade e rapidez. Oferecemos um ambiente confortável, com profissionais experientes e foco total no seu bem-estar.
          </p>
        </div>
      </section>

      {/* Types of Ultrasound */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-dale-blue mb-4">Tipos de ultrassonografia</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Na DaleSaúde, você tem o que todo mundo procura e poucos entregam: atendimento de qualidade, com estrutura moderna e sem surpresas no valor.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {ULTRASOUNDS_DATA.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (index % 6) * 0.05 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-sand-200 hover:shadow-md transition-shadow flex flex-col items-center text-center h-full"
              >
                <h3 className="text-lg font-serif text-dale-blue mb-4 flex-1 flex items-center justify-center">{item.name}</h3>
                <div className="text-2xl font-bold text-dale-blue mb-6">{item.price}</div>
                <GradientButton 
                  variant="primary" 
                  className="w-full !py-2 !text-sm"
                  onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Gostaria%20de%20agendar%20uma%20${encodeURIComponent(item.name)}`, '_blank')}
                >
                  Agendar agora
                </GradientButton>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center flex flex-col items-center">
            <p className="text-gray-600 mb-6">Caso o tipo que você precise não esteja na lista, clique no botão abaixo</p>
            <GradientButton 
              variant="outline" 
              onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Gostaria%20de%20saber%20mais%20sobre%20ultrassonografias`, '_blank')}
            >
              Quero saber mais
            </GradientButton>
          </div>
        </div>
      </section>

      {/* Values Marquee */}
      <ValuesMarquee />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-sand-50">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-sand-200 flex flex-col md:flex-row items-center gap-8 overflow-hidden relative">
            <div className="flex-1 relative z-10">
              <h2 className="text-3xl md:text-4xl font-serif text-dale-blue mb-6">
                É hora de dar <span className="italic text-dale-green">atenção</span> à sua saúde com quem realmente se importa.
              </h2>
              <p className="text-gray-600 mb-8 max-w-lg leading-relaxed">
                Na DaleSaúde, você encontra o equilíbrio entre cuidado, agilidade e qualidade.
              </p>
              <GradientButton 
                variant="outline" 
                onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Gostaria%20de%20agendar%20uma%20consulta`, '_blank')}
                className="!border-dale-blue !text-dale-blue hover:!bg-dale-blue hover:!text-white"
              >
                Agendar uma consulta
              </GradientButton>
            </div>
            <div className="w-full md:w-1/2 h-64 md:h-auto absolute md:relative right-0 bottom-0 opacity-20 md:opacity-100">
              <img 
                src="https://res.cloudinary.com/doqw5aqcf/image/upload/v1773062746/consultora-atendendo-cliente-escritorio-jpg_hifl1y.webp" 
                alt="Médicos DaleSaúde" 
                className="w-full h-full object-cover rounded-2xl"
                style={{ maskImage: 'linear-gradient(to right, transparent, black 20%)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%)' }}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Ultrassonografias;
