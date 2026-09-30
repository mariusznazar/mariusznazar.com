// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://mariusznazar.com',
  i18n: {
    locales: ['pl', 'en'],
    defaultLocale: 'pl',
    routing: { prefixDefaultLocale: false },
  },
});
