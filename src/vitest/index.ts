import { defineConfig } from 'eslint/config';
import { baseConfig } from './baseConfig.ts';
import react from '../react.ts';

export default defineConfig({
  name: 'seek/vitest/react',
  extends: [baseConfig, react],
});
