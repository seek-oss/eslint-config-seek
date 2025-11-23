import { defineConfig } from 'eslint/config';
import base from './base.ts';
import react from './react.ts';

export default defineConfig({
  name: 'seek/react',
  extends: [base, react],
});
