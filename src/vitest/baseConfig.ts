import { defineConfig } from 'eslint/config';
import shared from '../shared.ts';
import vitest from '@vitest/eslint-plugin';
import { js as jsExtensions, ts as tsExtensions } from '../extensions.ts';

const allExtensions = [...jsExtensions, ...tsExtensions];

export const baseConfig = defineConfig([
  {
    name: 'seek/vitest/base',
    extends: [shared],
  },
  { plugins: { vitest } },
  {
    name: 'vitest',
    files: [
      `**/__tests__/**/*.{${allExtensions}}`,
      `**/*.@(spec|test).{${allExtensions}}`,
    ],
    extends: [vitest.configs.recommended],
    rules: {
      'vitest/no-focused-tests': ['error', { fixable: false }],
    },
  },
]);
