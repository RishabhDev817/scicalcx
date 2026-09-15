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

    // Error pages gracefully route to target language root
    if (base === '/404' || base === '/500' || base.startsWith('/404') || base.startsWith('/500')) {
      return !showDefaultLang && targetLang === defaultLang ? '/' : `/${targetLang}/`;
    }

    // Untranslated blog posts gracefully route to target language blog index
    if (base.startsWith('/blog/') && base !== '/blog') {
      const slug = base.replace('/blog/', '').replace(/\/$/, '');
      const translatedSlugs = new Set(['time-complexity', 'pointers-cpp', 'calculator-cpp']);
      if (!translatedSlugs.has(slug) && targetLang !== defaultLang) {
        return `/${targetLang}/blog/`;
      }
    }

    const normalizedBase = base === '/' ? '/' : (base.endsWith('/') ? base : `${base}/`);
    if (!showDefaultLang && targetLang === defaultLang) {
      return normalizedBase;
    }
    return normalizedBase === '/' ? `/${targetLang}/` : `/${targetLang}${normalizedBase}`;
  };
}

export interface AlternateLink {
  lang: string;
  href: string;
}

/**
 * Generates all alternate links for hreflang markup (all supported languages + x-default).
 * Ensures exact canonical URL trailing slash consistency and prevents nonexistent links.
 */
export function getAlternateLanguageLinks(url: URL, site = 'https://scicalcx.com'): AlternateLink[] {
  const base = getBaseRoute(url.pathname);
  
  // Never emit hreflang links on error pages
  if (base === '/404' || base === '/500' || base.startsWith('/404') || base.startsWith('/500')) {
    return [];
  }

  const cleanSite = site.endsWith('/') ? site.slice(0, -1) : site;
  const normalizedBasePath = base === '/' ? '/' : (base.endsWith('/') ? base : `${base}/`);

  const links: AlternateLink[] = [
    {
      lang: 'x-default',
      href: `${cleanSite}${normalizedBasePath}`,
    },
  ];

  // If this is an individual blog post, only link languages that genuinely have this post
  if (normalizedBasePath.startsWith('/blog/') && normalizedBasePath !== '/blog/') {
    const slug = normalizedBasePath.replace('/blog/', '').replace(/\/$/, '');
    const translatedSlugs = new Set(['time-complexity', 'pointers-cpp', 'calculator-cpp']);
    
    links.push({
      lang: 'en',
      href: `${cleanSite}${normalizedBasePath}`,
    });

    if (translatedSlugs.has(slug)) {
      const langsWithTranslations: SupportedLanguage[] = ['es', 'ja', 'fr', 'de', 'nl', 'pt', 'ko', 'it'];
      for (const l of langsWithTranslations) {
        links.push({
          lang: l,
          href: `${cleanSite}/${l}${normalizedBasePath}`,
        });
      }
    }

    return links;
  }

  for (const l of supportedLanguages) {
    if (!showDefaultLang && l === defaultLang) {
      links.push({
        lang: l,
        href: `${cleanSite}${normalizedBasePath}`,
      });
    } else {
      links.push({
        lang: l,
        href: normalizedBasePath === '/' ? `${cleanSite}/${l}/` : `${cleanSite}/${l}${normalizedBasePath}`,
      });
    }
  }

  return links;
}

