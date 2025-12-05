export enum Tab {
  DASHBOARD = 'DASHBOARD',
  CALENDAR = 'CALENDAR',
  GENERATOR = 'GENERATOR',
  STRATEGY = 'STRATEGY'
}

export enum ContentFormat {
  REELS = 'Reels',
  STORIES = 'Stories',
  CAROUSEL = 'Carrossel',
  PHOTO = 'Foto (Feed)',
  WHATSAPP = 'WhatsApp'
}

export interface CalendarDay {
  day: string;
  format: ContentFormat;
  idea: string;
  cta: string;
}

export interface ContentPillar {
  title: string;
  description: string;
  icon: string;
}

export interface Persona {
  who: string;
  painPoints: string[];
  interests: string[];
  location: string;
}

export interface CampaignData {
  objective: string;
  concept: string;
  persona: Persona;
  pillars: ContentPillar[];
  calendar: CalendarDay[];
}