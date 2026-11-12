import { defineConfig } from 'vite';
import purgecss from 'vite-plugin-purgecss';

export default defineConfig({
  // Reemplaza 'PortafolioCesarOrtiz' por el nombre exacto de tu repositorio en GitHub
  base: '/PortafolioCesarOrtiz/', 
  plugins: [
    purgecss({
      content: ['./index.html', './src/**/*.js'],
    }),
  ],
  build: {
    minify: true,
    cssMinify: true,
  },
});