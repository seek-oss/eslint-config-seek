const path = require('path');
const root = require('find-root')(process.cwd());

const rules = {
  // Possible Errors
  'no-console': 'error',
  'no-unexpected-multiline': 'error',
  'block-scoped-var': 'error',
  'consistent-return': 'error',
  curly: ['error', 'all'],
  'default-case': 'error',
  'dot-notation': 'error',
  eqeqeq: 'error',
  'guard-for-in': 'error',
  'no-alert': 'error',
  'no-caller': 'error',
  'no-div-regex': 'error',
  'no-else-return': 'error',
  'no-eq-null': 'error',
  'no-eval': 'error',
  'no-extend-native': 'error',
  'no-extra-bind': 'error',
  'no-floating-decimal': 'error',
  'no-implicit-coercion': 'error',
  'no-implied-eval': 'error',
  'no-iterator': 'error',
  'no-labels': 'error',
  'no-lone-blocks': 'error',
  'no-loop-func': 'error',
  'no-multi-str': 'error',
  'no-new-func': 'error',
  'no-new-wrappers': 'error',
  'no-new': 'error',
  'no-octal-escape': 'error',
  'no-param-reassign': 'error',
  'no-proto': 'error',
  'no-return-assign': 'error',
  'no-script-url': 'error',
  'no-self-compare': 'error',
  'no-sequences': 'error',
  'no-throw-literal': 'error',
  'no-unused-expressions': 'error',
  'no-useless-call': 'error',
  'no-void': 'error',
  'no-warning-comments': 'error',
  radix: 'error',
  'vars-on-top': 'error',
  yoda: 'error',
  strict: ['error', 'never'],
  'no-label-var': 'error',
  'no-shadow': 'error',
  'no-undef-init': 'error',
  'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  'no-use-before-define': 'error',
  'handle-callback-err': 'error',
  'no-new-require': 'error',
  'no-path-concat': 'error',
  'no-process-exit': 'error',
  'no-restricted-modules': 'error',
  'no-sync': 'error',
  'linebreak-style': ['error', 'unix'],
  'new-cap': 'error',
  'no-lonely-if': 'error',
  'no-nested-ternary': 'error',
  'no-unneeded-ternary': 'error',
  'spaced-comment': ['error', 'always'],
  'no-var': 'error',
  'object-shorthand': 'error',
  'prefer-const': 'error',
  'prefer-spread': 'error',
  'prefer-template': 'error',
  'react/no-danger': 'error',
  'react/no-did-mount-set-state': 'error',
  'react/no-did-update-set-state': 'error',
  'react/no-multi-comp': ['error', { ignoreStateless: true }],
  'react/prefer-es6-class': ['error', 'always'],
  'react/self-closing-comp': 'error',
  'react/sort-comp': 'error',
  'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],
  'react/jsx-pascal-case': 'error',
  'react-hooks/rules-of-hooks': 'error',
  'react-hooks/exhaustive-deps': 'error',
  'react/display-name': 0,
  'react/prop-types': 0,
<<<<<<< HEAD
  'react/no-children-prop': 'warn',
  'react/jsx-filename-extension': 'off',
  'react/no-children-prop': 'off',
=======
>>>>>>> ae56ac99558a2223f11d201479ce057d12edd806
};

const jsRules = {
  'import/no-unresolved': [
    'error',
    { commonjs: true, amd: true, ignore: ['.svg$', '^file?'] },
  ],
  'import/named': 'error',
  'import/namespace': 'error',
  'import/default': 'error',
  'import/export': 'error',
  'import/no-duplicates': 'error',
};

const commonExtends = [
  'plugin:css-modules/recommended',
  'plugin:cypress/recommended',
  'plugin:jest/recommended',
  'plugin:react/recommended',
  'prettier',
];

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
    es6: true,
    jest: true,
    'cypress/globals': true,
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: [root, path.join(root, 'node_modules')],
        extensions: ['.js', '.ts', '.tsx'],
      },
    },
    react: {
      version: '>16',
    },
  },
  rules,
  plugins: [
    'react',
    'react-hooks',
    'css-modules',
    // 'import',

    'cypress',
    'jest',
  ],
  extends: commonExtends,
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      settings: {
        'import/parsers': {
          'babel-eslint': ['.js'],
        },
      },
      extends: [
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        ...commonExtends,
      ],
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
      },
      rules: {
        ...rules,
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        // 'react/jsx-filename-extension': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
      },
    },
    {
      files: ['**/*.js', '**/*.jsx'],
      rules: jsRules,
      extends: [
        'plugin:flowtype/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
      ],
      plugins: ['flowtype'],
    },
  ],
};

module.exports = baseConfig;
