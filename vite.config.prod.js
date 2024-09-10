import { defineConfig } from 'vite';
import commonConfig from './vite.common';

const baseProject = process.env.BASE_PROJECT || '/personal-page/';
export default defineConfig(
  Object.assign(commonConfig, {
    define: {
      'process.env': {
        PRODUCTION: true,
        BASENAME: baseProject
      }
    },
    base: baseProject
  })
);
