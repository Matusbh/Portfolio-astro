import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://matdevs.com',
  base: '/',
  adapter: vercel(),
  i18n: {
    defaultLocale: 'es',
    // Para añadir eslovaco o checo: añade 'sk' / 'cs' aquí y crea src/i18n/sk.ts
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
