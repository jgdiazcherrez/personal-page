import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';
import image from '@rollup/plugin-image';
import path from 'path';
import { config } from 'dotenv';

config();

const sourceJSPattern = /\/src\/.*\.js$/;
const baseProject = process.env.BASE_PROJECT || '/personal-page/';
const distFolderProject = process.env.DIST_FOLDER || 'docs';

export default {
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

  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx'
      }
    }
  },
  build: {
    outDir: `../${distFolderProject}`,
    emptyOutDir: true
  },
  esbuild: {
    loader: 'jsx',
    include: [sourceJSPattern],
    exclude: []
  },
  base: baseProject
};
