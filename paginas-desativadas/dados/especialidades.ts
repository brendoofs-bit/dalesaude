import type { Specialty } from "./tipos";

/**
 * Especialidades atendidas na DaleSaúde.
 * Cada item gera uma página em /especialidades/{slug} (DESATIVADAS por enquanto:
 * veja paginas-desativadas/config.ts).
 *
 * REGRAS DE CONTEÚDO (CFM 2.336/2023 e SEO):
 * - Tom educativo; nada de promessa de resultado, "o melhor", "cura garantida".
 * - Não inventar médicos, equipamentos, prazos ou preços.
 * - Todo texto novo precisa de revisão do diretor técnico antes de publicar.
 * - Ao editar, atualize `updatedAt` (data mostrada na página).
 */
export const ESPECIALIDADES: Specialty[] = [
  {
    slug: "clinico-geral",
    name: "Clínico Geral",
    professional: "clínico geral",
    h1: "Clínico geral na Tijuca",
    title: "Clínico geral na Tijuca a partir de R$ 129 | DaleSaúde",
    description:
      "Consulta com clínico geral na Tijuca a partir de R$ 129. Check-up, pedido de exames e acompanhamento de pressão e diabetes. Agende pelo WhatsApp.",
    summary: "Check-up, sintomas do dia a dia, pedido de exames e encaminhamento.",
    intro:
      "O clínico geral é o médico que olha para a sua saúde como um todo. Ele avalia sintomas, pede e interpreta exames, trata as doenças mais comuns e, quando necessário, indica o especialista certo. Na DaleSaúde, a consulta com clínico geral custa a partir de R$ 129.",
    treats: [
      "Check-up e exames de rotina",
      "Gripes, infecções e sintomas do dia a dia",
      "Acompanhamento de pressão alta, diabetes e colesterol",
      "Dor de cabeça, cansaço e alterações do sono",
      "Renovação de receitas de uso contínuo",
      "Encaminhamento para o especialista adequado",
    ],
    whenToSeek: [
      "Para o check-up anual, mesmo sem sintomas",
      "Quando você não sabe qual especialista procurar",
      "Febre, dor ou mal-estar que não melhoram em poucos dias",
      "Para entender e revisar resultados de exames",
    ],
    relatedExams: ["eletrocardiograma", "ultrassonografia-abdome-total", "ecocardiograma"],
    relatedSpecialties: ["cardiologia", "endocrinologia", "geriatria"],
    faqs: [
      {
        q: "Quanto custa a consulta com clínico geral na DaleSaúde?",
        a: "A consulta particular com clínico geral custa a partir de R$ 129. Confirme o valor e os horários disponíveis pelo WhatsApp.",
      },
      {
        q: "O clínico geral pode pedir exames?",
        a: "Sim. Ele pode pedir exames de sangue, de imagem e cardiológicos. Muitos deles podem ser feitos na própria DaleSaúde, no mesmo endereço.",
      },
      {
        q: "Clínico geral faz check-up?",
        a: "Sim. No check-up, o clínico avalia seu histórico, pede os exames adequados para a sua idade e seus fatores de risco e orienta a prevenção.",
      },
    ],
    schemaSpecialty: "PrimaryCare",
    priceFrom: 129,
    updatedAt: "2026-10-04",
  },
  {
    slug: "cardiologia",
    name: "Cardiologia",
    professional: "cardiologista",
    h1: "Cardiologista na Tijuca",
    title: "Cardiologista na Tijuca | Consulta particular | DaleSaúde",
    description:
      "Consulta com cardiologista na Tijuca com valor acessível. Eletrocardiograma, ecocardiograma, Holter e MAPA no mesmo endereço. Agende pelo WhatsApp.",
    summary: "Pressão alta, arritmias, colesterol e check-up do coração.",
    intro:
      "O cardiologista cuida do coração e dos vasos sanguíneos. Ele previne, diagnostica e acompanha problemas como pressão alta, arritmias e insuficiência cardíaca. Na DaleSaúde, você agenda a consulta pelo WhatsApp e, se o médico pedir, faz os principais exames do coração no mesmo endereço.",
    treats: [
      "Pressão alta (hipertensão arterial)",
      "Arritmias e palpitações",
      "Colesterol e triglicerídeos altos",
      "Insuficiência cardíaca",
      "Prevenção de infarto e doença das coronárias",
      "Avaliação de risco cardiovascular e check-up do coração",
      "Avaliação antes de cirurgias e de atividade física",
    ],
    whenToSeek: [
      "Pressão de 14 por 9 (140/90 mmHg) ou mais em medições repetidas",
      "Palpitações, cansaço fora do comum ou falta de ar aos esforços",
      "Inchaço nas pernas no fim do dia",
      "Histórico familiar de doença do coração",
      "Antes de começar atividade física intensa, principalmente depois dos 40 anos",
    ],
    urgentNote:
      "Dor forte no peito, falta de ar súbita ou desmaio são sinais de emergência: procure um pronto-socorro ou ligue 192 (SAMU).",
    relatedExams: ["eletrocardiograma", "ecocardiograma", "holter-24-horas", "mapa-24-horas", "doppler-de-carotidas-e-vertebrais"],
    relatedSpecialties: ["clinico-geral", "endocrinologia", "geriatria"],
    faqs: [
      {
        q: "Preciso de encaminhamento para consultar um cardiologista?",
        a: "Não. No atendimento particular você agenda direto com o cardiologista, sem pedido de outro médico.",
      },
      {
        q: "O que levar na consulta com o cardiologista?",
        a: "Documento com foto, exames anteriores (mesmo os antigos), a lista dos remédios que você usa e, se tiver, anotações das suas medidas de pressão.",
      },
      {
        q: "Posso fazer os exames do coração na própria clínica?",
        a: "Sim. A DaleSaúde realiza eletrocardiograma, ecocardiograma, Holter 24 horas, MAPA 24 horas e Doppler de carótidas, conforme o pedido médico.",
      },
    ],
    schemaSpecialty: "Cardiovascular",
    updatedAt: "2026-10-04",
  },
  {
    slug: "ginecologia",
    name: "Ginecologia",
    professional: "ginecologista",
    h1: "Ginecologista na Tijuca",
    title: "Ginecologista na Tijuca | Consulta particular | DaleSaúde",
    description:
      "Consulta com ginecologista na Tijuca para rotina, alterações menstruais, contracepção e menopausa. Ultrassom transvaginal e de mamas no local.",
    summary: "Rotina ginecológica, ciclo menstrual, contracepção e menopausa.",
    intro:
      "O ginecologista acompanha a saúde da mulher em todas as fases da vida, da primeira consulta à menopausa. A consulta de rotina anual ajuda a prevenir e a identificar cedo alterações no útero, nos ovários e nas mamas.",
    treats: [
      "Consulta de rotina e orientação preventiva",
      "Cólicas e alterações do ciclo menstrual",
      "Corrimentos, infecções e coceira íntima",
      "Escolha e acompanhamento do método contraceptivo",
      "Síndrome dos ovários policísticos e miomas",
      "Sintomas da menopausa",
    ],
    whenToSeek: [
      "Uma vez por ano, mesmo sem sintomas",
      "Sangramento fora do período menstrual",
      "Dor pélvica ou dor durante a relação",
      "Atraso menstrual ou ciclos muito irregulares",
      "Nódulo ou alteração percebida nas mamas",
    ],
    relatedExams: ["ultrassonografia-transvaginal", "ultrassonografia-de-mamas", "ultrassonografia-obstetrica"],
    relatedSpecialties: ["obstetricia", "endocrinologia", "urologia"],
    faqs: [
      {
        q: "Com que frequência devo ir ao ginecologista?",
        a: "Em geral, uma vez por ano para a consulta de rotina. A médica pode indicar intervalos diferentes conforme sua idade e seu histórico.",
      },
      {
        q: "Posso ir à consulta menstruada?",
        a: "Na maioria dos casos, sim. Alguns exames de coleta funcionam melhor fora do período menstrual; avise no agendamento para receber a orientação certa.",
      },
      {
        q: "A clínica faz ultrassom transvaginal e de mamas?",
        a: "Sim. A DaleSaúde realiza ultrassonografia transvaginal e de mamas, conforme indicação médica.",
      },
    ],
    schemaSpecialty: "Gynecologic",
    updatedAt: "2026-10-04",
  },
  {
    slug: "obstetricia",
    name: "Obstetrícia",
    professional: "obstetra",
    h1: "Obstetra e pré-natal na Tijuca",
    title: "Obstetra na Tijuca | Pré-natal particular | DaleSaúde",
    description:
      "Pré-natal com obstetra na Tijuca e ultrassons da gestação no mesmo lugar: obstétrica, morfológica e com Doppler. Agende pelo WhatsApp.",
    summary: "Pré-natal, exames da gestação e pós-parto.",
    intro:
      "O obstetra acompanha a gestação do início ao pós-parto. No pré-natal, ele cuida da saúde da mãe e do bebê, pede os exames de cada fase e orienta sobre alimentação, atividade física e preparo para o parto.",
    treats: [
      "Consultas de pré-natal",
      "Pedido e avaliação dos exames da gestação",
      "Acompanhamento da gestação de risco habitual",
      "Orientação sobre sintomas comuns da gravidez",
      "Planejamento antes de engravidar",
      "Consulta de pós-parto",
    ],
    whenToSeek: [
      "Assim que o teste de gravidez der positivo",
      "Para planejar uma gestação",
      "Durante toda a gravidez, nas consultas de pré-natal",
    ],
    urgentNote:
      "Sangramento, perda de líquido, dor forte na barriga, febre ou diminuição dos movimentos do bebê exigem avaliação imediata em maternidade ou pronto-socorro.",
    relatedExams: [
      "ultrassonografia-obstetrica",
      "ultrassonografia-morfologica",
      "ultrassonografia-obstetrica-com-doppler",
      "ultrassonografia-transvaginal",
    ],
    relatedSpecialties: ["ginecologia", "nutricao", "pediatria"],
    faqs: [
      {
        q: "Quando devo começar o pré-natal?",
        a: "O quanto antes, de preferência logo após o teste positivo. O início precoce permite fazer os exames do primeiro trimestre no momento certo.",
      },
      {
        q: "Com que frequência são as consultas de pré-natal?",
        a: "O obstetra define o calendário. Em geral, as consultas são mensais até cerca de 28 semanas, quinzenais até 36 semanas e semanais até o parto.",
      },
      {
        q: "Quais ultrassons a gestante costuma fazer?",
        a: "Os mais comuns são a ultrassonografia obstétrica, a morfológica do 1º e do 2º trimestre e, quando indicada, a obstétrica com Doppler. A DaleSaúde realiza esses exames no mesmo endereço.",
      },
    ],
    schemaSpecialty: "Obstetric",
    updatedAt: "2026-10-04",
  },
  {
    slug: "pediatria",
    name: "Pediatria",
    professional: "pediatra",
    h1: "Pediatra na Tijuca",
    title: "Pediatra na Tijuca | Consulta particular | DaleSaúde",
    description:
      "Pediatra na Tijuca para consultas de rotina, crescimento e desenvolvimento, febre e infecções da infância. Agendamento rápido pelo WhatsApp.",
    summary: "Rotina do bebê e da criança, febre, alergias e desenvolvimento.",
    intro:
      "O pediatra acompanha a saúde de bebês, crianças e adolescentes. Nas consultas de rotina, avalia o crescimento e o desenvolvimento e orienta sobre alimentação, vacinas e sono.",
    treats: [
      "Consultas de rotina (puericultura)",
      "Acompanhamento do crescimento e do desenvolvimento",
      "Febre, tosse e infecções comuns da infância",
      "Alergias e problemas respiratórios",
      "Orientação sobre alimentação e sono",
      "Avaliação para escola e prática de esportes",
    ],
    whenToSeek: [
      "Nas consultas de rotina do calendário do bebê e da criança",
      "Febre que dura mais de dois dias",
      "Tosse persistente ou chiado no peito",
      "Recusa alimentar ou perda de peso",
    ],
    urgentNote:
      "Bebê com menos de 3 meses com febre, dificuldade para respirar, sonolência excessiva ou convulsão: procure um pronto-socorro imediatamente.",
    relatedExams: [],
    relatedSpecialties: ["clinico-geral", "otorrinolaringologia", "nutricao"],
    faqs: [
      {
        q: "Com que frequência a criança deve ir ao pediatra?",
        a: "No primeiro ano de vida as consultas são mais frequentes, geralmente mensais nos primeiros meses. Depois ficam mais espaçadas; o pediatra indica o calendário ideal.",
      },
      {
        q: "O que levar na consulta pediátrica?",
        a: "A caderneta de vacinação, exames anteriores, a lista de remédios em uso e as dúvidas anotadas.",
      },
    ],
    schemaSpecialty: "Pediatric",
    updatedAt: "2026-10-04",
  },
  {
    slug: "endocrinologia",
    name: "Endocrinologia",
    professional: "endocrinologista",
    h1: "Endocrinologista na Tijuca",
    title: "Endocrinologista na Tijuca: diabetes e tireoide | DaleSaúde",
    description:
      "Consulta com endocrinologista na Tijuca para diabetes, tireoide, obesidade e alterações hormonais. Valor acessível e agendamento pelo WhatsApp.",
    summary: "Diabetes, tireoide, obesidade e alterações hormonais.",
    intro:
      "O endocrinologista trata as glândulas e os hormônios do corpo, como tireoide, pâncreas e suprarrenais. É o especialista que acompanha diabetes, problemas de tireoide, obesidade e outras alterações do metabolismo.",
    treats: [
      "Diabetes tipo 1, tipo 2 e pré-diabetes",
      "Hipotireoidismo, hipertireoidismo e nódulos na tireoide",
      "Obesidade e ganho de peso sem causa aparente",
      "Colesterol alto e síndrome metabólica",
      "Osteoporose",
      "Alterações hormonais",
    ],
    whenToSeek: [
      "Glicemia de jejum alterada no exame de sangue",
      "Cansaço, queda de cabelo, intestino preso ou frio excessivo",
      "Sede e vontade de urinar fora do comum",
      "Ganho ou perda de peso sem explicação",
      "Nódulo no pescoço percebido ao toque",
    ],
    relatedExams: [],
    relatedSpecialties: ["nutricao", "clinico-geral", "cardiologia"],
    faqs: [
      {
        q: "Preciso levar exames de sangue na primeira consulta?",
        a: "Se tiver exames recentes, leve. Se não tiver, o médico avalia o caso e pede os exames necessários.",
      },
      {
        q: "Endocrinologista trata obesidade?",
        a: "Sim. Ele investiga causas hormonais e metabólicas e orienta o tratamento, muitas vezes junto com o acompanhamento nutricional.",
      },
    ],
    schemaSpecialty: "Endocrine",
    updatedAt: "2026-10-04",
  },
  {
    slug: "ortopedia",
    name: "Ortopedia",
    professional: "ortopedista",
    h1: "Ortopedista na Tijuca",
    title: "Ortopedista na Tijuca | Consulta particular | DaleSaúde",
    description:
      "Ortopedista na Tijuca para dor na coluna, joelho, ombro e lesões do esporte. Consulta particular com valor acessível e agendamento pelo WhatsApp.",
    summary: "Coluna, joelho, ombro, tendinites e lesões do esporte.",
    intro:
      "O ortopedista cuida de ossos, articulações, músculos, tendões e ligamentos. Ele avalia dores, lesões e problemas de postura e indica o tratamento, que pode incluir remédios, fisioterapia e, em alguns casos, cirurgia.",
    treats: [
      "Dor nas costas, lombar e cervical",
      "Dor no joelho, ombro, quadril e tornozelo",
      "Tendinites e bursites",
      "Entorses e lesões do esporte",
      "Artrose e desgaste das articulações",
      "Acompanhamento de fraturas e da recuperação",
    ],
    whenToSeek: [
      "Dor que dura mais de alguns dias ou piora com o movimento",
      "Inchaço, estalos ou sensação de falseio em uma articulação",
      "Formigamento ou dor que irradia para braço ou perna",
      "Dificuldade para caminhar, subir escada ou levantar o braço",
      "Depois de uma queda ou torção",
    ],
    urgentNote:
      "Suspeita de fratura, deformidade visível ou dor intensa depois de um acidente pedem atendimento de emergência.",
    relatedExams: [],
    relatedSpecialties: ["fisioterapia", "reumatologia", "acupuntura"],
    faqs: [
      {
        q: "Ortopedista ou reumatologista: qual procurar?",
        a: "Para lesões, dores mecânicas e problemas estruturais, o ortopedista. Para dor articular com inflamação persistente, rigidez ao acordar ou suspeita de doença autoimune, o reumatologista. Na dúvida, comece pelo clínico geral.",
      },
      {
        q: "Devo levar exames de imagem anteriores?",
        a: "Sim. Leve radiografias, ressonâncias ou ultrassons anteriores, com os laudos. Eles ajudam o médico a comparar a evolução.",
      },
    ],
    schemaSpecialty: "Musculoskeletal",
    updatedAt: "2026-10-04",
  },
  {
    slug: "urologia",
    name: "Urologia",
    professional: "urologista",
    h1: "Urologista na Tijuca",
    title: "Urologista na Tijuca | Consulta particular | DaleSaúde",
    description:
      "Urologista na Tijuca para próstata, infecção urinária, cálculo renal e saúde do homem. Ultrassom de próstata no mesmo endereço. Agende pelo WhatsApp.",
    summary: "Próstata, infecção urinária, cálculo renal e saúde do homem.",
    intro:
      "O urologista trata o sistema urinário de homens e mulheres (rins, bexiga e uretra) e o sistema reprodutor masculino. É o especialista indicado para a saúde da próstata e para queixas urinárias.",
    treats: [
      "Avaliação da próstata e prevenção do câncer de próstata",
      "Infecção urinária de repetição",
      "Pedra nos rins (cálculo renal)",
      "Incontinência urinária",
      "Disfunção erétil",
      "Avaliação e orientação sobre vasectomia",
    ],
    whenToSeek: [
      "A partir dos 50 anos, para avaliação da próstata (ou dos 45, se houver histórico familiar)",
      "Jato urinário fraco ou vontade de urinar várias vezes à noite",
      "Dor ou ardência ao urinar",
      "Sangue na urina",
      "Dor forte nas costas que irradia para a barriga",
    ],
    relatedExams: ["ultrassonografia-de-prostata", "ultrassonografia-abdome-total"],
    relatedSpecialties: ["clinico-geral", "proctologia", "geriatria"],
    faqs: [
      {
        q: "Com que idade o homem deve ir ao urologista?",
        a: "Para a avaliação da próstata, a recomendação geral é a partir dos 50 anos, ou dos 45 para quem tem histórico familiar. Queixas urinárias devem ser avaliadas em qualquer idade.",
      },
      {
        q: "Mulher também consulta urologista?",
        a: "Sim. Infecção urinária de repetição, cálculo renal e incontinência urinária são tratados pelo urologista em homens e mulheres.",
      },
    ],
    schemaSpecialty: "Urologic",
    updatedAt: "2026-10-04",
  },
  {
    slug: "dermatologia",
    name: "Dermatologia",
    professional: "dermatologista",
    h1: "Dermatologista na Tijuca",
    title: "Dermatologista na Tijuca | Consulta particular | DaleSaúde",
    description:
      "Dermatologista na Tijuca para acne, manchas, queda de cabelo, micoses e avaliação de pintas. Consulta particular com agendamento rápido pelo WhatsApp.",
    summary: "Acne, manchas, queda de cabelo, micoses e pintas.",
    intro:
      "O dermatologista cuida da pele, do cabelo e das unhas. Além de tratar acne, manchas e alergias, ele avalia pintas e lesões, o que é importante para identificar cedo o câncer de pele.",
    treats: [
      "Acne e oleosidade",
      "Manchas e melasma",
      "Queda de cabelo e caspa",
      "Micoses de pele e unha",
      "Dermatites, alergias e coceira",
      "Avaliação de pintas e prevenção do câncer de pele",
    ],
    whenToSeek: [
      "Pinta que mudou de cor, tamanho ou formato",
      "Ferida na pele que não cicatriza",
      "Queda de cabelo acima do normal",
      "Coceira ou vermelhidão que não passa",
      "Acne que deixa marcas",
    ],
    relatedExams: [],
    relatedSpecialties: ["endocrinologia", "clinico-geral", "reumatologia"],
    faqs: [
      {
        q: "Com que frequência devo examinar as pintas?",
        a: "Faça o autoexame em casa todo mês e consulte o dermatologista uma vez por ano, ou antes se notar alguma mudança.",
      },
      {
        q: "Dermatologista trata queda de cabelo?",
        a: "Sim. O dermatologista investiga a causa da queda, pode pedir exames de sangue e indica o tratamento adequado.",
      },
    ],
    schemaSpecialty: "Dermatology",
    updatedAt: "2026-10-04",
  },
  {
    slug: "gastroenterologia",
    name: "Gastroenterologia",
    professional: "gastroenterologista",
    h1: "Gastroenterologista na Tijuca",
    title: "Gastroenterologista na Tijuca | Consulta | DaleSaúde",
    description:
      "Gastroenterologista na Tijuca para azia, refluxo, gastrite, intestino irregular e fígado. Ultrassom de abdome total no mesmo endereço.",
    summary: "Refluxo, gastrite, intestino, fígado e vesícula.",
    intro:
      "O gastroenterologista trata o sistema digestivo: esôfago, estômago, intestinos, fígado, vesícula e pâncreas. É o médico indicado para azia frequente, dor na barriga e mudanças no funcionamento do intestino.",
    treats: [
      "Refluxo, azia e gastrite",
      "Intestino preso, diarreia e síndrome do intestino irritável",
      "Gases, estufamento e má digestão",
      "Gordura no fígado (esteatose)",
      "Pedra na vesícula",
      "Intolerâncias alimentares",
    ],
    whenToSeek: [
      "Azia ou queimação frequentes",
      "Mudança no hábito intestinal por mais de algumas semanas",
      "Dor abdominal que volta com frequência",
      "Perda de peso sem explicação",
      "Sangue nas fezes",
    ],
    urgentNote:
      "Dor abdominal intensa e súbita, vômito com sangue ou fezes escuras como borra de café exigem pronto-socorro.",
    relatedExams: ["ultrassonografia-abdome-total"],
    relatedSpecialties: ["proctologia", "nutricao", "clinico-geral"],
    faqs: [
      {
        q: "O gastroenterologista pede endoscopia?",
        a: "Quando necessário, sim. Ele avalia os sintomas e indica os exames adequados, como endoscopia, colonoscopia ou ultrassonografia.",
      },
      {
        q: "Gordura no fígado é grave?",
        a: "A esteatose é comum e, em geral, melhora com mudanças de hábito. Mesmo assim, precisa de acompanhamento médico para não evoluir.",
      },
    ],
    schemaSpecialty: "Gastroenterologic",
    updatedAt: "2026-10-04",
  },
  {
    slug: "proctologia",
    name: "Proctologia",
    professional: "proctologista",
    h1: "Proctologista na Tijuca",
    title: "Proctologista na Tijuca | Consulta particular | DaleSaúde",
    description:
      "Proctologista na Tijuca para hemorroidas, fissura anal, sangramento e prevenção do câncer de intestino. Atendimento discreto e acolhedor.",
    summary: "Hemorroidas, fissuras, sangramento e prevenção.",
    intro:
      "O proctologista (coloproctologista) trata doenças do intestino grosso, do reto e do ânus. É o especialista para hemorroidas e fissuras e para a prevenção do câncer colorretal.",
    treats: [
      "Hemorroidas",
      "Fissura e fístula anal",
      "Sangramento ao evacuar",
      "Coceira e dor na região anal",
      "Intestino preso crônico",
      "Prevenção e rastreamento do câncer colorretal",
    ],
    whenToSeek: [
      "Sangue nas fezes ou no papel higiênico",
      "Dor ao evacuar",
      "Caroço ou inchaço na região anal",
      "A partir dos 45 anos, para conversar sobre o rastreamento do câncer de intestino",
    ],
    relatedExams: [],
    relatedSpecialties: ["gastroenterologia", "clinico-geral", "urologia"],
    faqs: [
      {
        q: "A consulta com o proctologista é constrangedora?",
        a: "O atendimento é discreto e respeitoso. O exame físico é rápido e explicado antes, e você pode tirar todas as dúvidas.",
      },
      {
        q: "Sangue nas fezes é sempre hemorroida?",
        a: "Não. Pode ser hemorroida ou fissura, mas também outros problemas. Todo sangramento deve ser avaliado por um médico.",
      },
    ],
    updatedAt: "2026-10-04",
  },
  {
    slug: "neurologia",
    name: "Neurologia",
    professional: "neurologista",
    h1: "Neurologista na Tijuca",
    title: "Neurologista na Tijuca | Consulta particular | DaleSaúde",
    description:
      "Neurologista na Tijuca para dor de cabeça, enxaqueca, tontura, formigamento e memória. Doppler de carótidas no mesmo endereço. Agende pelo WhatsApp.",
    summary: "Enxaqueca, tontura, formigamentos e memória.",
    intro:
      "O neurologista trata doenças do cérebro, da medula e dos nervos. Ele avalia sintomas como dor de cabeça frequente, tontura, formigamentos, tremores e esquecimentos.",
    treats: [
      "Enxaqueca e dor de cabeça frequente",
      "Tontura e vertigem",
      "Formigamento e dormência",
      "Alterações de memória",
      "Epilepsia",
      "Acompanhamento depois de um AVC",
    ],
    whenToSeek: [
      "Dor de cabeça que se repete ou mudou de padrão",
      "Formigamento ou fraqueza persistente em braço ou perna",
      "Esquecimentos que atrapalham a rotina",
      "Tremores",
    ],
    urgentNote:
      "Boca torta, fraqueza de um lado do corpo, fala enrolada ou a pior dor de cabeça da vida podem ser um AVC: ligue 192 (SAMU) imediatamente.",
    relatedExams: ["doppler-de-carotidas-e-vertebrais"],
    relatedSpecialties: ["geriatria", "otorrinolaringologia", "psiquiatria"],
    faqs: [
      {
        q: "Quando a dor de cabeça é preocupante?",
        a: "Quando é muito forte e súbita, vem com febre, rigidez na nuca ou alterações da visão ou da fala, ou muda de padrão. Nesses casos, procure atendimento logo.",
      },
      {
        q: "Tontura é com o neurologista ou com o otorrino?",
        a: "Os dois podem avaliar. Tonturas ligadas ao labirinto costumam ser vistas pelo otorrino; se vierem com outros sintomas neurológicos, procure o neurologista.",
      },
    ],
    schemaSpecialty: "Neurologic",
    updatedAt: "2026-10-04",
  },
  {
    slug: "psiquiatria",
    name: "Psiquiatria",
    professional: "psiquiatra",
    h1: "Psiquiatra na Tijuca",
    title: "Psiquiatra na Tijuca | Consulta particular | DaleSaúde",
    description:
      "Psiquiatra na Tijuca para ansiedade, depressão, insônia e TDAH. Atendimento acolhedor, consulta particular e agendamento pelo WhatsApp.",
    summary: "Ansiedade, depressão, insônia e TDAH.",
    intro:
      "O psiquiatra é o médico que diagnostica e trata transtornos mentais e emocionais. A consulta é um espaço de escuta e cuidado, e o tratamento pode combinar medicação e psicoterapia.",
    treats: [
      "Ansiedade e crises de pânico",
      "Depressão",
      "Insônia e outras alterações do sono",
      "Transtorno de déficit de atenção (TDAH)",
      "Transtorno bipolar",
      "Uso problemático de álcool e outras substâncias",
    ],
    whenToSeek: [
      "Tristeza, desânimo ou ansiedade que duram semanas",
      "Dificuldade para dormir que afeta o dia a dia",
      "Perda de interesse por atividades de que você gostava",
      "Dificuldade de concentração que atrapalha o trabalho ou os estudos",
    ],
    urgentNote:
      "Se você estiver pensando em se machucar, ligue 188 (CVV, gratuito, 24 horas) ou procure um pronto-socorro.",
    relatedExams: [],
    relatedSpecialties: ["neurologia", "clinico-geral", "geriatria"],
    faqs: [
      {
        q: "Qual a diferença entre psiquiatra e psicólogo?",
        a: "O psiquiatra é médico: faz o diagnóstico e pode prescrever medicamentos. O psicólogo conduz a psicoterapia. Muitas vezes os dois trabalham juntos.",
      },
      {
        q: "A consulta com o psiquiatra é sigilosa?",
        a: "Sim. Toda consulta médica é protegida pelo sigilo profissional.",
      },
    ],
    schemaSpecialty: "Psychiatric",
    updatedAt: "2026-10-04",
  },
  {
    slug: "reumatologia",
    name: "Reumatologia",
    professional: "reumatologista",
    h1: "Reumatologista na Tijuca",
    title: "Reumatologista na Tijuca | Consulta particular | DaleSaúde",
    description:
      "Reumatologista na Tijuca para dores nas articulações, artrite, artrose, fibromialgia, lúpus e gota. Consulta particular com valor acessível.",
    summary: "Artrite, artrose, fibromialgia, gota e lúpus.",
    intro:
      "O reumatologista trata doenças que afetam articulações, músculos, ossos e o sistema imunológico. Muitas são crônicas e, com diagnóstico cedo, podem ser bem controladas.",
    treats: ["Artrite reumatoide", "Artrose", "Fibromialgia", "Gota", "Lúpus e outras doenças autoimunes", "Osteoporose"],
    whenToSeek: [
      "Dor e inchaço nas articulações por mais de seis semanas",
      "Rigidez nas mãos ao acordar que demora a passar",
      "Dores pelo corpo junto com cansaço",
      "Crises de dor forte e inchaço no dedão do pé",
    ],
    relatedExams: [],
    relatedSpecialties: ["ortopedia", "fisioterapia", "acupuntura"],
    faqs: [
      {
        q: "Reumatismo é doença de idoso?",
        a: "Não. Várias doenças reumáticas, como lúpus e artrite reumatoide, começam em adultos jovens.",
      },
      {
        q: "Fibromialgia tem tratamento?",
        a: "Tem. O tratamento combina atividade física, cuidado com o sono e, quando indicado, medicamentos, com acompanhamento do reumatologista.",
      },
    ],
    schemaSpecialty: "Rheumatologic",
    updatedAt: "2026-10-04",
  },
  {
    slug: "otorrinolaringologia",
    name: "Otorrinolaringologia",
    professional: "otorrino",
    h1: "Otorrinolaringologista (otorrino) na Tijuca",
    title: "Otorrino na Tijuca | Consulta particular | DaleSaúde",
    description:
      "Otorrinolaringologista na Tijuca para sinusite, rinite, dor de ouvido, zumbido, tontura e ronco. Consulta particular e agendamento pelo WhatsApp.",
    summary: "Sinusite, rinite, ouvido, zumbido, tontura e ronco.",
    intro:
      "O otorrinolaringologista, o otorrino, cuida do ouvido, do nariz e da garganta. Ele trata problemas comuns como sinusite, rinite e dor de ouvido e investiga zumbido, tontura e ronco.",
    treats: [
      "Sinusite e rinite alérgica",
      "Dor e infecção de ouvido",
      "Zumbido e perda de audição",
      "Tontura e labirintite",
      "Amigdalite e dor de garganta de repetição",
      "Ronco e apneia do sono",
    ],
    whenToSeek: [
      "Nariz entupido ou escorrendo por semanas",
      "Dor de garganta que volta com frequência",
      "Zumbido ou sensação de ouvido tampado",
      "Tontura com sensação de que tudo gira",
      "Ronco alto ou pausas na respiração durante o sono",
    ],
    relatedExams: [],
    relatedSpecialties: ["neurologia", "pediatria", "clinico-geral"],
    faqs: [
      {
        q: "Labirintite é tratada pelo otorrino?",
        a: "Sim. O otorrino investiga a causa da tontura e indica o tratamento.",
      },
      {
        q: "Posso limpar o ouvido com cotonete?",
        a: "Não é recomendado: o cotonete empurra a cera para dentro. Se sentir o ouvido tampado, procure o otorrino.",
      },
    ],
    schemaSpecialty: "Otolaryngologic",
    updatedAt: "2026-10-04",
  },
  {
    slug: "oftalmologia",
    name: "Oftalmologia",
    professional: "oftalmologista",
    h1: "Oftalmologista na Tijuca",
    title: "Oftalmologista na Tijuca | Consulta particular | DaleSaúde",
    description:
      "Oftalmologista na Tijuca para avaliação da visão, olho seco, conjuntivite e acompanhamento de glaucoma e catarata. Agende pelo WhatsApp.",
    summary: "Visão, olho seco, conjuntivite, glaucoma e catarata.",
    intro:
      "O oftalmologista é o médico dos olhos. Ele avalia a visão, prescreve óculos e lentes e diagnostica e trata doenças como glaucoma, catarata, conjuntivite e olho seco.",
    treats: [
      "Avaliação da visão e prescrição de óculos",
      "Olho seco, irritação e vermelhidão",
      "Conjuntivite e alergias oculares",
      "Acompanhamento de glaucoma e catarata",
      "Avaliação dos olhos de quem tem diabetes ou pressão alta",
    ],
    whenToSeek: [
      "Visão embaçada ou dificuldade para ler de perto",
      "Dor de cabeça depois de esforço visual",
      "Olhos vermelhos, ardendo ou coçando",
      "Uma vez por ano depois dos 40 anos",
      "Todo ano, se você tem diabetes",
    ],
    urgentNote: "Perda súbita da visão, dor forte no olho ou trauma ocular exigem atendimento de emergência.",
    relatedExams: [],
    relatedSpecialties: ["endocrinologia", "neurologia", "clinico-geral"],
    faqs: [
      {
        q: "Com que frequência devo ir ao oftalmologista?",
        a: "Adultos sem queixas, a cada um ou dois anos; depois dos 40, uma vez por ano. Quem tem diabetes deve ir todo ano.",
      },
      {
        q: "Posso dirigir depois da consulta?",
        a: "Se houver dilatação da pupila, a visão fica embaçada por algumas horas e o ideal é não dirigir. Pergunte no agendamento.",
      },
    ],
    updatedAt: "2026-10-04",
  },
  {
    slug: "geriatria",
    name: "Geriatria",
    professional: "geriatra",
    h1: "Geriatra na Tijuca",
    title: "Geriatra na Tijuca | Consulta particular | DaleSaúde",
    description:
      "Geriatra na Tijuca: cuidado integral da pessoa idosa, memória, quedas, uso de muitos remédios e prevenção. Consulta particular e acolhedora.",
    summary: "Saúde da pessoa idosa, memória, quedas e remédios.",
    intro:
      "O geriatra é o médico especialista na saúde da pessoa idosa. Ele avalia o paciente de forma integral (saúde física, memória, humor, mobilidade e uso de medicamentos) para preservar a autonomia e a qualidade de vida.",
    treats: [
      "Acompanhamento de várias doenças crônicas ao mesmo tempo",
      "Revisão dos medicamentos em uso",
      "Alterações de memória e demências",
      "Quedas e perda de equilíbrio",
      "Perda de peso e de massa muscular",
      "Incontinência urinária",
    ],
    whenToSeek: [
      "A partir dos 60 anos, para uma avaliação geriátrica",
      "Uso de cinco ou mais medicamentos",
      "Quedas recentes ou medo de cair",
      "Esquecimentos ou mudanças de comportamento",
    ],
    relatedExams: ["eletrocardiograma", "doppler-de-carotidas-e-vertebrais"],
    relatedSpecialties: ["clinico-geral", "cardiologia", "neurologia"],
    faqs: [
      {
        q: "Qual a diferença entre geriatra e clínico geral?",
        a: "Os dois cuidam do adulto como um todo, mas o geriatra é especialista nas mudanças do envelhecimento, como quedas, memória e uso de muitos remédios.",
      },
      {
        q: "Um familiar pode acompanhar a consulta?",
        a: "Pode e é recomendado, principalmente quando há alterações de memória.",
      },
    ],
    schemaSpecialty: "Geriatric",
    updatedAt: "2026-10-04",
  },
  {
    slug: "nutricao",
    name: "Nutrição",
    professional: "nutricionista",
    h1: "Nutricionista na Tijuca",
    title: "Nutricionista na Tijuca | Consulta particular | DaleSaúde",
    description:
      "Nutricionista na Tijuca para reeducação alimentar, emagrecimento, diabetes, colesterol e alimentação na gestação. Agende pelo WhatsApp.",
    summary: "Reeducação alimentar, emagrecimento e doenças crônicas.",
    intro:
      "O nutricionista monta um plano alimentar de acordo com a sua rotina, seus objetivos e suas condições de saúde. É um aliado no emagrecimento, no controle de doenças como diabetes e colesterol alto e na melhora da disposição.",
    treats: [
      "Reeducação alimentar e emagrecimento",
      "Alimentação para diabetes, pressão alta e colesterol",
      "Ganho de massa muscular",
      "Alimentação na gestação e na amamentação",
      "Intolerâncias e alergias alimentares",
      "Alimentação infantil",
    ],
    whenToSeek: [
      "Quando quer mudar a alimentação de forma sustentável",
      "Depois do diagnóstico de diabetes, colesterol alto ou gordura no fígado",
      "Ganho ou perda de peso sem controle",
    ],
    relatedExams: [],
    relatedSpecialties: ["endocrinologia", "gastroenterologia", "obstetricia"],
    faqs: [
      {
        q: "Preciso levar exames de sangue?",
        a: "Se tiver exames recentes, leve. Eles ajudam a personalizar o plano alimentar.",
      },
      {
        q: "Qual a diferença entre nutricionista e nutrólogo?",
        a: "O nutricionista elabora o plano alimentar. O nutrólogo é médico e diagnostica e trata doenças ligadas à nutrição.",
      },
    ],
    schemaSpecialty: "DietNutrition",
    nonMedical: true,
    updatedAt: "2026-10-04",
  },
  {
    slug: "fisioterapia",
    name: "Fisioterapia",
    professional: "fisioterapeuta",
    h1: "Fisioterapia na Tijuca",
    title: "Fisioterapia na Tijuca | Avaliação e sessões | DaleSaúde",
    description:
      "Fisioterapia na Tijuca para dor na coluna, recuperação de lesões, pós-operatório e postura. Avaliação com fisioterapeuta e agendamento pelo WhatsApp.",
    summary: "Coluna, lesões, pós-operatório e postura.",
    intro:
      "A fisioterapia previne e trata alterações do movimento causadas por lesões, doenças ou cirurgias. O fisioterapeuta faz uma avaliação e monta um plano de sessões para aliviar a dor e recuperar a função.",
    treats: [
      "Dores na coluna e problemas de postura",
      "Recuperação de lesões do esporte",
      "Reabilitação depois de cirurgias ortopédicas",
      "Tendinites e dores articulares",
      "Fortalecimento e prevenção de quedas em idosos",
    ],
    whenToSeek: [
      "Por indicação do ortopedista ou de outro médico",
      "Dor que limita os movimentos do dia a dia",
      "Depois de uma cirurgia ou imobilização",
    ],
    relatedExams: [],
    relatedSpecialties: ["ortopedia", "reumatologia", "acupuntura"],
    faqs: [
      {
        q: "Preciso de pedido médico para fazer fisioterapia?",
        a: "No atendimento particular você pode agendar uma avaliação com o fisioterapeuta. Se tiver laudo ou pedido médico, leve na primeira sessão.",
      },
      {
        q: "Quantas sessões vou precisar?",
        a: "Depende da avaliação. O fisioterapeuta define o número de sessões e ajusta o plano conforme a evolução.",
      },
    ],
    schemaSpecialty: "Physiotherapy",
    nonMedical: true,
    updatedAt: "2026-10-04",
  },
  {
    slug: "acupuntura",
    name: "Acupuntura",
    professional: "acupunturista",
    h1: "Acupuntura na Tijuca",
    title: "Acupuntura na Tijuca | Sessões particulares | DaleSaúde",
    description:
      "Acupuntura na Tijuca como tratamento complementar para dores crônicas, enxaqueca, ansiedade e insônia. Agende sua sessão pelo WhatsApp.",
    summary: "Tratamento complementar para dor, enxaqueca e ansiedade.",
    intro:
      "A acupuntura usa agulhas muito finas em pontos específicos do corpo. No Brasil, é reconhecida como especialidade médica e costuma ser indicada como tratamento complementar para dores e outros sintomas.",
    treats: [
      "Dores na coluna e no pescoço",
      "Enxaqueca e dor de cabeça tensional",
      "Dores musculares e fibromialgia",
      "Ansiedade e estresse",
      "Insônia",
    ],
    whenToSeek: [
      "Dor crônica que não melhorou só com o tratamento convencional",
      "Como complemento ao tratamento indicado pelo seu médico",
    ],
    relatedExams: [],
    relatedSpecialties: ["ortopedia", "reumatologia", "fisioterapia"],
    faqs: [
      {
        q: "A acupuntura dói?",
        a: "As agulhas são muito finas. A maioria das pessoas sente só uma leve picada ou uma sensação de peso no local.",
      },
      {
        q: "Quantas sessões são necessárias?",
        a: "Varia conforme o caso. Em geral o plano começa com sessões semanais e é ajustado conforme a resposta.",
      },
    ],
    updatedAt: "2026-10-04",
  },
];

export function getEspecialidade(slug: string) {
  return ESPECIALIDADES.find((e) => e.slug === slug);
}
