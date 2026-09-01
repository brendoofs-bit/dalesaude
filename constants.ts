import { ServiceItem, ScienceArticle, Benefit } from './types';
import { 
  Stethoscope, 
  Heart, 
  Baby, 
  Eye, 
  Bone, 
  Brain, 
  Activity, 
  Apple, 
  User, 
  Scan, 
  ShieldCheck, 
  Pill,
  Clock,
  Wallet,
  Users
} from 'lucide-react';

export const PHONE_NUMBER = "(21) 3525-6618";
export const WHATSAPP_NUMBER = "552135256618"; // Format for API
export const ADDRESS = "Rua Uruguai, 147, Tijuca, Rio de Janeiro – RJ";
export const ADDRESS_LINK = "https://maps.google.com/?q=Rua+Uruguai+147+Tijuca+Rio+de+Janeiro";

// Images provided
export const IMAGES = {
  logo: "https://res.cloudinary.com/xkdz1q1u/image/upload/v1787018511/logomarca_dalesaude.png",
  dalePlusLogo: "https://res.cloudinary.com/xkdz1q1u/image/upload/v1788220533/logo-atualizada.svg",
  heroBg: "https://res.cloudinary.com/xkdz1q1u/image/upload/v1787017791/profissional-saude-jaleco-azul-estetoscopio-ambiente-hospitalar.webp",
  clinicInterior: "https://res.cloudinary.com/xkdz1q1u/image/upload/v1787014783/fileiras-de-cadeiras-plasticas-brancas-em-corredor.webp",
  // Fallbacks using picsum just in case we need more textures
  texture: "https://picsum.photos/1920/1080?grayscale&blur=2",
};

export const VALUES = [
  "empatia", "segurança", "acolhimento", "transparência", "respeito", 
  "compromisso", "dedicação", "confiança", "proximidade", "humanização", "excelência"
];

export const SPECIALTIES = [
  "Cardiologia",
  "Ginecologia",
  "Endocrinologia",
  "Ortopedia",
  "Urologia",
  "Clínico Geral",
  "Dermatologia",
  "Gastroenterologia",
  "Oftalmologia",
  "Psiquiatria",
  "Reumatologia",
  "Neurologia",
  "Proctologia",
  "Otorrinolaringologia",
  "Geriatria",
  "Pediatria",
  "Obstetrícia",
  "Nutrição",
  "Fisioterapia",
  "Acupuntura"
];

export const ULTRASOUNDS = [
  "Obstétrica",
  "Obstétrica com Doppler",
  "Transvaginal",
  "Morfológica",
  "Abdome Total",
  "Mamas",
  "Próstata"
];

export const CARDIO_VASCULAR_EXAMS = [
  "Ecocardiograma",
  "Eletrocardiograma (ECG)",
  "Holter 24 horas",
  "MAPA 24 horas",
  "Doppler de Carótidas e Vertebrais",
  "Doppler Arterial e Venoso"
];

export const DALE_PLUS_BENEFITS: Benefit[] = [
  { 
    title: "Consultas Incluídas", 
    description: "Acesso a diversas especialidades médicas sem custo adicional no momento do atendimento.", 
    icon: 'Stethoscope'
  },
  { 
    title: "Valores Reduzidos", 
    description: "Exames laboratoriais e de imagem com descontos exclusivos e significativos.", 
    icon: 'Wallet'
  },
  { 
    title: "Sem Carência", 
    description: "Utilize seus benefícios imediatamente após a adesão. Sem filas ou burocracia.", 
    icon: 'Clock'
  },
  { 
    title: "Rede de Parceiros", 
    description: "Descontos em farmácias e estabelecimentos de saúde parceiros na região.", 
    icon: 'Users'
  }
];

export const SCIENCE_ARTICLES: ScienceArticle[] = [
  {
    title: "O impacto do acompanhamento preventivo na longevidade",
    summary: "Estudos demonstram que check-ups regulares aumentam a expectativa de vida em até 20% ao detectar patologias em estágios iniciais.",
    source: "Journal of Preventive Medicine",
    year: "2023"
  },
  {
    title: "A relação entre saúde mental e física",
    summary: "A integração de cuidados psicológicos com tratamentos clínicos reduz em 30% a reincidência de doenças crônicas.",
    source: "Brazilian Journal of Health Review",
    year: "2024"
  },
  {
    title: "Medicina baseada em evidência e qualidade de vida",
    summary: "Pacientes que mantêm rotina de cuidados preventivos relatam 45% mais disposição e bem-estar no dia a dia.",
    source: "National Health Institute",
    year: "2023"
  }
];

export const REVIEWS = [
  {
    name: "Carlos Eduardo",
    text: "Excelente atendimento, Dra Luz Marina , (ecocardiograma) profissional altamente competente, explicativa , uma cordialidade impecável. Não conhecia a clínica mais agora caso eu precise rapidamente, voltarei ."
  },
  {
    name: "Rafael Humor",
    text: "Gostei muito do atendimento! Desde a recepção até a sala do médico. Achei um lugar completo, tem atendimento médico e no mesmo lugar conseguimos fazer os exames preciso. Fica aqui o meu agradecimento"
  },
  {
    name: "Maria Gabriela",
    text: "Minha experiência nessa clínica foi incrível, os médicos e recepcionistas super atenciosos! Ambiente bastante ventilado, tudo limpinho, valeu super a pena!!"
  },
  {
    name: "Mariana Cabral",
    text: "Surpreendida positivamente! Clinica limpa, refrigerada na medida, funcionários educados e atenciosos, atendimento excelente, médico super atencioso e profissional. Indico 100%"
  },
  {
    name: "Heloisa Morais",
    text: "As recepcionistas são extremamente gentis e atenciosas!!!! Que elas sejam muito valorizadas pq trabalhar com o público é muito estressante! Vi elas atendendo uma senhora arrogante com muita sabedoria, simpatia e atenciosidade! Fiquei impressionada com tanto profissionalismo! O lugar é super organizado e limpo! Médico também muito atencioso!"
  }
];
