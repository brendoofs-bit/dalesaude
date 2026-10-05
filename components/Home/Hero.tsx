import React from 'react';
import { Phone } from 'lucide-react';
import WhatsAppIcon from '../UI/WhatsAppIcon';
import { AJUSTES_IMAGES, PHONE_NUMBER, PHONE_TEL, WHATSAPP_URL } from '../../constants';

/**
 * Banner/hero conforme a REFERÊNCIA VISUAL APROVADA (guia de ajustes, itens 2 e 3).
 * Não alterar textos, cores ou composição sem nova validação do cliente.
 * "24h" se refere ao atendimento pelo WhatsApp (informações e agendamentos), não a pronto atendimento.
 */

const StarIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M12 1.8l3.09 6.26 6.91 1.01-5 4.87 1.18 6.88L12 17.57l-6.18 3.25L7 13.94l-5-4.87 6.91-1.01z" />
  </svg>
);

const MapPinIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
    <path fill="currentColor" d="M12 1.5a8.5 8.5 0 0 0-8.5 8.5c0 5.6 6.2 11.1 7.7 12.4a1.25 1.25 0 0 0 1.6 0c1.5-1.3 7.7-6.8 7.7-12.4A8.5 8.5 0 0 0 12 1.5Z" />
    <circle cx="12" cy="10" r="3.2" fill="#fff" />
  </svg>
);

const Hero: React.FC = () => {
  const img = AJUSTES_IMAGES.hero;
  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-ref-canvas pt-[var(--header-h)]">
      {/* No desktop/tablet a foto é o fundo do hero; o degradê no pé funde a foto com a seção */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 hidden h-28 bg-gradient-to-b from-transparent to-ref-canvas sm:block" />

      <div className="container mx-auto px-4 md:px-8 relative sm:static pt-6 pb-8 sm:pt-12 lg:pt-16 lg:pb-10">
        {/* Foto do hero (guia de ajustes, item 2) — a mesma foto horizontal em todas as telas.
            Celular: recorte da médica à direita, atrás do título (como na referência); botões abaixo.
            A partir de 640px: foto inteira como fundo do hero, alinhada à direita (a borda das prateleiras fica fora da tela)
            e com altura fixa por faixa de tela, para a médica não passar por trás do texto. */}
        <div className="pointer-events-none absolute top-2 right-[-2vw] -z-10 aspect-[594/753] w-[62vw] max-w-[340px] sm:right-0 sm:top-[var(--header-h)] sm:h-[63vw] sm:w-auto sm:max-w-none sm:aspect-[2752/1536] sm:translate-x-[16%] lg:h-[680px] xl:h-[720px] 2xl:h-[760px]">
          <img
            src={img.src}
            srcSet={img.srcSet}
            sizes="(min-width: 640px) 135vw, 140vw"
            alt="Médica sorrindo, de braços cruzados, com jaleco branco com o logo da DaleSaúde e estetoscópio"
            width={2752}
            height={1536}
            fetchPriority="high"
            className="hero-photo h-full w-full select-none object-cover object-[70%_top] sm:object-left-top"
          />
        </div>

        <h1
          id="hero-title"
          className="max-w-[calc(64vw-1rem)] text-[clamp(1.72rem,7.6vw,2.4rem)] leading-[1.07] font-extrabold tracking-[-0.035em] text-ref-ink sm:max-w-[58%] sm:text-[clamp(2.4rem,5.4vw,3.4rem)] lg:max-w-[780px] lg:text-[clamp(3.2rem,4.6vw,4.1rem)] lg:leading-[1.04]"
        >
          <span className="lg:block">Consultas e</span> <span className="lg:block">exames particulares</span>{' '}
          <span className="lg:block">com preço acessível,</span> <span className="lg:block">no coração da</span>{' '}
          <span className="relative inline-block text-ref-blue">
            Tijuca
            <svg
              aria-hidden="true"
              viewBox="0 0 200 22"
              preserveAspectRatio="none"
              className="absolute -bottom-[0.32em] left-[6%] h-[0.32em] w-[96%]"
            >
              <path d="M3 17C62 6 130 3 197 6C132 8 66 13 6 21Z" fill="#5CCB0C" />
            </svg>
          </span>
        </h1>

        <div className="mt-9 flex flex-col gap-3 sm:mt-10 sm:items-start lg:mt-12 lg:flex-row lg:items-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-16 w-full items-center justify-center gap-3 whitespace-nowrap rounded-2xl bg-ref-whats px-5 text-[19px] font-bold text-white shadow-[0_12px_24px_-12px_rgba(3,166,45,0.6)] transition-colors hover:bg-ref-whats-dark sm:w-auto sm:min-w-[340px] sm:px-7"
          >
            <WhatsAppIcon size={26} className="shrink-0" />
            Agendar pelo WhatsApp
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            title={`Ligar para ${PHONE_NUMBER}`}
            className="inline-flex h-16 w-full items-center justify-center gap-3 whitespace-nowrap rounded-2xl border-[1.5px] border-ref-text/80 bg-white px-5 text-[19px] font-semibold text-ref-ink transition-colors hover:bg-ref-blue-light sm:w-auto sm:min-w-[340px] sm:px-7 lg:min-w-[180px]"
          >
            <Phone size={24} className="shrink-0" />
            Ligar
          </a>
        </div>

        {/* Informações de confiança. Até 1535px: 2 linhas (a 3ª cairia em cima da foto). A partir de 1536px: uma linha com divisórias, como na referência. */}
        <ul className="mt-7 grid grid-cols-[auto_1fr] gap-x-5 gap-y-4 text-[14.5px] text-ref-text sm:w-fit sm:gap-x-8 sm:text-[15px] lg:mt-8 2xl:flex 2xl:w-auto 2xl:flex-wrap 2xl:items-center 2xl:gap-0 2xl:text-[16px]">
          <li className="flex items-center gap-2 2xl:pr-6">
            <StarIcon className="size-6 shrink-0 text-ref-star" />
            <span>
              <strong className="font-bold">4,9</strong> no Google
            </span>
          </li>
          <li className="flex items-center gap-2 2xl:border-l 2xl:border-ref-ink/15 2xl:px-6">
            <MapPinIcon className="size-6 shrink-0 text-ref-blue-pin" />
            <span>Rua Uruguai, 147 · Tijuca</span>
          </li>
          <li className="col-span-2 flex items-center gap-2.5 2xl:border-l 2xl:border-ref-ink/15 2xl:pl-6">
            <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full border-2 border-ref-whats text-ref-whats">
              <WhatsAppIcon size={18} />
            </span>
            <span className="leading-snug">
              <strong className="font-semibold text-ref-ink">Atendimento pelo WhatsApp 24h</strong>
              <span className="block text-[14px] text-ref-muted">inclusive sábados, domingos e feriados.</span>
            </span>
          </li>
        </ul>

        <PriceCard />
      </div>
    </section>
  );
};

