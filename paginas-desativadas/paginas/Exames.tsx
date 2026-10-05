import React from 'react';
import WhatsAppIcon from '../../components/UI/WhatsAppIcon';
import { CATEGORIAS_EXAMES, examesDaCategoria } from '../dados/exames';
import { LinkCards, PageHero, WhatsAppLink, usePageMeta } from './comum';

/** /exames — categorias e exames (DESATIVADA: veja paginas-desativadas/config.ts) */
const Exames: React.FC = () => {
  usePageMeta(
    'Exames na Tijuca: ultrassom, eco e ECG | DaleSaúde',
    'Ultrassonografias e exames cardiológicos na Tijuca, no mesmo endereço das consultas, com preço acessível e agendamento pelo WhatsApp.',
  );
  return (
    <main className="pt-[var(--header-h)] bg-sand-50">
      <PageHero
        crumbs={[
          { name: 'Início', to: '/' },
          { name: 'Exames', to: '/exames' },
        ]}
        title="Exames na Tijuca"
        lead="Ultrassonografias e exames cardiológicos no mesmo endereço das consultas, com preço acessível."
      />
      {CATEGORIAS_EXAMES.map((c, i) => (
        <section key={c.slug} className={`py-14 md:py-20 ${i % 2 ? 'bg-sand-50' : 'bg-white'}`}>
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <h2 className="text-3xl md:text-4xl font-serif text-dale-blue mb-3">{c.name}</h2>
            <p className="text-gray-600 max-w-3xl mb-8">{c.intro}</p>
            <LinkCards
              items={[
                ...examesDaCategoria(c.slug).map((e) => ({ to: `/exames/${e.slug}`, name: e.name, summary: e.summary })),
                { to: `/exames/${c.slug}`, name: `Ver tudo sobre ${c.name.toLowerCase()}` },
              ]}
            />
          </div>
        </section>
      ))}
      <section className="pb-16 bg-sand-50">
        <div className="container mx-auto px-4 md:px-8 flex justify-center">
          <WhatsAppLink texto="Olá! Gostaria de agendar um exame na DaleSaúde." className="w-full sm:w-auto">
            Agende seu exame pelo WhatsApp <WhatsAppIcon size={20} />
          </WhatsAppLink>
        </div>
      </section>
    </main>
  );
};

export default Exames;
