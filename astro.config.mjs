import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.ar-dach.de',
  output: 'static',
  build: {
    assets: '_astro',
  },
  image: {
    responsiveStyles: true,
  },
});
