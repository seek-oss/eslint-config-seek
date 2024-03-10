const path = require('path');
const root = require('find-root')(process.cwd());

const OFF = 0;
const ERROR = 2;

const rulesDirPlugin = require('eslint-plugin-rulesdir');
rulesDirPlugin.RULES_DIR = path.join(__dirname, 'rules');

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
  'no-fallthrough': ERROR,
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

const { js: jsExtensions, ts: tsExtensions } = require('./extensions');
const allExtensions = [...jsExtensions, ...tsExtensions];

/** @type {import('eslint').Linter.Config} */
const baseConfig = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    sourceType: 'module',
  },
  root: true,
  env: {
    node: true,
  },
  plugins: ['import'],
  extends: [
    // this config enables eslint-plugin-import to resolve JavaScript and TypeScript files
    // https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/config/typescript.js
    // Some rules provided by eslint-plugin-import e.g. `import/no-duplicates` don't work without it
    'plugin:import/typescript',
    'prettier',
  ],
  rules: {
    ...baseRules,
  },
  overrides: [
    {
      // TypeScript config
      files: [`**/*.{${tsExtensions}}`],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        // https://github.com/typescript-eslint/typescript-eslint/issues/6544
        allowAutomaticSingleRunInference: true,
        ecmaVersion: 2022,
        project: true,
        sourceType: 'module',
        warnOnUnsupportedTypeScriptVersion: false,
      },
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/stylistic',
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
        '@typescript-eslint/array-type': [ERROR, { default: 'array-simple' }],
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

        // These two rules deal with autofixing type imports/exports
        // https://typescript-eslint.io/rules/consistent-type-imports
        '@typescript-eslint/consistent-type-imports': [
          ERROR,
          { fixStyle: 'inline-type-imports' },
        ],
        // https://typescript-eslint.io/rules/consistent-type-exports
        '@typescript-eslint/consistent-type-exports': [
          ERROR,
          { fixMixedExportsWithInlineTypeSpecifier: true },
        ],
        // https://typescript-eslint.io/rules/no-import-type-side-effects
        '@typescript-eslint/no-import-type-side-effects': ERROR,

        // This rule deals with merging multiple imports from the same module.
        // In this case, we want type imports to be inlined when merging with the other imports.
        // However, there is a pending PR which improves the behaviour of this rule https://github.com/import-js/eslint-plugin-import/pull/2716
        // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-duplicates.md#inline-type-imports
        'import/no-duplicates': [ERROR, { 'prefer-inline': true }],
      },
    },
    {
      // JavaScript config
      files: [`**/*.{${jsExtensions}}`],
      env: {
        es6: true,
      },
      extends: ['plugin:import/errors', 'plugin:import/warnings'],
      settings: {
        'import/resolver': {
          node: {
            moduleDirectory: [root, 'node_modules'],
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
      files: [
        `**/__tests__/**/*.{${allExtensions}}`,
        `**/*.@(spec|test).{${allExtensions}}`,
      ],
      env: {
        jest: true,
      },
      extends: ['plugin:jest/recommended'],
      plugins: ['jest'],
    },
    {
      // Cypress config
      files: [`**/cypress/**/*.{${allExtensions}}`],
      // eslint-plugin-cypress doesn't support ESLint v8.
      // Use fork by `@finsit` until this is solved.
      // https://github.com/cypress-io/eslint-plugin-cypress/issues/89
      extends: ['plugin:@finsit/cypress/recommended'],
      env: {
        '@finsit/cypress/globals': true,
      },
      plugins: ['@finsit/cypress', 'rulesdir'],
      rules: {
        'rulesdir/unsafe-to-chain-command': ERROR,
      },
    },
  ],
};

module.exports = baseConfig;
