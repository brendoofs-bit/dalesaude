import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Heart, Baby, Eye, Bone, Brain, Activity, Apple, User, Scan, ShieldCheck, Pill, Clock, Wallet, Users, Phone, MessageCircle } from 'lucide-react';
import GradientButton from '../components/UI/GradientButton';
import { PHONE_NUMBER, WHATSAPP_NUMBER, VALUES } from '../constants';
import DalePlusTeaser from '../components/Home/DalePlusTeaser';
import WhyChooseUs from '../components/Shared/WhyChooseUs';

const CONSULTAS_DATA = [
  {
    title: "Clínico Geral",
    subtitle: "Medicina Geral",
    description: "Atendimento médico geral, diagnósticos iniciais, orientações preventivas e encaminhamentos especializados.",
    tags: ["Check-up completo", "Urgências", "Prevenção", "Popular"],
    price: "R$139",
    icon: Stethoscope
  },
  {
    title: "Cardiologia",
    subtitle: "Coração",
    description: "Cuidados completos para o coração, prevenção de doenças cardiovasculares e check-ups cardiológicos.",
    tags: ["ECG", "Ecocardiograma", "Prevenção", "Popular"],
    price: "R$179",
    icon: Heart
  },
  {
    title: "Ginecologia",
    subtitle: "Saúde da mulher",
    description: "Cuidados com a saúde íntima feminina, prevenção, pré-natal e planejamento familiar.",
    tags: ["Papanicolau", "Pré-natal", "Ultrassom", "Popular"],
    price: "R$169",
    icon: User
  },
  {
    title: "Pediatria",
    subtitle: "Saúde infantil",
    description: "Cuidados completos com a saúde das crianças, puericultura e vacinação.",
    tags: ["Puericultura", "Desenvolvimento", "Popular"],
    price: "R$159",
    icon: Baby
  },
  {
    title: "Dermatologia",
    subtitle: "Pele e anexos",
    description: "Cuidados com a pele, tratamento de acne, melasma, câncer de pele e procedimentos estéticos.",
    tags: ["Mapeamento", "Acne", "Estética", "Prevenção"],
    price: "R$169",
    icon: Scan
  },
  {
    title: "Oftalmologia",
    subtitle: "Visão e olhos",
    description: "Cuidados completos com a visão, exames oftalmológicos e tratamento de doenças oculares.",
    tags: ["Exame de Vista", "Óculos", "Glaucoma", "Cirurgias"],
    price: "R$179",
    icon: Eye
  },
  {
    title: "Ortopedia",
    subtitle: "Ossos e Articulações",
    description: "Tratamento de fraturas, lesões esportivas, dores nas costas e problemas articulares.",
    tags: ["Fraturas", "Lesões Esportivas", "Dor nas Costas", "Urgência"],
    price: "R$159",
    icon: Bone
  },
  {
    title: "Endocrinologia",
    subtitle: "Hormônios",
    description: "Tratamento de diabetes, tireoide, obesidade e distúrbios hormonais.",
    tags: ["Diabetes", "Tireoide", "Obesidade", "Hormônios"],
    price: "R$199",
    icon: Activity
  },
  {
    title: "Psiquiatria",
    subtitle: "Saúde mental",
    description: "Tratamento de depressão, ansiedade, transtornos mentais e acompanhamento psiquiátrico.",
    tags: ["Depressão", "Ansiedade", "Medicamentos", "Importante"],
    price: "R$239",
    icon: Brain
  },
  {
    title: "Urologia",
    subtitle: "Sistema urinário",
    description: "Cuidados com o sistema urinário masculino e feminino, próstata e disfunções sexuais.",
    tags: ["Próstata", "Cálculos", "Infecção Urinária", "Prevenção"],
    price: "R$189",
    icon: ShieldCheck
  },
  {
    title: "Angiologia",
    subtitle: "Sistema vascular",
    description: "Especialista em doenças dos vasos sanguíneos, tratamento de varizes, trombose e problemas circulatórios.",
    tags: ["Varizes", "Trombose", "Doppler", "Circulação"],
    price: "R$189",
    icon: Activity
  },
  {
    title: "Nutrição",
    subtitle: "Alimentação saudável",
    description: "Orientação nutricional personalizada, reeducação alimentar e tratamento da obesidade.",
    tags: ["Plano Alimentar", "Reeducação", "Obesidade", "Acompanhamento"],
    price: "R$159",
    icon: Apple
  },
  {
    title: "Hematologia",
    subtitle: "Sangue",
    description: "Especialista em doenças do sangue, anemia, leucemia e distúrbios de coagulação.",
    tags: ["Anemia", "Coagulação", "Hemograma", "Oncohematologia"],
    price: "R$209",
    icon: Activity
  },
  {
    title: "Pneumologia",
    subtitle: "Sistema Respiratório",
    description: "Tratamento de asma, bronquite, pneumonia e doenças pulmonares.",
    tags: ["Asma", "Espirometria", "DPOC", "Cessação Tabaco"],
    price: "R$209",
    icon: Activity
  },
  {
    title: "Neuropediatria",
    subtitle: "Neurologia Infantil",
    description: "Especialista em distúrbios neurológicos infantis, epilepsia e desenvolvimento neurológico.",
    tags: ["Epilepsia", "Desenvolvimento", "TDAH", "Cefaleia"],
    price: "R$299",
    icon: Brain
  },
  {
    title: "Otorrinolaringologia",
    subtitle: "Ouvido, Nariz e Garganta",
    description: "Tratamento de sinusite, otite, problemas de audição e cirurgias do nariz.",
    tags: ["Sinusite", "Otite", "Cirurgias Nasais", "Teste Auditivo"],
    price: "R$159",
    icon: User
  },
  {
    title: "Geriatria",
    subtitle: "Terceira Idade",
    description: "Cuidados especializados para idosos, prevenção de quedas e qualidade de vida.",
    tags: ["Avaliação Geriátrica", "Prevenção Quedas", "Polifarmácia", "Demências"],
    price: "R$189",
    icon: User
  },
  {
    title: "Psicologia",
    subtitle: "Saúde mental",
    description: "Psicoterapia, terapia cognitivo-comportamental e apoio psicológico.",
    tags: ["Terapia Individual", "TCC", "Terapia Casal", "Psicologia Infantil"],
    price: "R$149",
    icon: Brain
  },
  {
    title: "Gastroenterologia",
    subtitle: "Sistema Digestivo",
    description: "Tratamento de problemas digestivos, gastrite, refluxo e doenças do fígado.",
    tags: ["Endoscopia", "Colonoscopia", "Gastrite", "Fígado"],
    price: "R$189",
    icon: Activity
  },
  {
    title: "Reumatologia",
    subtitle: "Articulações",
    description: "Tratamento de artrite, artrose, lúpus e doenças autoimunes.",
    tags: ["Artrite", "Artrose", "Lúpus", "Fibromialgia"],
    price: "R$209",
    icon: Bone
  },
  {
    title: "Neurologia",
    subtitle: "Sistema nervoso",
    description: "Cérebro, medula espinhal, nervos e músculos.",
    tags: ["Dor crônica", "Sono", "Exame neurológico"],
    price: "R$229",
    icon: Brain
  }
];

