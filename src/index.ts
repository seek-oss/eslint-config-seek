import { defineConfig } from 'eslint/config';
import { baseConfig } from './baseConfig.ts';
import react from './react.ts';

export default defineConfig({
  name: 'seek/react',
  extends: [baseConfig, react],
});
