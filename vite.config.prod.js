import { defineConfig } from 'vite';
import commonConfig from './vite.common';

const baseProject = '/personal-page/';
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
