import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';
import image from '@rollup/plugin-image';
import path from 'path';

const sourceJSPattern = /\/src\/.*\.js$/;

// https://vitejs.dev/config/
export default defineConfig({
  root: 'src',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/')
    },
    extensions: ['.js']
  },
  plugins: [
    react(),
    image(),
    createHtmlPlugin({
      entry: 'index.js',
      filename: 'index.html',
      template: 'index.html'
    })
  ],
  define: {
    'process.env': {
      PRODUCTION: JSON.stringify(false)
    }
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx'
      }
    }
  },
  build: {
    outDir: '../docs',
    emptyOutDir: true // also necessary
  },
  esbuild: {
    loader: 'jsx',
    include: [sourceJSPattern],
    exclude: []
  }
});
