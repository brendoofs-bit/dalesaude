import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { IMAGES, PHONE_NUMBER } from '../../constants';
import GradientButton from '../UI/GradientButton';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

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
    { name: 'Início', href: '/' },
    { name: 'Especialidades', href: '/consultas' },
    { name: 'Ultrassonografias', href: '/ultrassonografias' },
    { name: 'Sobre Nós', href: '/sobre-nos' },
    { name: 'Dale+', tag: 'em breve' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-2 bg-dale-blue shadow-md`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo - Keeping original identity (White Dale, Green Saúde) */}
        <Link to="/" className="relative z-50">
           <img 
             src={IMAGES.logo} 
             alt="DaleSaúde Logo" 
             className="h-14"
             // No filters applied to preserve the White/Green identity requested
           />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            link.href ? (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-semibold tracking-wide transition-colors duration-300 relative group flex items-center gap-2 ${
                  location.pathname === link.href ? 'text-dale-green' : 'text-white hover:text-dale-green'
                }`}
              >
                {link.name}
                {link.tag && (
                  <span className="text-[10px] bg-dale-gold text-black px-1.5 py-0.5 rounded font-bold uppercase tracking-wide">
                    {link.tag}
                  </span>
                )}
                <span className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 bg-dale-green ${
                  location.pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ) : (
              <div
                key={link.name}
                className="text-sm font-semibold tracking-wide text-white/70 flex items-center gap-2 cursor-default"
              >
                {link.name}
                {link.tag && (
                  <span className="text-[10px] bg-dale-gold text-black px-1.5 py-0.5 rounded font-bold uppercase tracking-wide">
                    {link.tag}
                  </span>
                )}
              </div>
            )
          ))}
          
          <GradientButton 
            variant="secondary"
            className="!py-2 !px-6 text-sm"
            onClick={() => window.location.href = `tel:${PHONE_NUMBER.replace(/\D/g,'')}`}
          >
            <Phone size={16} />
            <span className="hidden xl:inline">{PHONE_NUMBER}</span>
          </GradientButton>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden relative z-50 text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>

        {/* Mobile Nav Overlay */}
        <div className={`fixed inset-0 bg-dale-blue/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {navLinks.map((link) => (
            link.href ? (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-2xl font-serif transition-colors flex items-center gap-2 ${
                  location.pathname === link.href ? 'text-dale-green' : 'text-white hover:text-dale-green'
                }`}
              >
                {link.name}
                {link.tag && (
                  <span className="text-xs bg-dale-gold text-black px-2 py-1 rounded font-bold uppercase">
                    {link.tag}
                  </span>
                )}
              </Link>
            ) : (
              <div
                key={link.name}
                className="text-2xl font-serif text-white/70 flex items-center gap-2 cursor-default"
              >
                {link.name}
                {link.tag && (
                  <span className="text-xs bg-dale-gold text-black px-2 py-1 rounded font-bold uppercase">
                    {link.tag}
                  </span>
                )}
              </div>
            )
          ))}
          <div className="mt-8">
            <GradientButton onClick={() => window.location.href = `tel:${PHONE_NUMBER.replace(/\D/g,'')}`}>
              Ligar: {PHONE_NUMBER}
            </GradientButton>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;