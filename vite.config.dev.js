import { defineConfig } from 'vite';
import commonConfig from './vite.common';

const baseProject = '/';
export default defineConfig(
  Object.assign(commonConfig, {
    define: {
      'process.env': {
        PRODUCTION: false,
        BASENAME: baseProject
      }
    },
    base: baseProject
  })
);
