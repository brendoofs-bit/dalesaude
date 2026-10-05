import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Check, ChevronRight } from 'lucide-react';
import WhatsAppIcon from '../../components/UI/WhatsAppIcon';
import { ADDRESS } from '../../constants';
import { getEspecialidade } from '../dados/especialidades';
import { getExame } from '../dados/exames';
import { FaqList, PageHero, ReviewedNote, UrgentNote, WhatsAppLink, usePageMeta } from './comum';

/** /especialidades/{slug} (DESATIVADA: veja paginas-desativadas/config.ts) */
const Especialidade: React.FC = () => {
  const { slug = '' } = useParams();
  const esp = getEspecialidade(slug);
  usePageMeta(esp?.title ?? 'DaleSaúde', esp?.description ?? '');
  if (!esp) return <Navigate to="/especialidades" replace />;

  const pro = esp.professional;
  const atendimento = esp.nonMedical ? 'o atendimento' : 'a consulta';
  const mensagem = `Olá! Gostaria de agendar uma consulta de ${esp.name} na DaleSaúde.`;
  const exames = esp.relatedExams.flatMap((s) => {
    const e = getExame(s);
    return e ? [e] : [];
  });
  const relacionadas = esp.relatedSpecialties.flatMap((s) => {
    const r = getEspecialidade(s);
    return r ? [r] : [];
  });

  return (
    <main className="pt-[var(--header-h)] bg-sand-50">
      <PageHero
        crumbs={[
          { name: 'Início', to: '/' },
          { name: 'Especialidades', to: '/especialidades' },
          { name: esp.name, to: `/especialidades/${esp.slug}` },
        ]}
        title={esp.h1}
        lead={esp.intro}
      >
        <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:items-center">
          <WhatsAppLink texto={mensagem}>
            Agendar pelo WhatsApp <WhatsAppIcon size={20} />
          </WhatsAppLink>
          <p className="text-sm text-white/70">
            {esp.priceFrom ? `A partir de R$ ${esp.priceFrom} (particular) · ` : ''}
            {ADDRESS}
          </p>
        </div>
      </PageHero>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl grid gap-12 lg:grid-cols-[minmax(0,1fr)_300px]">
          <article className="max-w-3xl text-gray-700 leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-serif text-dale-blue mb-4">O que o {pro} trata</h2>
            <ul className="space-y-2">
              {esp.treats.map((t) => (
                <li key={t} className="flex gap-2.5">
                  <Check size={18} strokeWidth={3} className="mt-1 shrink-0 text-dale-green" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-10 text-2xl md:text-3xl font-serif text-dale-blue mb-4">Quando procurar um {pro}</h2>
            <ul className="list-disc space-y-2 pl-5">
              {esp.whenToSeek.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            {esp.urgentNote && <UrgentNote>{esp.urgentNote}</UrgentNote>}

            <h2 className="mt-10 text-2xl md:text-3xl font-serif text-dale-blue mb-4">Como funciona {atendimento} na DaleSaúde</h2>
            <ol className="list-decimal space-y-2 pl-5">
              <li>
                <strong>Agende</strong> pelo WhatsApp, pelo agendamento online ou por telefone.
              </li>
              <li>
                <strong>Traga</strong> documento com foto, exames anteriores e a lista dos remédios que você usa.
              </li>
              <li>
                <strong>Depois {atendimento}</strong>, se houver pedido de exames, muitos podem ser feitos no mesmo endereço.
              </li>
            </ol>

            {exames.length > 0 && (
              <>
                <h2 className="mt-10 text-2xl md:text-3xl font-serif text-dale-blue mb-4">Exames relacionados na DaleSaúde</h2>
                <ul className="space-y-2">
                  {exames.map((e) => (
                    <li key={e.slug}>
                      <Link to={`/exames/${e.slug}`} className="font-semibold text-dale-green hover:underline">
                        {e.name}
                      </Link>
                      <span className="text-gray-500"> – {e.summary}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}

            <h2 className="mt-10 text-2xl md:text-3xl font-serif text-dale-blue mb-4">Perguntas frequentes</h2>
            <FaqList items={esp.faqs} />
            <ReviewedNote updatedAt={esp.updatedAt} />
          </article>

          <aside aria-label="Outras especialidades" className="lg:sticky lg:top-[calc(var(--header-h)+1.5rem)] lg:self-start">
            <p className="text-sm font-bold uppercase tracking-wider text-gray-500">Veja também</p>
            <ul className="mt-3 divide-y divide-sand-200 overflow-hidden rounded-2xl border border-sand-200">
              {relacionadas.map((r) => (
                <li key={r.slug}>
                  <Link to={`/especialidades/${r.slug}`} className="flex items-center justify-between bg-white px-4 py-3.5 font-semibold text-dale-blue hover:bg-[#eef5ee]">
                    {r.name}
                    <ChevronRight size={16} className="text-gray-400" />
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/especialidades" className="flex items-center justify-between bg-white px-4 py-3.5 font-semibold text-dale-green hover:bg-[#eef5ee]">
                  Todas as especialidades
                  <ChevronRight size={16} />
                </Link>
              </li>
            </ul>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default Especialidade;
