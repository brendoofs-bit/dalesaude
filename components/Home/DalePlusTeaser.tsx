import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { DALE_PLUS_BENEFITS, IMAGES, AJUSTES_IMAGES, DALE_PLUS_URL } from '../../constants';

/**
 * Seção DALE+ Benefícios refeita conforme o guia de ajustes (itens 5 e 6):
 * versão compacta na linguagem visual do dalemais.com.br (foto familiar, fundo escuro
 * elegante, título forte, texto curto e botão claro), com a logo oficial do clube
 * e CTA "Conheça o DALE+" levando para https://dalemais.com.br.
 * Textos: título do próprio site do DALE+; texto curto e benefícios já existentes nesta seção.
 */
const DalePlusTeaser: React.FC = () => {
  return (
    <section id="daleplus" className="py-16 md:py-24 bg-sand-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-dm-navy text-white">
          <img
            src={AJUSTES_IMAGES.dalePlusFamilia}
            alt="Família sorrindo abraçada no sofá de casa"
            width={1600}
            height={900}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 -z-20 h-full w-full object-cover object-[72%_center]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(7,38,59,0.92)_0%,rgba(7,38,59,0.85)_60%,rgba(7,38,59,0.7)_100%)] lg:bg-[linear-gradient(90deg,rgba(7,38,59,0.97)_0%,rgba(7,38,59,0.9)_45%,rgba(7,38,59,0.55)_75%,rgba(7,38,59,0.25)_100%)]"
          />

          <div className="px-6 py-10 sm:px-12 sm:py-14 lg:px-14 lg:py-16">
            <div className="lg:max-w-[600px]">
              {/* Logo oficial do DALE+ (sem redesenho), sobre fundo branco para manter as cores originais */}
              <div className="inline-flex rounded-2xl bg-white px-4 py-3 shadow-lg">
                <img src={IMAGES.dalePlusLogo} alt="DALE+ Benefícios" width={150} height={58} loading="lazy" className="h-12 sm:h-14 w-auto" />
              </div>

              <h2 className="mt-7 font-sans text-balance text-[2rem] leading-[1.08] font-extrabold tracking-[-0.03em] sm:text-[2.75rem] lg:text-[3.1rem]">
                Mais <span className="text-dm-sky">saúde, economia</span> e benefícios para o seu dia a dia
              </h2>
              <p className="mt-4 max-w-xl text-[1.0625rem] leading-relaxed text-white/85 sm:text-lg">
                A forma mais prática e acessível de cuidar da sua saúde com frequência.
              </p>

              <ul className="mt-6 grid grid-cols-2 gap-2.5 text-[0.98rem] sm:gap-3 xl:grid-cols-4">
                {DALE_PLUS_BENEFITS.map((benefit) => (
                  <li
                    key={benefit.title}
                    className="flex items-center gap-2 rounded-xl bg-white/10 px-3.5 py-3 ring-1 ring-white/15 backdrop-blur-sm"
                  >
                    <Check size={18} strokeWidth={3} className="shrink-0 text-dm-yellow" />
                    <span className="leading-snug font-medium">{benefit.title}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <a
                  href={DALE_PLUS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-14 w-full sm:w-auto items-center justify-center gap-2.5 rounded-full bg-dm-blue px-8 text-[1.0625rem] font-bold text-white shadow-[0_12px_28px_-12px_rgba(3,110,173,0.9)] transition-colors hover:bg-[#025C91]"
                >
                  Conheça o DALE+
                  <ArrowRight size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DalePlusTeaser;
