import type { Exam, ExamCategory, ExamCategorySlug } from "./tipos";

/**
 * Exames realizados na DaleSaúde.
 * Categorias geram /exames/{categoria}; exames geram /exames/{slug}
 * (DESATIVADAS por enquanto: veja paginas-desativadas/config.ts).
 *
 * ATENÇÃO: preparos e durações são orientações gerais. Confirme o protocolo
 * da clínica com o responsável técnico antes de publicar e sempre que mudar.
 *
 * PENDENTE: o hero aprovado diz "Exames a partir de R$ 8". Os exames
 * abaixo não incluem os laboratoriais; se a clínica faz coleta, crie a
 * categoria "exames-laboratoriais" seguindo o mesmo formato.
 */
export const CATEGORIAS_EXAMES: ExamCategory[] = [
  {
    slug: "ultrassonografia",
    name: "Ultrassonografias",
    h1: "Ultrassonografia na Tijuca",
    title: "Ultrassom na Tijuca | Ultrassonografia | DaleSaúde",
    description:
      "Ultrassonografia na Tijuca: obstétrica, morfológica, transvaginal, abdome total, mamas e próstata. Preço acessível e agendamento pelo WhatsApp.",
    intro:
      "A ultrassonografia usa ondas de som para formar imagens dos órgãos, sem radiação e sem dor. Na DaleSaúde, na Tijuca, você faz os principais tipos de ultrassom em um só lugar, com agendamento rápido pelo WhatsApp.",
    faqs: [
      {
        q: "Ultrassonografia tem radiação?",
        a: "Não. O ultrassom usa ondas sonoras, não usa radiação e é seguro inclusive na gestação.",
      },
      {
        q: "Todo ultrassom precisa de preparo?",
        a: "Não. Alguns, como o de abdome total e o de próstata, pedem jejum ou bexiga cheia. Outros, como o de mamas e o obstétrico, geralmente não têm preparo. Cada página de exame traz as orientações.",
      },
      {
        q: "Preciso de pedido médico para fazer ultrassom?",
        a: "Recomendamos trazer o pedido do seu médico. Se tiver dúvida, fale com a equipe pelo WhatsApp antes de agendar.",
      },
    ],
    updatedAt: "2026-10-04",
  },
  {
    slug: "exames-cardiologicos",
    name: "Exames cardiológicos e vasculares",
    h1: "Exames cardiológicos e vasculares na Tijuca",
    title: "Exames do coração na Tijuca: eco, ECG, Holter | DaleSaúde",
    description:
      "Ecocardiograma, eletrocardiograma, Holter 24h, MAPA 24h e Doppler vascular na Tijuca. Exames do coração com preço acessível e agendamento rápido.",
    intro:
      "Os exames cardiológicos avaliam o funcionamento do coração e a circulação do sangue. Na DaleSaúde, eles são feitos no mesmo endereço das consultas, o que facilita para quem precisa de avaliação completa.",
    faqs: [
      {
        q: "Qual a diferença entre eletrocardiograma e ecocardiograma?",
        a: "O eletrocardiograma registra a atividade elétrica do coração em poucos minutos. O ecocardiograma é um ultrassom que mostra a estrutura do coração, as válvulas e a força de contração.",
      },
      {
        q: "Holter e MAPA são a mesma coisa?",
        a: "Não. Os dois ficam 24 horas com você, mas o Holter grava os batimentos do coração e a MAPA mede a pressão arterial várias vezes ao longo do dia e da noite.",
      },
    ],
    updatedAt: "2026-10-04",
  },
];

