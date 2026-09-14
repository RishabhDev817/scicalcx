import type { SupportedLanguage } from '../ui';
import { enInfo } from './info/en';
import { esInfo } from './info/es';
import { jaInfo } from './info/ja';
import { frInfo } from './info/fr';
import { deInfo } from './info/de';
import { nlInfo } from './info/nl';
import { ptInfo } from './info/pt';
import { koInfo } from './info/ko';
import { itInfo } from './info/it';

export interface InfoPageContent {
  about: {
    badge: string;
    heading: string;
    subheading: string;
    missionBadge: string;
    missionP1: string;
    missionP2: string;
    teamBadge: string;
    teamTitle: string;
    standardsBadge: string;
    standardsTitle: string;
    standardsIntro: string;
    standards: { label: string; text: string }[];
    architectureBadge: string;
    architectureTitle: string;
    architectureDesc: string;
  };
  contact: {
    badge: string;
    heading: string;
    subheading: string;
    directTitle: string;
    emailLabel: string;
    repoLabel: string;
    responseLabel: string;
    responseTime: string;
    formTitle: string;
    nameLabel: string;
    emailInputLabel: string;
    subjectLabel: string;
    messageLabel: string;
    submitBtn: string;
    successNotice: string;
  };
  terms: {
    badge: string;
    heading: string;
    subheading: string;
    sections: { title: string; body?: string; paragraphs?: string[] }[];
  };
  privacy: {
    badge: string;
    heading: string;
    subheading: string;
    sections: { title: string; body?: string; paragraphs?: string[] }[];
  };
  editorial: {
    badge: string;
    heading: string;
    subheading: string;
    sections: { title: string; paragraphs: string[] }[];
  };
}

export const infoPages: Record<SupportedLanguage, InfoPageContent> = {
  en: enInfo,
  es: esInfo,
  ja: jaInfo,
  fr: frInfo,
  de: deInfo,
  nl: nlInfo,
  pt: ptInfo,
  ko: koInfo,
  it: itInfo,
};

export function getInfoContent(page: keyof InfoPageContent, lang: SupportedLanguage = 'en') {
  const content = infoPages[lang] || infoPages.en;
  return content[page] || infoPages.en[page];
}