const Consultas: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-[72px] bg-sand-50">
      {/* Hero Section */}
      <section className="bg-dale-blue text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-serif mb-6">Consultas</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12">
            Mais de 20 especialidades médicas disponíveis com agendamento rápido, preços acessíveis e atendimento humanizado. Cuide da sua saúde com quem entende do assunto.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-dale-green mb-2">20+</div>
              <div className="text-sm uppercase tracking-wider opacity-80">Especialidades</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-dale-green mb-2">+50</div>
              <div className="text-sm uppercase tracking-wider opacity-80">Desconto Dale+</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-dale-green mb-2">24h</div>
              <div className="text-sm uppercase tracking-wider opacity-80">Agendamento</div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties List */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-dale-blue mb-4">Nossas especialidades</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Profissionais altamente qualificados, equipamentos modernos e atendimento humanizado para cuidar da sua saúde
            </p>
          </div>

          <div className="space-y-6">
            {CONSULTAS_DATA.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-sand-200 hover:shadow-md transition-shadow flex flex-col md:flex-row gap-6 items-start md:items-center"
              >
                <div className="w-16 h-16 rounded-full bg-dale-light flex items-center justify-center text-dale-green shrink-0">
                  <item.icon size={32} strokeWidth={1.5} />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-dale-blue mb-1">{item.title}</h3>
                  <p className="text-sm font-semibold text-dale-green mb-3">{item.subtitle}</p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs px-3 py-1 bg-sand-100 text-gray-600 rounded-full border border-sand-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col items-start md:items-end gap-4 md:w-48 shrink-0 mt-4 md:mt-0 border-t md:border-t-0 border-sand-200 pt-4 md:pt-0 w-full md:w-auto">
                  <div className="text-2xl font-bold text-dale-blue">{item.price}</div>
                  <GradientButton 
                    variant="primary" 
                    className="w-full md:w-auto !py-2"
                    onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Gostaria%20de%20agendar%20uma%20consulta%20de%20${encodeURIComponent(item.title)}`, '_blank')}
                  >
                    Agendar
                  </GradientButton>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Values Marquee */}
      <section className="py-8 bg-white overflow-hidden relative border-y border-gray-100">
         <div className="flex w-max animate-marquee-slow whitespace-nowrap items-center">
           {[...VALUES, ...VALUES, ...VALUES, ...VALUES].map((value, index) => {
             const weights = ["font-light", "font-normal", "font-medium", "font-bold", "font-extrabold"];
             const weightClass = weights[index % weights.length];
             return (
               <div key={index} className="flex items-center mx-6">
                 <span className="text-xl md:text-2xl font-serif text-gray-200 font-italic mx-4">•</span>
                 <span className={`text-base md:text-lg uppercase tracking-widest text-gray-400 hover:text-dale-green transition-colors duration-300 font-sans ${weightClass}`}>
                   {value}
                 </span>
               </div>
             );
           })}
         </div>
      </section>

      {/* Dale+ Teaser */}
      <DalePlusTeaser />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-sand-50">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-sand-200 flex flex-col md:flex-row items-center gap-8 overflow-hidden relative">
            <div className="flex-1 relative z-10">
              <h2 className="text-3xl md:text-4xl font-serif text-dale-blue mb-6">
                Pronto para cuidar da sua saúde?
              </h2>
              <p className="text-gray-600 mb-8 max-w-lg leading-relaxed">
                Agende sua consulta agora mesmo e tenha acesso aos melhores especialistas da Tijuca. Atendimento humanizado, preços justos e toda comodidade que você merece.
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
                src="https://res.cloudinary.com/doqw5aqcf/image/upload/v1773062573/paciente-no-consulta-ortopedica-com-goela-cervical-jpg_up3dsw.webp" 
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

export default Consultas;
