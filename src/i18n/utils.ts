import { ui, defaultLang, showDefaultLang, languages, supportedLanguages, type SupportedLanguage } from './ui';

/**
 * Extracts the supported language from a URL pathname, or falls back to defaultLang ('en').
 */
export function getLangFromUrl(url: URL): SupportedLanguage {
  const [, lang] = url.pathname.split('/');
  if (lang && lang in languages) {
    return lang as SupportedLanguage;
  }
  return defaultLang;
}

/**
 * Returns a translation lookup function for the given language.
 */
export function useTranslations(lang: SupportedLanguage) {
  const localizedUI = ui[lang] || ui[defaultLang];
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return (localizedUI as Record<string, string>)[key] ?? (ui[defaultLang] as Record<string, string>)[key] ?? key;
  };
}

/**
 * Returns clean base route without language prefix.
 * e.g. "/es/matrix" -> "/matrix", "/es" -> "/", "/calculus" -> "/calculus"
 */
export function getBaseRoute(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length > 0 && segments[0] in languages) {
    segments.shift();
  }
  return segments.length === 0 ? '/' : `/${segments.join('/')}`;
}

/**
 * Returns a path translation helper function for the current language.
 */
export function useTranslatedPath(lang: SupportedLanguage) {
  return function translatePath(path: string, targetLang: SupportedLanguage = lang): string {
    const base = getBaseRoute(path);
    if (!showDefaultLang && targetLang === defaultLang) {
      return base;
    }
    return base === '/' ? `/${targetLang}/` : `/${targetLang}${base}`;
  };
}

export interface AlternateLink {
  lang: string;
  href: string;
}

/**
 * Generates all alternate links for hreflang markup (all 8 supported languages + x-default).
 */
export function getAlternateLanguageLinks(url: URL, site = 'https://scicalcx.com'): AlternateLink[] {
  const base = getBaseRoute(url.pathname);
  const cleanSite = site.endsWith('/') ? site.slice(0, -1) : site;
  const basePath = base === '/' ? '/' : base;

  const links: AlternateLink[] = [
    {
      lang: 'x-default',
      href: `${cleanSite}${basePath}`,
    },
  ];

  // If this is an individual blog post, only link languages that genuinely have this post
  if (basePath.startsWith('/blog/') && basePath !== '/blog') {
    const slug = basePath.replace('/blog/', '').replace(/\/$/, '');
    const translatedSlugs = new Set(['time-complexity', 'pointers-cpp', 'calculator-cpp']);
    
    links.push({
      lang: 'en',
      href: `${cleanSite}${basePath}`,
    });

    if (translatedSlugs.has(slug)) {
      const langsWithTranslations: SupportedLanguage[] = ['es', 'fr', 'de'];
      for (const l of langsWithTranslations) {
        links.push({
          lang: l,
          href: `${cleanSite}/${l}${basePath}`,
        });
      }
    }

    return links;
  }

  for (const l of supportedLanguages) {
    if (!showDefaultLang && l === defaultLang) {
      links.push({
        lang: l,
        href: `${cleanSite}${basePath}`,
      });
    } else {
      links.push({
        lang: l,
        href: basePath === '/' ? `${cleanSite}/${l}/` : `${cleanSite}/${l}${basePath}`,
      });
    }
  }

  return links;
}
