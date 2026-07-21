import React from 'react';
import { ShieldCheck } from 'lucide-react';

const DaleIndicaSection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start">
            <h2 className="text-5xl md:text-6xl font-sans font-bold mb-4 flex items-center gap-2">
              <span className="text-dale-blue">Dale</span>
              <span className="text-orange-500">indica</span>
            </h2>
            
            <div className="text-gray-500 font-bold text-sm tracking-[0.2em] uppercase mb-6">
              INDIQUE E GANHE!
            </div>
            
            <h3 className="text-3xl md:text-4xl font-serif text-dale-blue mb-6 leading-tight">
              Indique novos pacientes e receba prêmios exclusivos da Dale Saúde.
            </h3>
            
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Indique pessoas e, quando elas se tornarem pacientes da Dale Saúde, <strong>você ganha recompensas!</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button 
                onClick={() => window.open('https://dalesaude.pages.net.br/indicar', '_blank')}
                className="bg-[#71c242] hover:bg-[#5ea336] text-white font-bold py-4 px-8 rounded-xl transition-colors duration-300 flex items-center justify-center shadow-lg shadow-green-500/20 uppercase tracking-wide"
              >
                QUERO INDICAR
              </button>
            </div>
          </div>

          {/* Image Content */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-dale-light to-transparent rounded-3xl transform rotate-3 scale-105 -z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-bl from-orange-50 to-transparent rounded-3xl transform -rotate-2 scale-105 -z-10"></div>
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/50 bg-white">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop" 
                alt="Médica sorrindo - Dale Saúde" 
                className="w-full h-[500px] object-cover object-top"
                referrerPolicy="no-referrer"
              />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 flex items-center gap-4 animate-pulse-slow">
                <div className="w-12 h-12 bg-dale-blue rounded-full flex items-center justify-center text-white">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Programa de</p>
                  <p className="text-dale-blue font-bold">Recompensas</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default DaleIndicaSection;
