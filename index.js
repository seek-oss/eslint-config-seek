const react = require('eslint-plugin-react');
const reactHooks = require('eslint-plugin-react-hooks');
const base = require('./base');
const { fixupPluginRules } = require('@eslint/compat');

const globals = require('globals');

const OFF = 0;
const ERROR = 2;

const reactRules = {
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

module.exports = [
  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],
  ...base,
  {
    plugins: {
      react,
      'react-hooks': fixupPluginRules(reactHooks),
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
  {
    files: ['**/*.tsx'],

    rules: {
      // temporary override until everybody removes the React import
      '@typescript-eslint/no-unused-vars': [
        ERROR,
        {
          argsIgnorePattern: '^_',
          ignoreRestSiblings: true,
          varsIgnorePattern: '^React$',
        },
      ],
    },
  },
];
