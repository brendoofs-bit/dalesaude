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
  logo: "https://res.cloudinary.com/doqw5aqcf/image/upload/v1771417766/logo-branco-com-verde_xnn8et.webp",
  heroBg: "https://res.cloudinary.com/doqw5aqcf/image/upload/v1768056150/vista-frontal-sorridente-medica-e-paciente_htvir7.jpg",
  clinicInterior: "https://res.cloudinary.com/doqw5aqcf/image/upload/v1768056412/recepcao-dalesaude_xwxpib.webp",
  // Fallbacks using picsum just in case we need more textures
  texture: "https://picsum.photos/1920/1080?grayscale&blur=2",
};

export const VALUES = [
  "empatia", "segurança", "acolhimento", "transparência", "respeito", 
  "compromisso", "dedicação", "confiança", "proximidade", "humanização", "excelência"
];

export const SERVICES: ServiceItem[] = [
  // Specialties
  { id: '1', name: 'Clínico Geral', category: 'specialty' },
  { id: '2', name: 'Cardiologia', category: 'specialty' },
  { id: '3', name: 'Ginecologia', category: 'specialty' },
  { id: '4', name: 'Urologia', category: 'specialty' },
  { id: '5', name: 'Dermatologia', category: 'specialty' },
  { id: '6', name: 'Oftalmologia', category: 'specialty' },
  { id: '7', name: 'Ortopedia', category: 'specialty' },
  { id: '8', name: 'Endocrinologia', category: 'specialty' },
  { id: '9', name: 'Psiquiatria', category: 'specialty' },
  { id: '10', name: 'Urologia', category: 'specialty' },
  { id: '11', name: 'Angiologia', category: 'specialty' },
  { id: '12', name: 'Nutrição', category: 'specialty' },
  { id: '13', name: 'Gastroenterologia', category: 'specialty' },
  { id: '14', name: 'Neurologia', category: 'specialty' },
  // Ultrasounds
  { id: '15', name: 'USG Obstétrica', category: 'ultrasound' },
  { id: '16', name: 'USG Transvaginal', category: 'ultrasound' },
  { id: '17', name: 'USG Mamas', category: 'ultrasound' },
  { id: '18', name: 'USG Aparelho Urinário', category: 'ultrasound' },
  { id: '19', name: 'USG Articulações', category: 'ultrasound' },
  { id: '20', name: 'Ecocardiograma', category: 'ultrasound' },
  // Check-ups
  { id: '21', name: 'Check-up Mulher 40+', category: 'checkup' },
  { id: '22', name: 'Check-up Homem 40+', category: 'checkup' },
  { id: '23', name: 'Check-up Cardiológico', category: 'checkup' },
  { id: '24', name: 'Check-up Fitness', category: 'checkup' },
  { id: '25', name: 'Check-up Infantil', category: 'checkup' },
  { id: '26', name: 'Check-up Pré-Nupcial', category: 'checkup' },
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