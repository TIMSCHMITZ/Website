import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://schmitz-systemarchitektur.de',
  output: 'static',
  build: { assets: 'assets' },
});
