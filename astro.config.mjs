import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://timschmitz.github.io',
  base: '/Website/',
  output: 'static',
  build: { assets: 'assets' },
});
