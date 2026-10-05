export type FAQ = { q: string; a: string };

/** Valores de https://schema.org/MedicalSpecialty (para dados estruturados, quando houver) */
export type SchemaSpecialty =
  | "Cardiovascular"
  | "Gynecologic"
  | "Endocrine"
  | "Musculoskeletal"
  | "Urologic"
  | "PrimaryCare"
  | "Dermatology"
  | "Gastroenterologic"
  | "Psychiatric"
  | "Rheumatologic"
  | "Neurologic"
  | "Otolaryngologic"
  | "Geriatric"
  | "Pediatric"
  | "Obstetric"
  | "DietNutrition"
  | "Physiotherapy";

export type Specialty = {
  slug: string;
  /** Nome da especialidade, ex.: "Cardiologia" */
  name: string;
  /** Profissional, minúsculo, ex.: "cardiologista" */
  professional: string;
  /** H1 da página — termo principal + Tijuca */
  h1: string;
  /** <title> com no máximo ~60 caracteres */
  title: string;
  /** meta description com 120–155 caracteres */
  description: string;
  /** Resumo curto para cards da home e listas */
  summary: string;
  intro: string;
  treats: string[];
  whenToSeek: string[];
  /** Sinais de alerta que exigem pronto-socorro (não é atendimento da clínica) */
  urgentNote?: string;
  relatedExams: string[];
  relatedSpecialties: string[];
  faqs: FAQ[];
  schemaSpecialty?: SchemaSpecialty;
  /** Preço "a partir de" confirmado pelo cliente */
  priceFrom?: number;
  /** true para profissões não médicas (nutrição, fisioterapia) */
  nonMedical?: boolean;
  updatedAt: string;
};

export type ExamCategorySlug = "ultrassonografia" | "exames-cardiologicos";

export type ExamCategory = {
  slug: ExamCategorySlug;
  name: string;
  h1: string;
  title: string;
  description: string;
  intro: string;
  faqs: FAQ[];
  updatedAt: string;
};

export type Exam = {
  slug: string;
  name: string;
  /** Nome curto para cards, ex.: "Obstétrica" */
  shortName: string;
  /** Artigo + nome no meio de frase, ex.: { article: "a", inSentence: "ultrassonografia obstétrica" } */
  article: "o" | "a";
  inSentence: string;
  category: ExamCategorySlug;
  h1: string;
  title: string;
  description: string;
  summary: string;
  whatIs: string;
  indications: string[];
  preparation: string[];
  duration?: string;
  urgentNote?: string;
  relatedSpecialties: string[];
  relatedExams: string[];
  faqs: FAQ[];
  /** Tipo schema.org: ImagingTest (ultrassom) ou MedicalTest */
  schemaType: "ImagingTest" | "MedicalTest";
  priceFrom?: number;
  /** Mensagem pronta do WhatsApp */
  whatsappLabel: string;
  updatedAt: string;
};
