import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import WhatsAppIcon from '../../components/UI/WhatsAppIcon';
import { ADDRESS } from '../../constants';
import { getEspecialidade } from '../dados/especialidades';
import { examesDaCategoria, getCategoria, getExame } from '../dados/exames';
import { FaqList, LinkCards, PageHero, ReviewedNote, UrgentNote, WhatsAppLink, usePageMeta } from './comum';

/**
 * /exames/{slug} — uma rota para dois tipos de página (DESATIVADA: veja paginas-desativadas/config.ts):
 *  - categoria (ex.: /exames/ultrassonografia)
 *  - exame (ex.: /exames/ecocardiograma)
 */
const Exame: React.FC = () => {
  const { slug = '' } = useParams();
  const cat = getCategoria(slug);
  const exam = cat ? undefined : getExame(slug);
  usePageMeta(cat?.title ?? exam?.title ?? 'DaleSaúde', cat?.description ?? exam?.description ?? '');

  if (cat) {
    const exames = examesDaCategoria(cat.slug);
    return (
      <main className="pt-[var(--header-h)] bg-sand-50">
        <PageHero
          crumbs={[
            { name: 'Início', to: '/' },
            { name: 'Exames', to: '/exames' },
            { name: cat.name, to: `/exames/${cat.slug}` },
          ]}
          title={cat.h1}
          lead={cat.intro}
        >
          <div className="mt-8">
            <WhatsAppLink texto="Olá! Gostaria de agendar um exame na DaleSaúde.">
              Agendar pelo WhatsApp <WhatsAppIcon size={20} />
            </WhatsAppLink>
          </div>
        </PageHero>
        <section className="py-14 md:py-20 bg-white">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <h2 className="text-3xl md:text-4xl font-serif text-dale-blue mb-8">{cat.name} na DaleSaúde</h2>
            <LinkCards items={exames.map((e) => ({ to: `/exames/${e.slug}`, name: e.name, summary: e.summary }))} />
          </div>
        </section>
        <section className="py-14 md:py-20 bg-sand-50">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-serif text-dale-blue mb-3">Preparo e duração de cada exame</h2>
            <p className="text-gray-600 mb-6">Resumo das orientações gerais. O preparo pode variar conforme o pedido médico; confirme no agendamento.</p>
            <div className="overflow-x-auto rounded-2xl bg-white border border-sand-200">
              <table className="w-full min-w-[640px] text-left text-[15px]">
                <thead className="bg-[#eef5ee] text-dale-blue">
                  <tr>
                    <th scope="col" className="px-5 py-3.5 font-bold">Exame</th>
                    <th scope="col" className="px-5 py-3.5 font-bold">Preparo</th>
                    <th scope="col" className="px-5 py-3.5 font-bold">Duração média</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-sand-200 text-gray-700">
                  {exames.map((e) => (
                    <tr key={e.slug}>
                      <th scope="row" className="px-5 py-4 font-semibold">
                        <Link to={`/exames/${e.slug}`} className="text-dale-green hover:underline">{e.name}</Link>
                      </th>
                      <td className="px-5 py-4">{e.preparation[0] ?? ''}</td>
                      <td className="px-5 py-4">{e.duration ?? ''}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <h2 className="mt-14 text-3xl md:text-4xl font-serif text-dale-blue mb-6">Perguntas frequentes</h2>
            <FaqList items={cat.faqs} />
          </div>
        </section>
      </main>
    );
  }

  if (!exam) return <Navigate to="/exames" replace />;

  const categoria = getCategoria(exam.category)!;
  const mensagem = `Olá! Gostaria de agendar um exame de ${exam.whatsappLabel} na DaleSaúde.`;
  const especialidades = exam.relatedSpecialties.flatMap((s) => {
    const e = getEspecialidade(s);
    return e ? [e] : [];
  });
  const outros = exam.relatedExams.flatMap((s) => {
    const e = getExame(s);
    return e ? [e] : [];
  });

  return (
    <main className="pt-[var(--header-h)] bg-sand-50">
      <PageHero
        crumbs={[
          { name: 'Início', to: '/' },
          { name: 'Exames', to: '/exames' },
          { name: categoria.name, to: `/exames/${categoria.slug}` },
          { name: exam.name, to: `/exames/${exam.slug}` },
        ]}
        title={exam.h1}
        lead={exam.whatIs}
      >
        <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:items-center">
          <WhatsAppLink texto={mensagem}>
            Agendar pelo WhatsApp <WhatsAppIcon size={20} />
          </WhatsAppLink>
          <p className="text-sm text-white/70">
            {exam.duration ? `${exam.duration} · ` : ''}
            {ADDRESS}
          </p>
        </div>
      </PageHero>

      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl grid gap-12 lg:grid-cols-[minmax(0,1fr)_300px]">
          <article className="max-w-3xl text-gray-700 leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-serif text-dale-blue mb-4">
              Para que serve {exam.article} {exam.inSentence}
            </h2>
            <ul className="list-disc space-y-2 pl-5">
              {exam.indications.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>

            <h2 className="mt-10 text-2xl md:text-3xl font-serif text-dale-blue mb-4">Como se preparar</h2>
            <ul className="list-disc space-y-2 pl-5">
              {exam.preparation.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <p className="mt-3 text-[15px] text-gray-500">
              O preparo pode variar conforme o pedido médico. Na dúvida, confirme pelo WhatsApp antes do exame.
            </p>
            {exam.urgentNote && <UrgentNote>{exam.urgentNote}</UrgentNote>}

            {especialidades.length > 0 && (
              <>
                <h2 className="mt-10 text-2xl md:text-3xl font-serif text-dale-blue mb-4">Especialidades relacionadas</h2>
                <ul className="flex flex-wrap gap-2">
                  {especialidades.map((s) => (
                    <li key={s.slug}>
                      <Link to={`/especialidades/${s.slug}`} className="inline-block rounded-full bg-[#eef5ee] px-4 py-2 font-semibold text-dale-blue hover:bg-dale-green hover:text-white">
                        {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}

            <h2 className="mt-10 text-2xl md:text-3xl font-serif text-dale-blue mb-4">Perguntas frequentes</h2>
            <FaqList items={exam.faqs} />
            <ReviewedNote updatedAt={exam.updatedAt} />
          </article>

          <aside aria-label="Outros exames" className="lg:sticky lg:top-[calc(var(--header-h)+1.5rem)] lg:self-start">
            <p className="text-sm font-bold uppercase tracking-wider text-gray-500">Outros exames</p>
            <div className="mt-3">
              <LinkCards
                items={[
                  ...outros.map((o) => ({ to: `/exames/${o.slug}`, name: o.name })),
                  { to: `/exames/${categoria.slug}`, name: `Todos: ${categoria.name.toLowerCase()}` },
                ]}
              />
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default Exame;
