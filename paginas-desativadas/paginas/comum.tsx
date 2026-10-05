import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Plus } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../../constants';
import type { FAQ } from '../dados/tipos';

/** Link do WhatsApp com mensagem pronta (mesmo padrão dos botões da home) */
export const whatsappCom = (texto: string) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`;

/** Title e meta description da página (volta ao padrão do site ao sair) */
export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const prevTitle = document.title;
    const prevDesc = meta?.content ?? '';
    document.title = title;
    if (meta) meta.content = description;
    window.scrollTo(0, 0);
    return () => {
      document.title = prevTitle;
      if (meta) meta.content = prevDesc;
    };
  }, [title, description]);
}

export type Crumb = { name: string; to: string };

/** Topo das páginas internas, no mesmo estilo da página Sobre Nós */
export const PageHero: React.FC<{ crumbs: Crumb[]; title: string; lead: string; children?: React.ReactNode }> = ({ crumbs, title, lead, children }) => (
  <section className="bg-dale-blue text-white py-12 md:py-20 relative overflow-hidden">
    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
    <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-5xl">
      <nav aria-label="Você está em" className="mb-6">
        <ol className="flex flex-wrap items-center gap-1 text-sm text-white/70">
          {crumbs.map((c, i) => (
            <li key={c.to} className="flex items-center gap-1">
              {i > 0 && <ChevronRight size={14} className="opacity-60" />}
              {i === crumbs.length - 1 ? (
                <span aria-current="page" className="text-white">{c.name}</span>
              ) : (
                <Link to={c.to} className="hover:text-white">{c.name}</Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-5 leading-tight">{title}</h1>
      <p className="text-base md:text-lg text-white/80 max-w-3xl leading-relaxed">{lead}</p>
      {children}
    </div>
  </section>
);

/** Perguntas frequentes (abre e fecha sem JavaScript) */
export const FaqList: React.FC<{ items: FAQ[] }> = ({ items }) => (
  <div className="divide-y divide-sand-200 rounded-2xl bg-white border border-sand-200">
    {items.map((f) => (
      <details key={f.q} className="group px-5 py-4">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-dale-blue [&::-webkit-details-marker]:hidden">
          {f.q}
          <Plus size={18} className="shrink-0 text-dale-green transition-transform group-open:rotate-45" />
        </summary>
        <p className="mt-3 text-gray-600 leading-relaxed">{f.a}</p>
      </details>
    ))}
  </div>
);

/** Aviso de emergência (a clínica não é pronto atendimento) */
export const UrgentNote: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="my-6 rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-[15px] text-red-900">{children}</p>
);

export const ReviewedNote: React.FC<{ updatedAt: string }> = ({ updatedAt }) => {
  const [y, m, d] = updatedAt.split('-');
  return (
    <p className="mt-10 text-sm text-gray-500">
      Conteúdo informativo, não substitui a avaliação médica. Atualizado em {d}/{m}/{y}.
    </p>
  );
};

/** Cards de links no estilo dos cards da home */
export const LinkCards: React.FC<{ items: { to: string; name: string; summary?: string }[] }> = ({ items }) => (
  <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 md:gap-4">
    {items.map((i) => (
      <li key={i.to}>
        <Link
          to={i.to}
          className="group flex h-full items-center justify-between gap-3 rounded-2xl bg-[#eef5ee] p-4 md:p-5 text-dale-blue transition-all duration-300 hover:bg-dale-green hover:text-white hover:shadow-lg"
        >
          <span>
            <span className="block font-semibold text-base md:text-lg">{i.name}</span>
            {i.summary && <span className="mt-1 block text-sm opacity-75">{i.summary}</span>}
          </span>
          <ChevronRight size={18} className="shrink-0 text-dale-green group-hover:text-white" />
        </Link>
      </li>
    ))}
  </ul>
);

/** Botão de WhatsApp no estilo do botão principal do site (GradientButton "primary"), como link */
export const WhatsAppLink: React.FC<{ texto: string; children: React.ReactNode; className?: string }> = ({ texto, children, className = '' }) => (
  <a
    href={whatsappCom(texto)}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-dale-green to-dale-blue px-8 py-4 font-bold tracking-wide text-white shadow-lg shadow-dale-green/30 transition-transform duration-300 hover:scale-105 ${className}`}
  >
    {children}
  </a>
);
