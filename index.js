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
    { props: 'never', children: 'never', propElementValues: 'always' },
  ],
};

/** @type {import('eslint').Linter.Config} */
const eslintConfig = {
  env: {
    browser: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react', 'react-hooks'],
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    './base.js',
  ],
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('@babel/preset-react')],
    },
  },
  rules: {
    ...reactRules,
  },
  overrides: [
    {
      // temporary override until everybody removes the React import
      files: [`**/*.tsx`],
      rules: {
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
  ],
};

module.exports = eslintConfig;
