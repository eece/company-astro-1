import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
