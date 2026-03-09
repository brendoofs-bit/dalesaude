import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { IMAGES, PHONE_NUMBER } from '../../constants';
import GradientButton from '../UI/GradientButton';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Início', href: 'https://dalesaude.com' },
    { name: 'Especialidades', href: 'https://dalesaude.com/consultas' },
    { name: 'Ultrassonografias', href: 'https://dalesaude.com/ultrassonografias' },
    { name: 'Sobre Nós', href: 'https://dalesaude.com/sobre-nos' },
    { name: 'Dale+', href: 'https://dalesaude.com/dale', tag: 'em breve' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'py-3 bg-gradient-to-r from-dale-blue to-blue-900 shadow-md' : 'py-6 bg-gradient-to-r from-dale-blue to-blue-900'
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          {/* Logo - Keeping original identity (White Dale, Green Saúde) */}
          <a href="https://dalesaude.com" className="relative z-50 flex items-center">
             <img 
               src={IMAGES.logo} 
               alt="DaleSaúde Logo" 
               style={{ maxWidth: '150px', height: '30px', objectFit: 'contain' }}
             />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold tracking-wide transition-colors duration-300 relative group text-white hover:text-dale-green flex items-center gap-2`}
              >
                {link.name}
                {link.tag && (
                  <span className="text-[10px] bg-dale-gold text-black px-1.5 py-0.5 rounded font-bold uppercase tracking-wide">
                    {link.tag}
                  </span>
                )}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-dale-green"></span>
              </a>
            ))}
            
            <GradientButton 
              variant="secondary"
              className="!py-2 !px-6 text-sm"
              href={`tel:${PHONE_NUMBER.replace(/\D/g,'')}`}
            >
              <Phone size={16} />
              <span className="hidden xl:inline">{PHONE_NUMBER}</span>
            </GradientButton>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden relative z-[70] text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <div className={`fixed inset-0 bg-gradient-to-r from-dale-blue to-blue-900 z-[60] flex flex-col items-center justify-center gap-8 transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsMenuOpen(false)}
            className="text-2xl font-serif text-white hover:text-dale-green transition-colors flex items-center gap-2"
          >
            {link.name}
            {link.tag && (
              <span className="text-xs bg-dale-gold text-black px-2 py-1 rounded font-bold uppercase">
                {link.tag}
              </span>
            )}
          </a>
        ))}
        <div className="mt-8">
          <GradientButton href={`tel:${PHONE_NUMBER.replace(/\D/g,'')}`}>
            Ligar: {PHONE_NUMBER}
          </GradientButton>
        </div>
      </div>
    </>
  );
};

export default Header;