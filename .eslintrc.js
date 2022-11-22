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
  // Allow devs to choose between performance and richer stack traces
  // https://eslint.org/docs/rules/no-return-await#when-not-to-use-it
  // https://github.com/goldbergyoni/nodebestpractices/blob/master@%7B2022-01-01T00:00:00Z%7D/sections/errorhandling/returningpromises.md
  'no-return-await': OFF,
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

/** @type {import('eslint').Linter.Config} */
const baseConfig = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
    requireConfigFile: false,
    sourceType: 'module',
  },
  root: true,
  env: {
    browser: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react', 'react-hooks', 'import'],
  extends: [
    'plugin:react/recommended',
    // this config enables eslint-plugin-import to resolve JavaScript and TypeScript files
    // https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/config/typescript.js
    // Some rules provided by eslint-plugin-import e.g. `import/no-duplicates` don't work without it
    'plugin:import/typescript',
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
        'prettier',
      ],
      settings: {
        // adds comprehensive TypeScript support to eslint-plugin-import
        // https://github.com/import-js/eslint-import-resolver-typescript
        'import/resolver': {
          typescript: {},
        },
      },
      rules: {
        '@typescript-eslint/no-unused-expressions': ERROR,
        '@typescript-eslint/no-unused-vars': [
          ERROR,
          { argsIgnorePattern: '^_', ignoreRestSiblings: true },
        ],
        '@typescript-eslint/no-use-before-define': OFF,
        '@typescript-eslint/no-non-null-assertion': OFF,
        '@typescript-eslint/ban-ts-comment': OFF,
        '@typescript-eslint/no-explicit-any': OFF,
        '@typescript-eslint/explicit-function-return-type': OFF,
        '@typescript-eslint/no-empty-function': OFF,
        '@typescript-eslint/no-empty-interface': OFF,
        '@typescript-eslint/no-inferrable-types': [
          ERROR,
          { ignoreParameters: true },
        ],
        // prefer TypeScript exhaustiveness checking
        // https://www.typescriptlang.org/docs/handbook/advanced-types.html#exhaustiveness-checking
        'default-case': OFF,
        'arrow-body-style': [ERROR, 'as-needed'],
        // Use `typescript-eslint`'s no-shadow to avoid false positives with enums
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-shadow.md
        'no-shadow': OFF,
        '@typescript-eslint/no-shadow': ERROR,
      },
    },
    {
      // JavaScript config
      files: ['**/*.js', '**/*.jsx'],
      env: {
        es6: true,
      },
      extends: ['plugin:import/errors', 'plugin:import/warnings'],
      settings: {
        'import/resolver': {
          node: {
            moduleDirectory: [root, path.join(root, 'node_modules')],
          },
        },
      },
      rules: {
        'no-undef': ERROR,
        'no-use-before-define': [ERROR, { functions: false }],
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
      files: ['**/cypress/**/*.{js,ts,tsx}'],
      env: {
        'cypress/globals': true,
      },
      extends: ['plugin:cypress/recommended'],
      plugins: ['cypress'],
    },
  ],
};

module.exports = baseConfig;
