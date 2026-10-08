import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Calendar, Phone } from 'lucide-react';
import {
  IMAGES,
  AJUSTES_IMAGES,
  PHONE_NUMBER,
  PHONE_TEL,
  WHATSAPP_URL,
  AGENDAMENTO_ONLINE_URL,
  DALE_PLUS_URL,
} from '../../constants';
import GradientButton from '../UI/GradientButton';
import WhatsAppIcon from '../UI/WhatsAppIcon';

/**
 * Topo conforme a referência visual aprovada:
 * logo | Agendamento online | DALE+ Benefícios | Ligar | WhatsApp 24h
 * No celular os botões ficam numa faixa logo abaixo do logo.
 */
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

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
    { name: 'Sobre Nós', href: '/sobre-nos' },
    { name: 'Dale+', href: DALE_PLUS_URL, isExternal: true, tag: 'NOVO' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-ref-line">
      {/* Barra principal */}
      <div className="container mx-auto px-4 md:px-8 h-16 lg:h-24 flex items-center gap-2 lg:gap-3">
        <Link to="/" className="relative z-50 shrink-0" aria-label="DaleSaúde – página inicial">
          <img
            src={isMenuOpen ? IMAGES.logo : AJUSTES_IMAGES.logoPositivo}
            alt="DaleSaúde Logo"
            width={206}
            height={40}
            className="h-[30px] sm:h-9 lg:h-[46px] w-auto"
          />
        </Link>

        <div className="ml-auto flex items-center gap-2 lg:gap-3">
          {/* Botões do topo (desktop) */}
          <nav aria-label="Acesso rápido" className="hidden lg:flex items-center gap-3">
            <a
              href={AGENDAMENTO_ONLINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-16 items-center gap-3 rounded-xl bg-ref-blue px-4 text-white transition-colors hover:bg-ref-blue-dark"
            >
              <Calendar size={28} strokeWidth={1.8} className="shrink-0" />
              <span className="text-[15px] leading-[1.2] font-semibold text-left">
                Agendamento
                <br />
                Online
              </span>
            </a>
            <a
              href={DALE_PLUS_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="DALE+ Benefícios"
              className="inline-flex h-16 items-center rounded-xl border border-ref-line bg-white px-3.5 transition-shadow hover:shadow-md"
            >
              <img src={IMAGES.dalePlusLogo} alt="DALE+ Benefícios" width={112} height={44} className="h-11 w-auto" />
            </a>
          </nav>

          <span aria-hidden="true" className="hidden lg:block mx-1 h-11 w-px bg-ref-ink/25" />

          {/* Ligar */}
          <a
            href={`tel:${PHONE_TEL}`}
            aria-label={`Ligar para ${PHONE_NUMBER}`}
            title={PHONE_NUMBER}
            className={`relative z-50 inline-flex size-11 lg:size-14 items-center justify-center rounded-xl transition-colors ${
              isMenuOpen ? 'text-white' : 'text-ref-ink hover:bg-ref-blue-light'
            }`}
          >
            <Phone size={26} strokeWidth={1.7} />
          </a>

          {/* WhatsApp 24h */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Agendar pelo WhatsApp"
            className="relative z-50 inline-flex size-11 lg:size-16 items-center justify-center rounded-xl bg-ref-whats text-white shadow-[0_12px_24px_-12px_rgba(3,166,45,0.6)] transition-colors hover:bg-ref-whats-dark"
          >
            <WhatsAppIcon size={30} className="w-6 h-6 lg:w-9 lg:h-9" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className={`lg:hidden relative z-50 inline-flex size-11 items-center justify-center rounded-xl ${
              isMenuOpen ? 'text-white' : 'text-ref-ink'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Botões do topo no celular e tablet */}
      <div className="lg:hidden border-t border-ref-line/80">
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between gap-2.5 py-2">
          <a
            href={AGENDAMENTO_ONLINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-0 inline-flex h-11 min-[360px]:h-12 items-center justify-center gap-2 rounded-xl bg-ref-blue px-3 text-white transition-colors hover:bg-ref-blue-dark"
          >
            <Calendar size={18} strokeWidth={1.8} className="shrink-0" />
            <span className="text-[12.5px] min-[360px]:text-[13.5px] font-semibold text-left whitespace-nowrap">
              Agendamento Online
            </span>
          </a>
          <a
            href={DALE_PLUS_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="DALE+ Benefícios"
            className="shrink-0 inline-flex h-11 min-[360px]:h-12 items-center justify-center rounded-xl border border-ref-line bg-white px-3 transition-shadow hover:shadow-md"
          >
            <img src={IMAGES.dalePlusLogo} alt="DALE+ Benefícios" width={70} height={34} className="h-7 min-[360px]:h-8 w-auto" />
          </a>
        </div>
      </div>

      {/* Mobile Nav Overlay (menu original do site) */}
      <div className={`lg:hidden fixed inset-0 bg-dale-blue/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {navLinks.map((link) => {
          if (link.isExternal) {
            return (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-serif transition-colors flex items-center gap-2 text-white hover:text-dale-green"
              >
                {link.name}
                {link.tag && (
                  <span className="text-xs bg-dale-gold text-black px-2 py-1 rounded font-bold uppercase">
                    {link.tag}
                  </span>
                )}
              </a>
            );
          }
          return (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`text-2xl font-serif transition-colors flex items-center gap-2 ${
                location.pathname === link.href ? 'text-dale-green' : 'text-white hover:text-dale-green'
              }`}
            >
              {link.name}
            </Link>
          );
        })}
        <div className="mt-8">
          <GradientButton
            variant="primary"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            icon={<WhatsAppIcon size={20} />}
          >
            Agendar no WhatsApp
          </GradientButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
