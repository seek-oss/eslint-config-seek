const react = require('eslint-plugin-react');
const reactHooks = require('eslint-plugin-react-hooks');
const base = require('./base');
const { fixupPluginRules } = require('@eslint/compat');

const globals = require('globals');
const js = require('@eslint/js');

const { FlatCompat } = require('@eslint/eslintrc');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

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
  ...compat.extends('plugin:react/recommended', 'plugin:react/jsx-runtime'),
  ...base,
  {
    plugins: {
      react,
      'react-hooks': fixupPluginRules(reactHooks),
    },

    languageOptions: {
      globals: {
        ...globals.browser,
      },

      ecmaVersion: 6,
      sourceType: 'script',

      parserOptions: {
        babelOptions: {
          presets: [require.resolve('@babel/preset-react')],
        },
      },
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
      '@typescript-eslint/no-unused-vars': [
        ERROR,
        {
          argsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
    },
  },
];
