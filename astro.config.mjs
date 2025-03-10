// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://CarlosCruzadoD.github.io',
  base: 'landing-page-astro-ie',
  vite: {
    plugins: [tailwindcss()]
  }
});