import preact from '@preact/preset-vite';
import { resolve } from 'path';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  base: './',
  build: {
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        iframe: resolve(__dirname, 'iframe.html'),
      },
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        math: 'always',
        globalVars: {
          mainColor: 'red',
        },
      },
    },
  },
  plugins: [preact()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 5137,
    open: true,
  },
});
