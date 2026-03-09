import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, MapPin, Clock, Phone, Video } from 'lucide-react';
import { ADDRESS, PHONE_NUMBER, IMAGES } from '../../constants';

// Simple TikTok icon since Lucide might not have it in this version or to be safe
const TikTokIcon = ({ size = 20, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-dale-blue text-white pt-20 pb-10 mt-20 relative overflow-hidden">
      {/* Gradient fade at top removed as requested */}

      {/* Decorative texture */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-20 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <img src={IMAGES.logo} alt="DaleSaúde" className="h-12" />
            <p className="text-gray-400 leading-relaxed text-sm">
              Clínica com Infraestrutura moderna, excelentes médicos, ótimas avaliações e preço justo na Tijuca.<br />
              Saúde de qualidade, sem desperdício de tempo.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/dalesaude" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-dale-green transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="https://tiktok.com/@dalesaude_" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-dale-green transition-colors duration-300">
                <TikTokIcon size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-dale-green font-serif text-xl mb-6">Navegação</h3>
            <ul className="space-y-3">
              {[
                { name: 'Início', link: '/' }, 
                { name: 'Especialidades', link: '/consultas' }, 
                { name: 'Ultrassonografias', link: '/ultrassonografias' }, 
                { name: 'Sobre Nós', link: '/sobre-nos' }, 
                { name: 'Dale+', link: null }
              ].map((item) => (
                <li key={item.name}>
                  {item.link ? (
                    <Link to={item.link} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 rounded-full bg-dale-green opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {item.name}
                    </Link>
                  ) : (
                    <div className="text-gray-500 flex items-center gap-2 cursor-default">
                      <span className="w-1.5 h-1.5 rounded-full bg-transparent"></span>
                      {item.name} <span className="text-[10px] bg-dale-gold text-black px-1.5 py-0.5 rounded font-bold uppercase tracking-wide ml-1">em breve</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-dale-green font-serif text-xl mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="shrink-0 text-dale-green" size={20} />
                <span>{ADDRESS}</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="shrink-0 text-dale-green" size={20} />
                <span>{PHONE_NUMBER}</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Clock className="shrink-0 text-dale-green" size={20} />
                <div>
                  <p>Seg - Sex: 07h às 18h</p>
                  <p>Sábado: 07h às 12h</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-dale-green font-serif text-xl mb-6">Novidades</h3>
            <p className="text-gray-400 text-sm mb-4">Receba dicas de saúde e novidades sobre o Dale+.</p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Seu e-mail" 
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-dale-green transition-colors"
              />
              <button className="w-full bg-dale-green text-white font-bold py-3 rounded-lg hover:bg-white hover:text-dale-blue transition-colors">
                Inscrever-se
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} DaleSaúde. Todos os direitos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-dale-green">Política de Privacidade</a>
            <a href="#" className="hover:text-dale-green">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;