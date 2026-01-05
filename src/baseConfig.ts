import shared from './shared.ts';
import jestPlugin from 'eslint-plugin-jest';
import { js as jsExtensions, ts as tsExtensions } from './extensions.ts';
import { defineConfig } from 'eslint/config';

const allExtensions = [...jsExtensions, ...tsExtensions];

export const baseConfig = defineConfig([
  {
    name: 'seek/base',
    extends: [shared],
  },
  { plugins: { jest: jestPlugin } },
  {
    name: 'jest',
    files: [
      `**/__tests__/**/*.{${allExtensions}}`,
      `**/*.@(spec|test).{${allExtensions}}`,
    ],
    extends: [jestPlugin.configs['flat/recommended']],
    languageOptions: {
      globals: jestPlugin.environments.globals.globals,
    },
  },
]);
