import React from 'react';
import WhatsAppIcon from '../../components/UI/WhatsAppIcon';
import { ESPECIALIDADES } from '../dados/especialidades';
import { LinkCards, PageHero, WhatsAppLink, usePageMeta } from './comum';

/** /especialidades — lista das especialidades (DESATIVADA: veja paginas-desativadas/config.ts) */
const Especialidades: React.FC = () => {
  usePageMeta(
    'Especialidades médicas na Tijuca | DaleSaúde',
    `Consultas particulares em ${ESPECIALIDADES.length} especialidades na Tijuca, com valores acessíveis e agendamento rápido pelo WhatsApp.`,
  );
  return (
    <main className="pt-[var(--header-h)] bg-sand-50">
      <PageHero
        crumbs={[
          { name: 'Início', to: '/' },
          { name: 'Especialidades', to: '/especialidades' },
        ]}
        title="Especialidades médicas na Tijuca"
        lead={`Consultas particulares em ${ESPECIALIDADES.length} especialidades, com valores acessíveis e agendamento rápido.`}
      />
      <section className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <LinkCards items={ESPECIALIDADES.map((e) => ({ to: `/especialidades/${e.slug}`, name: e.name, summary: e.summary }))} />
          <div className="mt-12 flex justify-center">
            <WhatsAppLink texto="Olá! Gostaria de agendar uma consulta na DaleSaúde." className="w-full sm:w-auto">
              Agende sua consulta pelo WhatsApp <WhatsAppIcon size={20} />
            </WhatsAppLink>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Especialidades;
