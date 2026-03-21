import React from 'react';

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-t border-sand-200">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-dale-blue">Por que escolher a DaleSaúde?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-sand-50 p-8 rounded-3xl border border-sand-200">
            <h3 className="text-xl font-bold text-dale-blue mb-4">Especialidades no mesmo lugar</h3>
            <p className="text-gray-600 leading-relaxed">
              Oferecemos uma ampla gama de especialidades médicas, exames e serviços no mesmo espaço, com qualidade e agilidade. Assim, você resolve tudo em um só lugar — com segurança, conforto e economia de tempo.
            </p>
          </div>
          <div className="bg-sand-50 p-8 rounded-3xl border border-sand-200">
            <h3 className="text-xl font-bold text-dale-blue mb-4">Atendimento humanizado</h3>
            <p className="text-gray-600 leading-relaxed">
              Na DaleSaúde, você é tratado com respeito, escuta e empatia desde o primeiro contato. Nada de pressa ou frieza: nossos profissionais cuidam de você como gostariam de ser cuidados, com atenção real à sua história e necessidades.
            </p>
          </div>
          <div className="bg-sand-50 p-8 rounded-3xl border border-sand-200">
            <h3 className="text-xl font-bold text-dale-blue mb-4">Nota 4.9 no Google</h3>
            <p className="text-gray-600 leading-relaxed">
              Mais de 800 pacientes já avaliaram a DaleSaúde com 4.9 estrelas no Google. Cada avaliação representa uma experiência de cuidado, acolhimento e excelência. Somos reconhecidos por quem mais importa: nossos pacientes.
            </p>
          </div>
          <div className="bg-sand-50 p-8 rounded-3xl border border-sand-200">
            <h3 className="text-xl font-bold text-dale-blue mb-4">Agendamento descomplicado</h3>
            <p className="text-gray-600 leading-relaxed">
              Você não precisa perder tempo. Agende sua consulta pelo WhatsApp, sem burocracia, sem filas e com atendimento rápido. Em poucos cliques, você já garante seu horário com o profissional certo.
            </p>
          </div>
          <div className="bg-sand-50 p-8 rounded-3xl border border-sand-200 md:col-span-2 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-dale-blue mb-4">Preço justo e acessível</h3>
              <p className="text-gray-600 leading-relaxed">
                Na DaleSaúde, acessível não significa básico. Oferecemos atendimento de excelência com valores justos e transparentes. Aqui, você sabe exatamente quanto vai pagar — sem surpresas e sem abrir mão da qualidade.
              </p>
            </div>
            <div className="w-full md:w-1/3 h-48 rounded-2xl overflow-hidden shrink-0">
              <img src="https://res.cloudinary.com/doqw5aqcf/image/upload/v1773062573/paciente-no-consulta-ortopedica-com-goela-cervical-jpg_up3dsw.webp" alt="Atendimento" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
