// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://scicalcx.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'ja', 'fr', 'de', 'nl', 'pt', 'ko', 'it'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});

