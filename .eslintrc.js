const path = require('path');
const root = require('find-root')(process.cwd());

const OFF = 0;
const ERROR = 2;

const baseRules = {
  // Possible Errors
  'no-console': ERROR,
  'no-unexpected-multiline': ERROR,
  'block-scoped-var': ERROR,
  curly: [ERROR, 'all'],
  'default-case': ERROR,
  'dot-notation': ERROR,
  eqeqeq: [ERROR, 'always', { null: 'ignore' }],
  'guard-for-in': ERROR,
  'no-alert': ERROR,
  'no-caller': ERROR,
  'no-div-regex': ERROR,
  'no-else-return': ERROR,
  'no-eval': ERROR,
  'no-extend-native': ERROR,
  'no-extra-bind': ERROR,
  'no-floating-decimal': ERROR,
  'no-implicit-coercion': ERROR,
  'no-implied-eval': ERROR,
  'no-iterator': ERROR,
  'no-labels': ERROR,
  'no-lone-blocks': ERROR,
  'no-loop-func': ERROR,
  'no-multi-str': ERROR,
  'no-new-func': ERROR,
  'no-new-wrappers': ERROR,
  'no-new': ERROR,
  'no-octal-escape': ERROR,
  'no-param-reassign': ERROR,
  'no-proto': ERROR,
  'no-return-assign': ERROR,
  'no-script-url': ERROR,
  'no-self-compare': ERROR,
  'no-sequences': ERROR,
  'no-throw-literal': ERROR,
  'no-useless-call': ERROR,
  'no-void': ERROR,
  'no-warning-comments': ERROR,
  radix: ERROR,
  'vars-on-top': ERROR,
  yoda: ERROR,
  strict: [ERROR, 'never'],
  'no-label-var': ERROR,
  'no-shadow': ERROR,
  'no-undef-init': ERROR,
  'no-unused-vars': [
    ERROR,
    { argsIgnorePattern: '^_', ignoreRestSiblings: true },
  ],
  'no-use-before-define': [ERROR, { functions: false }],
  'handle-callback-err': ERROR,
  'no-new-require': ERROR,
  'no-path-concat': ERROR,
  'no-process-exit': ERROR,
  'no-restricted-modules': ERROR,
  'no-sync': ERROR,
  'linebreak-style': [ERROR, 'unix'],
  'new-cap': ERROR,
  'no-lonely-if': ERROR,
  'no-nested-ternary': ERROR,
  'no-unneeded-ternary': ERROR,
  'spaced-comment': [ERROR, 'always'],
  'no-var': ERROR,
  'object-shorthand': ERROR,
  'prefer-const': ERROR,
  'prefer-spread': ERROR,
  'prefer-template': ERROR,
};

const reactRules = {
  'react/prefer-es6-class': [ERROR, 'always'],
  'react/self-closing-comp': ERROR,
  'react/jsx-pascal-case': ERROR,
  'react-hooks/rules-of-hooks': ERROR,
  'react-hooks/exhaustive-deps': ERROR,
  'react/no-children-prop': ERROR,
  'react/display-name': OFF,
  'react/prop-types': OFF,
};

const baseConfig = {
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  root: true,
  env: {
    browser: true,
    node: true,
  },
  settings: {
    react: {
      version: '>16',
    },
  },
  plugins: ['react', 'react-hooks', 'css-modules'],
  extends: [
    'plugin:css-modules/recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  rules: {
    ...baseRules,
    ...reactRules,
  },
  overrides: [
    {
      // TypeScript config
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
      },
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
      ],
      rules: {
        '@typescript-eslint/no-unused-expressions': ERROR,
        '@typescript-eslint/no-unused-vars': [
          ERROR,
          { argsIgnorePattern: '^_', ignoreRestSiblings: true },
        ],
        '@typescript-eslint/no-use-before-define': OFF,
        '@typescript-eslint/no-non-null-assertion': OFF,
        '@typescript-eslint/ban-ts-ignore': OFF,
        '@typescript-eslint/no-explicit-any': OFF,
        '@typescript-eslint/explicit-function-return-type': OFF,
        '@typescript-eslint/no-empty-function': OFF,
        '@typescript-eslint/no-empty-interface': OFF,
        // prefer TypeScript exhaustiveness checking
        // https://www.typescriptlang.org/docs/handbook/advanced-types.html#exhaustiveness-checking
        'default-case': OFF,
      },
    },
    {
      // JavaScript config
      files: ['**/*.js', '**/*.jsx'],
      env: {
        es6: true,
      },
      extends: [
        'plugin:flowtype/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
      ],
      settings: {
        'import/resolver': {
          node: {
            moduleDirectory: [root, path.join(root, 'node_modules')],
          },
        },
      },
      plugins: ['flowtype'],
      rules: {
        'no-unused-expressions': ERROR,
        'import/no-unresolved': [
          ERROR,
          { commonjs: true, amd: true, ignore: ['.svg$', '^file?'] },
        ],
        'import/no-duplicates': ERROR,
      },
    },
    {
      // Jest config
      files: ['**/__tests__/**/*.{js,ts,tsx}', '**/*.@(spec|test).{js,ts,tsx}'],
      env: {
        jest: true,
      },
      extends: ['plugin:jest/recommended'],
      plugins: ['jest'],
    },
    {
      // Cypress config
      files: ['cypress/**/*.{js,ts,tsx}'],
      env: {
        'cypress/globals': true,
      },
      extends: ['plugin:cypress/recommended'],
      plugins: ['cypress'],
    },
  ],
};

module.exports = baseConfig;
