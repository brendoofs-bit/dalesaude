import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { WHATSAPP_NUMBER } from '../constants';
import GradientButton from '../components/UI/GradientButton';
import ValuesMarquee from '../components/Home/ValuesMarquee';
import DalePlusTeaser from '../components/Home/DalePlusTeaser';
import LocationSection from '../components/Home/LocationSection';
import ReviewsSection from '../components/Home/ReviewsSection';
import WhyChooseUs from '../components/Shared/WhyChooseUs';

const SobreNos: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-[72px] bg-sand-50">
      {/* Hero Section */}
      <section className="bg-dale-blue text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center pb-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6">Somos a Dale</h1>
          <p className="text-base md:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            Somos um novo conceito de clínica médica na Tijuca, comprometidos em elevar seu bem-estar com alto padrão e valor justo. Nossa missão é oferecer soluções completas e personalizadas, focando na prevenção e tratamento contínuo, através de uma experiência integrada e acolhedora.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl space-y-24">
          
          {/* Mission */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 rounded-3xl overflow-hidden shadow-lg">
              <img src="https://res.cloudinary.com/doqw5aqcf/image/upload/v1773062927/medica-conversando-pacientes-consultorio-jpg_pplvsl.webp" alt="Nossa missão" className="w-full h-full object-cover aspect-[4/3]" />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-serif text-dale-blue mb-6">Nossa missão</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Promover o bem-estar de nossos clientes, entregando soluções completas e personalizadas para os moradores da região que buscam prevenção ou tratamento contínuo através de uma experiência de alto padrão e com custo-benefício inteligente.
              </p>
              <GradientButton 
                variant="outline" 
                onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Gostaria%20de%20saber%20mais%20sobre%20a%20DaleSaúde`, '_blank')}
              >
                Saber mais
              </GradientButton>
            </div>
          </div>

          {/* Vision */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="w-full md:w-1/2 rounded-3xl overflow-hidden shadow-lg">
              <img src="https://res.cloudinary.com/doqw5aqcf/image/upload/v1771425465/01_mxjnjj.webp" alt="Nossa visão" className="w-full h-full object-cover aspect-[4/3]" />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-serif text-dale-blue mb-6">Nossa visão</h2>
              <p className="text-gray-600 leading-relaxed">
                Sermos reconhecidos como a clínica médica que valoriza o tempo dos pacientes e oferece soluções integradas, ágeis e acolhedoras, com excelência técnica e humana.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 rounded-3xl overflow-hidden shadow-lg">
              <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop" alt="Nossos valores" className="w-full h-full object-cover aspect-[4/3]" />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-serif text-dale-blue mb-6">Nossos valores</h2>
              <ul className="space-y-4 text-gray-600 leading-relaxed mb-8">
                <li><strong className="text-dale-blue">Inteligência que resolve:</strong> Priorizamos soluções completas e eficientes, unindo serviços para melhorar a jornada de saúde do cliente e gerar o melhor resultado para eles.</li>
                <li><strong className="text-dale-blue">Excelência Humana:</strong> Valorizamos a competência técnica aliada ao atendimento que respeita o cliente. A tecnologia acelera processos, mas são os nossos clientes que fazem a diferença.</li>
                <li><strong className="text-dale-blue">Inovação que Simplifica:</strong> Utilizamos tecnologia para facilitar o cuidado ao cliente, tornando-o mais acessível e inteligente. Nosso objetivo é colocar o cliente em primeiro lugar e simplificar suas vidas.</li>
                <li><strong className="text-dale-blue">Compromisso com a Comunidade:</strong> Valorizamos nosso papel na região, entendendo e atendendo às necessidades locais. Nosso sucesso está vinculado ao bem-estar comunitário.</li>
                <li><strong className="text-dale-blue">Ética e Comprometimento:</strong> Agimos com integridade e responsabilidade, sempre comprometidos com nossos clientes e colaboradores.</li>
              </ul>
              <GradientButton 
                variant="outline" 
                onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Gostaria%20de%20saber%20mais%20sobre%20a%20DaleSaúde`, '_blank')}
              >
                Saber mais
              </GradientButton>
            </div>
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Values Marquee */}
      <ValuesMarquee />

      {/* Location Section */}
      <LocationSection />

      {/* Reviews Section */}
      <ReviewsSection />

      {/* Dale+ Teaser */}
      <DalePlusTeaser />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-sand-50">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-sand-200 flex flex-col md:flex-row items-center gap-8 overflow-hidden relative">
            <div className="flex-1 relative z-10">
              <h2 className="text-3xl md:text-4xl font-serif text-dale-blue mb-6">
                É hora de dar <span className="italic text-dale-green">atenção</span> à sua saúde com quem realmente se importa.
              </h2>
              <p className="text-gray-600 mb-8 max-w-lg leading-relaxed">
                Na DaleSaúde, você encontra o equilíbrio entre cuidado, agilidade e qualidade. Com uma equipe dedicada, estrutura moderna e mais de 1.000 avaliações positivas, oferecemos uma experiência acolhedora, resolutiva e acessível — para que cuidar da saúde seja fácil, seguro e sem complicações.
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
                src="https://res.cloudinary.com/doqw5aqcf/image/upload/v1773063469/medica-entregando-resultados-exames-paciente-consultorio-jpg_zdgren.webp" 
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

export default SobreNos;
