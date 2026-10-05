import React, { useState } from 'react';
import WhatsAppIcon from './WhatsAppIcon';
import { WHATSAPP_NUMBER } from '../../constants';

const FloatingWidget: React.FC = () => {
  const [isHoveredWa, setIsHoveredWa] = useState(false);

  // Fica acima do balão do webchat (guia de ajustes, item 4), que ocupa o canto: bottom 20px, right 20px, 60px
  return (
    <div className="fixed bottom-[96px] right-5 z-50 flex flex-col items-end gap-3">
      {/* WhatsApp Floating CTA */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta`}
        target="_blank"
        rel="noreferrer"
        className="group relative flex items-center justify-center h-14 sm:h-16 rounded-full bg-gradient-to-r from-dale-green to-emerald-600 text-white shadow-2xl hover:shadow-green-500/30 transition-all duration-300 cursor-pointer border border-white/20"
        onMouseEnter={() => setIsHoveredWa(true)}
        onMouseLeave={() => setIsHoveredWa(false)}
        style={{ width: isHoveredWa ? '260px' : '60px' }}
        aria-label="Agendar consulta no WhatsApp"
      >
        {/* Pulsing ring */}
        <span className="absolute inset-0 rounded-full bg-dale-green opacity-40 animate-ping" style={{ animationDuration: '3s' }}></span>

        <div className="relative z-10 flex items-center justify-center w-full h-full px-1">
          {/* Custom WhatsApp Icon */}
          <div className="w-12 h-12 flex items-center justify-center shrink-0">
            <WhatsAppIcon size={28} className="text-white" />
          </div>
          
          {/* Expanding Text */}
          <div className={`overflow-hidden whitespace-nowrap transition-all duration-300 flex items-center ${isHoveredWa ? 'w-full opacity-100 pr-4' : 'w-0 opacity-0'}`}>
            <span className="font-bold text-sm tracking-wide">Agende sua Consulta</span>
          </div>
        </div>

        {/* Online Badge */}
        <div className="absolute top-0 right-0 w-4 h-4 bg-green-400 border-2 border-white rounded-full z-20">
          <span className="absolute inset-0 rounded-full bg-green-400 opacity-75 animate-ping"></span>
        </div>
      </a>
    </div>
  );
};

export default FloatingWidget;