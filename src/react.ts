import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import { defineConfig, type Config } from 'eslint/config';

import globals from 'globals';

const OFF = 0;
const ERROR = 2;

const reactRules: Config['rules'] = {
  'react/prefer-es6-class': [ERROR, 'always'],
  'react/self-closing-comp': ERROR,
  'react/jsx-pascal-case': ERROR,
  'react-hooks/rules-of-hooks': ERROR,
  'react-hooks/exhaustive-deps': ERROR,
  'react/no-children-prop': ERROR,
  'react/display-name': OFF,
  'react/prop-types': OFF,
  'react/jsx-curly-brace-presence': [
    ERROR,
    { props: 'never', children: 'ignore', propElementValues: 'always' },
  ],
};

export default defineConfig([
  {
    name: 'react',
    extends: [
      react.configs.flat.recommended,
      react.configs.flat['jsx-runtime'],
    ],
    plugins: {
      react,
      'react-hooks': reactHooks,
    },
    languageOptions: {
      globals: globals.browser,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },

    rules: reactRules,
  },
]);