/** Card "VALORES ACESSÍVEIS" da referência aprovada */
const PriceCard: React.FC = () => (
  <section
    aria-labelledby="valores-title"
    className="relative mt-8 rounded-[1.75rem] bg-white px-6 pt-6 pb-2 shadow-[0_1px_2px_rgba(11,20,48,0.04),0_12px_32px_-12px_rgba(11,20,48,0.12)] ring-1 ring-ref-ink/[0.04] sm:px-10 sm:pt-8 lg:mt-10 lg:pb-4"
  >
    <h2 id="valores-title" className="text-[13px] font-semibold tracking-[0.2em] text-ref-muted uppercase sm:text-sm">
      Valores acessíveis
    </h2>
    <dl className="mt-2 divide-y divide-ref-line lg:grid lg:grid-cols-2 lg:divide-x lg:divide-y-0">
      <div className="flex items-center justify-between gap-4 py-5 lg:pr-10">
        <dt className="text-[1.375rem] leading-tight font-medium text-ref-ink sm:text-[1.75rem]">Consultas médicas</dt>
        <dd className="text-right">
          <span className="block text-[15px] text-ref-muted sm:text-base">a partir de</span>
          <span className="block text-[2.5rem] leading-none font-extrabold tracking-[-0.03em] text-ref-blue sm:text-[3.25rem]">R$&nbsp;129</span>
          <span className="mt-1 block text-[15px] text-ref-muted sm:text-base">(Clínico Geral)</span>
        </dd>
      </div>
      <div className="flex items-center justify-between gap-4 py-5 lg:pl-10">
        <dt className="text-[1.375rem] leading-tight font-medium text-ref-ink sm:text-[1.75rem]">Exames</dt>
        <dd className="text-right">
          <span className="block text-[15px] text-ref-muted sm:text-base">a partir de</span>
          <span className="block text-[2.5rem] leading-none font-extrabold tracking-[-0.03em] text-ref-blue sm:text-[3.25rem]">R$&nbsp;8</span>
        </dd>
      </div>
    </dl>
  </section>
);

export default Hero;