export const EXAMES: Exam[] = [
  // ====================== ULTRASSONOGRAFIAS ======================
  {
    slug: "ultrassonografia-obstetrica",
    name: "Ultrassonografia obstétrica",
    shortName: "Obstétrica",
    article: "a",
    inSentence: "ultrassonografia obstétrica",
    category: "ultrassonografia",
    h1: "Ultrassonografia obstétrica na Tijuca",
    title: "Ultrassonografia obstétrica na Tijuca | DaleSaúde",
    description:
      "Ultrassom obstétrico na Tijuca para acompanhar o crescimento do bebê, a idade gestacional e o líquido amniótico. Agende pelo WhatsApp.",
    summary: "Acompanha o crescimento e o bem-estar do bebê.",
    whatIs:
      "A ultrassonografia obstétrica acompanha o bebê durante a gestação. O exame mostra a idade gestacional, os batimentos do coração, o crescimento, a posição do bebê, a placenta e a quantidade de líquido amniótico.",
    indications: [
      "Confirmar e datar a gravidez",
      "Acompanhar o crescimento do bebê",
      "Avaliar a placenta e o líquido amniótico",
      "Ver a posição do bebê no fim da gestação",
    ],
    preparation: [
      "Em geral, não precisa de preparo.",
      "No início da gestação, o exame pode ser feito por via transvaginal ou com a bexiga cheia; você recebe a orientação no agendamento.",
      "Leve o cartão da gestante e os ultrassons anteriores.",
    ],
    duration: "Em média, de 20 a 30 minutos.",
    relatedSpecialties: ["obstetricia", "ginecologia"],
    relatedExams: ["ultrassonografia-morfologica", "ultrassonografia-obstetrica-com-doppler", "ultrassonografia-transvaginal"],
    faqs: [
      {
        q: "A partir de quando o ultrassom mostra o sexo do bebê?",
        a: "Em geral, a partir do 4º mês (cerca de 16 semanas), dependendo da posição do bebê. A confirmação é mais segura na morfológica do 2º trimestre.",
      },
      {
        q: "Posso levar acompanhante?",
        a: "Em geral, sim. Confirme no agendamento.",
      },
    ],
    schemaType: "ImagingTest",
    whatsappLabel: "Ultrassonografia obstétrica",
    updatedAt: "2026-10-04",
  },
  {
    slug: "ultrassonografia-morfologica",
    name: "Ultrassonografia morfológica",
    shortName: "Morfológica",
    article: "a",
    inSentence: "ultrassonografia morfológica",
    category: "ultrassonografia",
    h1: "Ultrassonografia morfológica na Tijuca",
    title: "Ultrassom morfológico na Tijuca | DaleSaúde",
    description:
      "Ultrassonografia morfológica na Tijuca: exame detalhado da formação do bebê, feito na janela de semanas certa. Agende pelo WhatsApp 24h.",
    summary: "Avalia em detalhe a formação dos órgãos do bebê.",
    whatIs:
      "A morfológica é um ultrassom detalhado que avalia a formação do bebê: cérebro, coração, coluna, rins, membros e face. É um dos exames mais importantes do pré-natal e precisa ser feito na janela de semanas certa.",
    indications: [
      "Morfológica do 1º trimestre: entre 11 e 14 semanas, com medida da translucência nucal",
      "Morfológica do 2º trimestre: entre 20 e 24 semanas, para avaliar a anatomia do bebê",
    ],
    preparation: [
      "Não precisa de preparo.",
      "Agende dentro da janela de semanas indicada pelo obstetra; fora dela, o exame perde precisão.",
      "Leve o cartão da gestante e os ultrassons anteriores.",
    ],
    duration: "É mais longo que o obstétrico comum; reserve cerca de 1 hora.",
    relatedSpecialties: ["obstetricia"],
    relatedExams: ["ultrassonografia-obstetrica", "ultrassonografia-obstetrica-com-doppler"],
    faqs: [
      {
        q: "Qual a diferença entre a morfológica e a obstétrica comum?",
        a: "A obstétrica acompanha o crescimento e o bem-estar do bebê. A morfológica é mais longa e detalhada e avalia a formação de cada órgão.",
      },
      {
        q: "A morfológica mostra o sexo do bebê?",
        a: "Na morfológica do 2º trimestre, geralmente sim, se a posição do bebê permitir. Avise antes do exame se não quiser saber.",
      },
    ],
    schemaType: "ImagingTest",
    whatsappLabel: "Ultrassonografia morfológica",
    updatedAt: "2026-10-04",
  },
  {
    slug: "ultrassonografia-obstetrica-com-doppler",
    name: "Ultrassonografia obstétrica com Doppler",
    shortName: "Obstétrica com Doppler",
    article: "a",
    inSentence: "ultrassonografia obstétrica com Doppler",
    category: "ultrassonografia",
    h1: "Ultrassonografia obstétrica com Doppler na Tijuca",
    title: "Ultrassom obstétrico com Doppler na Tijuca | DaleSaúde",
    description:
      "Ultrassonografia obstétrica com Doppler na Tijuca para avaliar a circulação entre a mãe e o bebê. Sem preparo. Agende pelo WhatsApp.",
    summary: "Avalia o fluxo de sangue entre a placenta e o bebê.",
    whatIs:
      "Além do que a ultrassonografia obstétrica avalia, o Doppler mede o fluxo de sangue no cordão umbilical, na placenta e em vasos do bebê. Isso mostra se o bebê está recebendo oxigênio e nutrientes de forma adequada.",
    indications: [
      "Pressão alta ou pré-eclâmpsia na gestação",
      "Diabetes gestacional",
      "Suspeita de restrição de crescimento do bebê",
      "Gestação de gêmeos ou outras situações indicadas pelo obstetra",
    ],
    preparation: ["Não precisa de preparo.", "Leve o pedido médico, o cartão da gestante e os exames anteriores."],
    duration: "Em média, de 30 a 40 minutos.",
    relatedSpecialties: ["obstetricia"],
    relatedExams: ["ultrassonografia-obstetrica", "ultrassonografia-morfologica"],
    faqs: [
      {
        q: "Quando o Doppler obstétrico é indicado?",
        a: "Geralmente a partir do 2º trimestre, quando o obstetra quer avaliar a circulação entre a mãe e o bebê.",
      },
      {
        q: "O exame é seguro para o bebê?",
        a: "Sim. O ultrassom não usa radiação e é considerado seguro na gestação.",
      },
    ],
    schemaType: "ImagingTest",
    whatsappLabel: "Ultrassonografia obstétrica com Doppler",
    updatedAt: "2026-10-04",
  },
  {
    slug: "ultrassonografia-transvaginal",
    name: "Ultrassonografia transvaginal",
    shortName: "Transvaginal",
    article: "a",
    inSentence: "ultrassonografia transvaginal",
    category: "ultrassonografia",
    h1: "Ultrassonografia transvaginal na Tijuca",
    title: "Ultrassom transvaginal na Tijuca | DaleSaúde",
    description:
      "Ultrassonografia transvaginal na Tijuca para avaliar útero, endométrio e ovários: miomas, cistos e dor pélvica. Agende pelo WhatsApp.",
    summary: "Avalia com detalhe útero, endométrio e ovários.",
    whatIs:
      "É um ultrassom feito com um transdutor fino introduzido no canal vaginal, que permite ver com detalhe o útero, o endométrio e os ovários. É rápido e costuma causar pouco ou nenhum desconforto.",
    indications: [
      "Investigar dor pélvica e sangramento fora do período",
      "Avaliar miomas, cistos e pólipos",
      "Acompanhar ovários policísticos e endometriose",
      "Avaliar o início da gestação",
      "Rotina ginecológica, conforme indicação médica",
    ],
    preparation: [
      "Esvazie a bexiga antes do exame.",
      "Pode ser feito durante a menstruação, mas, para alguns objetivos, o médico prefere outra fase do ciclo; siga o pedido.",
      "Não é indicado para quem nunca teve relação sexual. Nesse caso, o médico pode pedir o ultrassom pélvico por via abdominal.",
    ],
    duration: "Em média, de 15 a 20 minutos.",
    relatedSpecialties: ["ginecologia", "obstetricia"],
    relatedExams: ["ultrassonografia-de-mamas", "ultrassonografia-obstetrica"],
    faqs: [
      {
        q: "O ultrassom transvaginal dói?",
        a: "Em geral, não. Pode haver um leve desconforto. O transdutor é protegido com capa descartável e gel.",
      },
      {
        q: "Posso fazer o exame menstruada?",
        a: "Pode, mas para alguns objetivos o médico prefere outra fase do ciclo. Siga a orientação do seu pedido e confirme no agendamento.",
      },
    ],
    schemaType: "ImagingTest",
    whatsappLabel: "Ultrassonografia transvaginal",
    updatedAt: "2026-10-04",
  },
  {
    slug: "ultrassonografia-abdome-total",
    name: "Ultrassonografia de abdome total",
    shortName: "Abdome total",
    article: "a",
    inSentence: "ultrassonografia de abdome total",
    category: "ultrassonografia",
    h1: "Ultrassonografia de abdome total na Tijuca",
    title: "Ultrassom de abdome total na Tijuca | Preparo | DaleSaúde",
    description:
      "Ultrassonografia de abdome total na Tijuca: fígado, vesícula, pâncreas, baço, rins e bexiga. Veja o preparo e agende pelo WhatsApp.",
    summary: "Fígado, vesícula, pâncreas, baço, rins e bexiga.",
    whatIs:
      "O ultrassom de abdome total avalia os órgãos da barriga: fígado, vesícula e vias biliares, pâncreas, baço, rins, bexiga e grandes vasos. É um dos exames de imagem mais pedidos para investigar dor abdominal.",
    indications: [
      "Dor abdominal",
      "Investigar gordura no fígado e pedra na vesícula",
      "Avaliar rins e cálculos",
      "Check-up, quando indicado pelo médico",
    ],
    preparation: [
      "Jejum de 8 horas (pode beber água).",
      "Na véspera, prefira refeições leves e evite alimentos que causam gases, como feijão, refrigerante e leite.",
      "Cerca de 1 hora antes, beba de 4 a 6 copos de água e não urine até o exame (bexiga cheia).",
      "Siga sempre a orientação passada no agendamento.",
    ],
    duration: "Em média, de 20 a 30 minutos.",
    relatedSpecialties: ["gastroenterologia", "clinico-geral", "urologia"],
    relatedExams: ["ultrassonografia-de-prostata"],
    faqs: [
      {
        q: "Posso tomar meus remédios no dia do exame?",
        a: "Remédios de uso contínuo podem ser tomados com pouca água, salvo orientação contrária do seu médico.",
      },
      {
        q: "Qual a diferença entre abdome total e abdome superior?",
        a: "O abdome superior avalia fígado, vesícula, pâncreas e baço. O total inclui também os rins, a bexiga e a parte inferior da barriga.",
      },
    ],
    schemaType: "ImagingTest",
    whatsappLabel: "Ultrassonografia de abdome total",
    updatedAt: "2026-10-04",
  },
  {
    slug: "ultrassonografia-de-mamas",
    name: "Ultrassonografia de mamas",
    shortName: "Mamas",
    article: "a",
    inSentence: "ultrassonografia de mamas",
    category: "ultrassonografia",
    h1: "Ultrassonografia de mamas na Tijuca",
    title: "Ultrassom de mamas na Tijuca | Preço acessível | DaleSaúde",
    description:
      "Ultrassonografia de mamas na Tijuca para avaliar nódulos e cistos e complementar a mamografia. Sem preparo e sem radiação. Agende pelo WhatsApp.",
    summary: "Avalia nódulos e cistos e complementa a mamografia.",
    whatIs:
      "É um exame que avalia as mamas e as axilas com ondas de ultrassom, sem radiação. Ajuda a diferenciar nódulos sólidos de cistos e complementa a mamografia.",
    indications: [
      "Complementar a mamografia, principalmente em mamas densas",
      "Avaliar nódulos percebidos no autoexame ou na consulta",
      "Acompanhar cistos e nódulos benignos",
      "Avaliar mulheres jovens e gestantes, quando indicado",
    ],
    preparation: [
      "Não precisa de preparo.",
      "Leve mamografias e ultrassons anteriores para comparação.",
      "Prefira roupa de duas peças.",
    ],
    duration: "Em média, de 15 a 20 minutos.",
    relatedSpecialties: ["ginecologia"],
    relatedExams: ["ultrassonografia-transvaginal"],
    faqs: [
      {
        q: "O ultrassom de mamas substitui a mamografia?",
        a: "Não. São exames complementares. A mamografia continua sendo o principal exame de rastreamento do câncer de mama, na idade indicada pelo médico.",
      },
      {
        q: "O exame dói?",
        a: "Não. Ele é feito com gel e um transdutor que desliza sobre a pele.",
      },
    ],
    schemaType: "ImagingTest",
    whatsappLabel: "Ultrassonografia de mamas",
    updatedAt: "2026-10-04",
  },
  {
    slug: "ultrassonografia-de-prostata",
    name: "Ultrassonografia de próstata",
    shortName: "Próstata",
    article: "a",
    inSentence: "ultrassonografia de próstata",
    category: "ultrassonografia",
    h1: "Ultrassonografia de próstata na Tijuca",
    title: "Ultrassom de próstata na Tijuca | Preparo | DaleSaúde",
    description:
      "Ultrassonografia de próstata na Tijuca para avaliar tamanho da próstata, bexiga e resíduo de urina. Veja o preparo e agende pelo WhatsApp.",
    summary: "Avalia o tamanho da próstata e o esvaziamento da bexiga.",
    whatIs:
      "O exame avalia o tamanho e o aspecto da próstata e da bexiga e mede quanto de urina fica na bexiga depois de urinar (resíduo pós-miccional). Na forma mais comum, o transdutor desliza sobre a parte baixa da barriga; confirme no agendamento a via do seu exame.",
    indications: [
      "Aumento da próstata (hiperplasia benigna)",
      "Jato urinário fraco ou vontade frequente de urinar",
      "Acompanhamento solicitado pelo urologista",
    ],
    preparation: [
      "Cerca de 1 hora antes, beba de 4 a 6 copos de água e não urine até o exame (bexiga cheia).",
      "Siga a orientação passada no agendamento.",
    ],
    duration: "Em média, de 15 a 20 minutos.",
    relatedSpecialties: ["urologia"],
    relatedExams: ["ultrassonografia-abdome-total"],
    faqs: [
      {
        q: "O ultrassom de próstata substitui o PSA?",
        a: "Não. O urologista avalia o conjunto: consulta, exame físico, PSA no sangue e exames de imagem.",
      },
      {
        q: "Por que preciso estar com a bexiga cheia?",
        a: "A bexiga cheia funciona como uma janela para o ultrassom e permite medir o resíduo de urina depois de urinar.",
      },
    ],
    schemaType: "ImagingTest",
    whatsappLabel: "Ultrassonografia de próstata",
    updatedAt: "2026-10-04",
  },

  // ============== EXAMES CARDIOLÓGICOS E VASCULARES ==============
  {
    slug: "ecocardiograma",
    name: "Ecocardiograma",
    shortName: "Ecocardiograma",
    article: "o",
    inSentence: "ecocardiograma",
    category: "exames-cardiologicos",
    h1: "Ecocardiograma na Tijuca",
    title: "Ecocardiograma na Tijuca | Preço acessível | DaleSaúde",
    description:
      "Ecocardiograma na Tijuca: ultrassom do coração para avaliar válvulas, cavidades e força de contração. Sem preparo. Agende pelo WhatsApp.",
    summary: "Ultrassom do coração: válvulas, cavidades e contração.",
    whatIs:
      "O ecocardiograma é um ultrassom do coração. Ele mostra o tamanho das cavidades, a força de contração e o funcionamento das válvulas. Em geral, inclui o Doppler colorido, que avalia o fluxo de sangue dentro do coração.",
    indications: [
      "Sopro no coração",
      "Falta de ar ou inchaço nas pernas",
      "Pressão alta, para avaliar o efeito no coração",
      "Avaliação antes de cirurgias ou de atividade física",
      "Acompanhamento de doenças das válvulas",
    ],
    preparation: [
      "Não precisa de jejum nem de outro preparo.",
      "Use roupa confortável; o exame é feito com gel sobre o peito.",
      "Leve o pedido médico e os exames anteriores.",
    ],
    duration: "Em média, de 20 a 40 minutos.",
    relatedSpecialties: ["cardiologia", "clinico-geral"],
    relatedExams: ["eletrocardiograma", "holter-24-horas", "mapa-24-horas"],
    faqs: [
      {
        q: "Ecocardiograma é o mesmo que eletrocardiograma?",
        a: "Não. O eletrocardiograma registra a atividade elétrica do coração; o ecocardiograma é um ultrassom que mostra a estrutura e o funcionamento.",
      },
      {
        q: "O ecocardiograma usa radiação?",
        a: "Não. É um exame de ultrassom, sem radiação e sem dor.",
      },
    ],
    schemaType: "ImagingTest",
    whatsappLabel: "Ecocardiograma",
    updatedAt: "2026-10-04",
  },
  {
    slug: "eletrocardiograma",
    name: "Eletrocardiograma (ECG)",
    shortName: "Eletrocardiograma (ECG)",
    article: "o",
    inSentence: "eletrocardiograma (ECG)",
    category: "exames-cardiologicos",
    h1: "Eletrocardiograma (ECG) na Tijuca",
    title: "Eletrocardiograma (ECG) na Tijuca | DaleSaúde",
    description:
      "Eletrocardiograma (ECG) na Tijuca: exame rápido e indolor da atividade elétrica do coração. Check-up, risco cirúrgico e arritmias.",
    summary: "Registra a atividade elétrica do coração em minutos.",
    whatIs:
      "O eletrocardiograma registra a atividade elétrica do coração por meio de eletrodos colados no peito, nos braços e nas pernas. É rápido, indolor e ajuda a identificar arritmias e sinais de sobrecarga ou de infarto antigo.",
    indications: [
      "Palpitações e arritmias",
      "Check-up e avaliação de risco cardiovascular",
      "Avaliação antes de cirurgias (risco cirúrgico)",
      "Liberação para atividade física",
      "Acompanhamento de pressão alta",
    ],
    preparation: ["Não precisa de jejum.", "Evite cremes e óleos no peito no dia do exame."],
    duration: "Cerca de 10 minutos.",
    urgentNote: "Dor no peito é emergência: nesse caso, vá direto a um pronto-socorro ou ligue 192 (SAMU).",
    relatedSpecialties: ["cardiologia", "clinico-geral", "geriatria"],
    relatedExams: ["ecocardiograma", "holter-24-horas"],
    faqs: [
      {
        q: "O eletrocardiograma detecta infarto?",
        a: "Pode mostrar sinais de um infarto atual ou antigo. Mas quem está com dor no peito deve ir direto ao pronto-socorro, não agendar exame.",
      },
      {
        q: "Quanto tempo leva o ECG?",
        a: "O registro em si leva poucos minutos. Contando o preparo, cerca de 10 minutos.",
      },
    ],
    schemaType: "MedicalTest",
    whatsappLabel: "Eletrocardiograma (ECG)",
    updatedAt: "2026-10-04",
  },
  {
    slug: "holter-24-horas",
    name: "Holter 24 horas",
    shortName: "Holter 24 horas",
    article: "o",
    inSentence: "Holter 24 horas",
    category: "exames-cardiologicos",
    h1: "Holter 24 horas na Tijuca",
    title: "Holter 24 horas na Tijuca | Exame do coração | DaleSaúde",
    description:
      "Holter 24 horas na Tijuca para investigar palpitações, arritmias e tonturas. Veja como se preparar e agende pelo WhatsApp.",
    summary: "Grava os batimentos do coração durante 24 horas.",
    whatIs:
      "O Holter é um pequeno gravador que você leva preso ao corpo por 24 horas. Ele registra todos os batimentos do coração durante a rotina, inclusive no sono, e ajuda a investigar arritmias que não aparecem no eletrocardiograma comum.",
    indications: [
      "Palpitações, batedeira ou falhas nos batimentos",
      "Tonturas ou desmaios sem causa definida",
      "Acompanhamento do tratamento de arritmias",
      "Avaliação do funcionamento do marca-passo",
    ],
    preparation: [
      "Tome banho antes de ir: você ficará 24 horas sem poder molhar o aparelho.",
      "Use roupa confortável, de preferência camisa de botão.",
      "Evite cremes no peito.",
      "Mantenha sua rotina e anote no diário os horários de sintomas e atividades.",
    ],
    duration: "A instalação leva cerca de 15 minutos. O aparelho fica 24 horas e é retirado no dia seguinte.",
    relatedSpecialties: ["cardiologia"],
    relatedExams: ["eletrocardiograma", "mapa-24-horas", "ecocardiograma"],
    faqs: [
      {
        q: "Posso trabalhar usando o Holter?",
        a: "Sim. A ideia é manter a rotina normal. Só não molhe o aparelho.",
      },
      {
        q: "Posso dormir de qualquer jeito com o aparelho?",
        a: "Pode. Só evite puxar os fios e os eletrodos.",
      },
    ],
    schemaType: "MedicalTest",
    whatsappLabel: "Holter 24 horas",
    updatedAt: "2026-10-04",
  },
  {
    slug: "mapa-24-horas",
    name: "MAPA 24 horas",
    shortName: "MAPA 24 horas",
    article: "a",
    inSentence: "MAPA 24 horas",
    category: "exames-cardiologicos",
    h1: "MAPA 24 horas na Tijuca",
    title: "MAPA 24 horas na Tijuca | Pressão arterial | DaleSaúde",
    description:
      "MAPA 24 horas na Tijuca: monitorização da pressão arterial ao longo do dia e da noite. Veja como se preparar e agende pelo WhatsApp.",
    summary: "Mede a pressão arterial várias vezes em 24 horas.",
    whatIs:
      "A MAPA (monitorização ambulatorial da pressão arterial) mede a sua pressão automaticamente várias vezes ao longo de 24 horas, com um manguito no braço ligado a um pequeno aparelho. Mostra como a pressão se comporta na rotina e durante o sono.",
    indications: [
      "Confirmar o diagnóstico de pressão alta",
      "Investigar a hipertensão do jaleco branco",
      "Avaliar se o tratamento está controlando a pressão",
      "Investigar pressão baixa e tonturas",
    ],
    preparation: [
      "Tome banho antes: o aparelho não pode ser molhado.",
      "Use blusa de manga larga ou sem manga.",
      "Mantenha os remédios conforme a orientação do seu médico.",
      "Durante as medições, deixe o braço parado e relaxado e anote suas atividades no diário.",
    ],
    duration: "A instalação é rápida e o aparelho fica 24 horas.",
    relatedSpecialties: ["cardiologia", "clinico-geral"],
    relatedExams: ["holter-24-horas", "ecocardiograma"],
    faqs: [
      {
        q: "O aparelho atrapalha o sono?",
        a: "Ele infla algumas vezes durante a noite, o que pode acordar, mas a maioria das pessoas se adapta bem.",
      },
      {
        q: "Devo tomar meus remédios de pressão no dia?",
        a: "Sim, a não ser que o seu médico tenha orientado o contrário.",
      },
    ],
    schemaType: "MedicalTest",
    whatsappLabel: "MAPA 24 horas",
    updatedAt: "2026-10-04",
  },
  {
    slug: "doppler-de-carotidas-e-vertebrais",
    name: "Doppler de carótidas e vertebrais",
    shortName: "Doppler de carótidas e vertebrais",
    article: "o",
    inSentence: "Doppler de carótidas e vertebrais",
    category: "exames-cardiologicos",
    h1: "Doppler de carótidas e vertebrais na Tijuca",
    title: "Doppler de carótidas na Tijuca | DaleSaúde",
    description:
      "Doppler de carótidas e vertebrais na Tijuca para avaliar placas e o fluxo de sangue para o cérebro. Sem preparo. Agende pelo WhatsApp.",
    summary: "Avalia as artérias do pescoço que levam sangue ao cérebro.",
    whatIs:
      "É um ultrassom com Doppler das artérias do pescoço que levam sangue ao cérebro. O exame mostra placas de gordura (aterosclerose), estreitamentos e alterações no fluxo de sangue.",
    indications: [
      "Prevenção de AVC em pessoas com fatores de risco",
      "Tonturas e alterações neurológicas, conforme indicação médica",
      "Sopro nas carótidas",
      "Colesterol alto, diabetes, tabagismo ou pressão alta",
    ],
    preparation: ["Não precisa de preparo.", "Evite colares e roupas de gola alta."],
    duration: "Em média, de 20 a 30 minutos.",
    relatedSpecialties: ["neurologia", "cardiologia", "geriatria"],
    relatedExams: ["doppler-arterial-e-venoso", "ecocardiograma"],
    faqs: [
      {
        q: "O Doppler de carótidas dói?",
        a: "Não. É feito com gel e um transdutor sobre o pescoço.",
      },
      {
        q: "Qual a relação do exame com o AVC?",
        a: "Placas nas carótidas aumentam o risco de AVC. O exame ajuda o médico a avaliar esse risco e a definir a prevenção.",
      },
    ],
    schemaType: "ImagingTest",
    whatsappLabel: "Doppler de carótidas e vertebrais",
    updatedAt: "2026-10-04",
  },
  {
    slug: "doppler-arterial-e-venoso",
    name: "Doppler arterial e venoso de membros",
    shortName: "Doppler arterial e venoso",
    article: "o",
    inSentence: "Doppler arterial e venoso",
    category: "exames-cardiologicos",
    h1: "Doppler arterial e venoso na Tijuca",
    title: "Doppler venoso e arterial na Tijuca | DaleSaúde",
    description:
      "Doppler arterial e venoso na Tijuca para avaliar varizes, trombose e circulação das pernas e dos braços. Sem preparo. Agende pelo WhatsApp.",
    summary: "Varizes, trombose e circulação de braços e pernas.",
    whatIs:
      "É um ultrassom com Doppler das artérias e das veias de braços ou pernas. O venoso avalia varizes, insuficiência venosa e trombose; o arterial avalia a circulação e estreitamentos das artérias.",
    indications: [
      "Varizes, sensação de peso e inchaço nas pernas",
      "Suspeita de trombose",
      "Dor na panturrilha ao caminhar",
      "Feridas que demoram a cicatrizar",
      "Avaliação antes do tratamento de varizes",
    ],
    preparation: ["Não precisa de preparo.", "Use roupas fáceis de tirar ou levantar."],
    duration: "Varia conforme o número de membros avaliados.",
    urgentNote:
      "Inchaço súbito com dor e vermelhidão em uma perna só pode ser trombose: procure atendimento de urgência.",
    relatedSpecialties: ["cardiologia", "clinico-geral"],
    relatedExams: ["doppler-de-carotidas-e-vertebrais"],
    faqs: [
      {
        q: "O exame avalia as duas pernas?",
        a: "Depende do pedido médico, que pode ser de um ou dos dois membros, só arterial, só venoso ou ambos.",
      },
      {
        q: "O Doppler venoso detecta trombose?",
        a: "Sim. É o principal exame para investigar trombose venosa profunda.",
      },
    ],
    schemaType: "ImagingTest",
    whatsappLabel: "Doppler arterial e venoso",
    updatedAt: "2026-10-04",
  },
];

export function getExame(slug: string) {
  return EXAMES.find((e) => e.slug === slug);
}

export function getCategoria(slug: string) {
  return CATEGORIAS_EXAMES.find((c) => c.slug === slug);
}

export function examesDaCategoria(slug: ExamCategorySlug) {
  return EXAMES.filter((e) => e.category === slug);
}
