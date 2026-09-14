import type { SupportedLanguage } from '../i18n/ui';
import { enPedagogy } from './calculator/en';
import { esPedagogy } from './calculator/es';
import { frPedagogy } from './calculator/fr';
import { dePedagogy } from './calculator/de';
import { jaPedagogy } from './calculator/ja';
import { nlPedagogy } from './calculator/nl';
import { ptPedagogy } from './calculator/pt';
import { itPedagogy } from './calculator/it';
import { koPedagogy } from './calculator/ko';

export interface CalculatorPedagogyData {
  conceptTitle: string;
  conceptBadge: string;
  conceptDescription: string[];
  howToSteps: string[];
  formulas: { title: string; math: string; explanation: string }[];
  workedExample: {
    title: string;
    input: string;
    steps: { label: string; expression: string; note: string }[];
    result: string;
    explanation: string;
  };
  howItWorks: {
    title: string;
    paragraphs: string[];
  };
  limitations: {
    title: string;
    points: string[];
  };
  commonMistakes: {
    mistake: string;
    fix: string;
  }[];
  useCases: {
    title: string;
    desc: string;
  }[];
  relatedTools: {
    title: string;
    desc: string;
    href: string;
    badge: string;
  }[];
}

const pedagogies: Record<SupportedLanguage, Record<string, CalculatorPedagogyData>> = {
  en: enPedagogy,
  es: esPedagogy,
  fr: frPedagogy,
  de: dePedagogy,
  ja: jaPedagogy,
  nl: nlPedagogy,
  pt: ptPedagogy,
  it: itPedagogy,
  ko: koPedagogy,
};

// Export default English data for backwards compatibility
export const calculatorData: Record<string, CalculatorPedagogyData> = enPedagogy;

/**
 * Retrieves the pedagogy dataset for a specific calculator tool localized to the requested language.
 * Falls back to English if the tool or language key is not found.
 */
export function getCalculatorPedagogy(tool: string, lang: SupportedLanguage = 'en'): CalculatorPedagogyData {
  const langPedagogy = pedagogies[lang] || pedagogies.en;
  return langPedagogy[tool] || pedagogies.en[tool];
}
