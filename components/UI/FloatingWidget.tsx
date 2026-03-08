import React, { useState } from 'react';
import { Phone, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PHONE_NUMBER, WHATSAPP_NUMBER } from '../../constants';

const FloatingWidget: React.FC = () => {
  const [isHoveredWa, setIsHoveredWa] = useState(false);
  const [isHoveredPhone, setIsHoveredPhone] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      
      {/* Sophisticated WhatsApp Widget */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o`}
        target="_blank"
        rel="noreferrer"
        className="group relative flex items-center justify-center h-14 rounded-full bg-gradient-to-r from-dale-green to-teal-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
        onMouseEnter={() => setIsHoveredWa(true)}
        onMouseLeave={() => setIsHoveredWa(false)}
        style={{ width: isHoveredWa ? '220px' : '56px' }}
      >
        <div className="relative z-10 flex items-center justify-center w-full h-full px-1">
          {/* Custom SVG Icon */}
          <div className="w-12 h-12 flex items-center justify-center shrink-0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
              <path d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          {/* Expanding Text */}
          <div className={`overflow-hidden whitespace-nowrap transition-all duration-300 flex items-center ${isHoveredWa ? 'w-full opacity-100 pr-4' : 'w-0 opacity-0'}`}>
            <span className="font-semibold text-sm tracking-wide">Agende sua Avaliação</span>
          </div>
        </div>

        {/* Online Badge */}
        <div className="absolute top-0 right-0 w-3.5 h-3.5 bg-green-400 border-2 border-white rounded-full z-20">
          <span className="absolute inset-0 rounded-full bg-green-400 opacity-75 animate-ping"></span>
        </div>
      </a>

      {/* Phone Widget */}
      <button
        onClick={() => {
           window.location.href = `tel:${PHONE_NUMBER}`;
        }}
        onMouseEnter={() => setIsHoveredPhone(true)}
        onMouseLeave={() => setIsHoveredPhone(false)}
        className="group relative flex items-center justify-center h-16 rounded-full bg-gradient-to-r from-dale-gold to-yellow-500 text-dale-blue shadow-2xl hover:shadow-3xl transition-all duration-300"
        style={{ width: isHoveredPhone ? '180px' : '64px' }}
      >
        {/* Elegant Pulse */}
        <span className="absolute inset-0 rounded-full bg-dale-gold opacity-60 animate-ping" style={{ animationDuration: '3s' }}></span>

        <div className="relative z-10 flex items-center justify-center w-full h-full px-1">
          <div className="w-14 h-14 flex items-center justify-center shrink-0">
            <Phone size={28} className="animate-ring" />
          </div>

          {/* Expanding Text */}
          <div className={`overflow-hidden whitespace-nowrap transition-all duration-300 flex items-center ${isHoveredPhone ? 'w-full opacity-100 pr-4' : 'w-0 opacity-0'}`}>
            <span className="font-bold text-base tracking-wide">Ligue Agora!</span>
          </div>
        </div>
      </button>
    </div>
  );
};

export default FloatingWidget;