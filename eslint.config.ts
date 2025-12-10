import { defineConfig } from 'eslint/config';
import config from './src/base.ts';

export default defineConfig({ extends: [config], ignores: ['dist/**/*'] });
