// @ts-nocheck
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import alpinejs from "@astrojs/alpinejs";
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site:'https://berbatphotos.com',
  vite: {
      plugins: [tailwindcss()],
    },

  integrations: [alpinejs(),sitemap({
    i18n: {
        defaultLocale: 'fr', // All urls that don't contain `es` or `fr` after `https://stargazers.club/` will be treated as default locale, i.e. `en`
        locales: {
          en: 'en-US', // The `defaultLocale` value must present in `locales` keys
          fr: 'fr-CA',
        },
      },
  })],
});