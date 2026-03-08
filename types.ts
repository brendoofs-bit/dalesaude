export interface ServiceItem {
  id: string;
  name: string;
  category: 'specialty' | 'ultrasound' | 'checkup';
  description?: string;
}

export interface Benefit {
  title: string;
  description: string;
  icon: string;
}

export interface ScienceArticle {
  title: string;
  summary: string;
  source: string;
  year: string;
}