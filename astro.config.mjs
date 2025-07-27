// @ts-nocheck
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import alpinejs from "@astrojs/alpinejs";
import sitemap from '@astrojs/sitemap';
// import netlify from '@astrojs/netlify';

export default defineConfig({
  // experimental: {
  //   session: true,
  // },
  site:'https://berbatphotos.com',
  vite: {
      plugins: [tailwindcss()],
  },
  // output: 'server',
  // adapter: netlify({
  //   edge: false // default, you don't need edge
  // }),
  integrations: [alpinejs(),sitemap({
    i18n: {
        defaultLocale: 'en', // All urls that don't contain `es` or `fr` after `https://stargazers.club/` will be treated as default locale, i.e. `en`
        locales: {
          en: 'en-US', // The `defaultLocale` value must present in `locales` keys
          fr: 'fr-FR',
        },
      },
  })],
});