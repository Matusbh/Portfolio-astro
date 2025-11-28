import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://matusbh.github.io',
  base: '/Portfolio-astro/',
  vite: {
    plugins: [tailwindcss()],
  },
});
