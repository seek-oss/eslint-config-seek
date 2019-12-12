const path = require('path');
const root = require('find-root')(process.cwd());

module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: { jsx: true }
  },
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
    'cypress/globals': true
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      node: {
        moduleDirectory: [root, path.join(root, 'node_modules')],
        extensions: ['.js', '.ts', '.tsx']
      }
    },
    react: {
      version: '>16'
    }
  },
  rules: {
    // Possible Errors
    'no-cond-assign': 'error',
    'no-console': 'error',
    'no-constant-condition': 'error',
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-dupe-args': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty-character-class': 'error',
    'no-empty': 'error',
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-parens': 'off',
    'no-func-assign': 'error',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-negated-in-lhs': 'error',
    'no-obj-calls': 'error',
    'no-regex-spaces': 'error',
    'no-sparse-arrays': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    'use-isnan': 'error',
    'valid-jsdoc': 'off',
    'valid-typeof': 'error',

    // Best Practices
    'accessor-pairs': 'off',
    'block-scoped-var': 'error',
    complexity: 'off',
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
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-implicit-coercion': 'error',
    'no-implied-eval': 'error',
    'no-invalid-this': 'off',
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-multi-str': 'error',
    'no-native-reassign': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-new': 'error',
    'no-octal-escape': 'error',
    'no-octal': 'error',
    'no-param-reassign': 'error',
    'no-process-env': 'off',
    'no-proto': 'error',
    'no-redeclare': 'error',
    'no-return-assign': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unused-expressions': 'error',
    'no-useless-call': 'error',
    'no-void': 'error',
    'no-warning-comments': 'error',
    'no-with': 'error',
    radix: 'error',
    'vars-on-top': 'error',
    yoda: 'error',

    // Strict Mode
    strict: ['error', 'never'],

    // Variables
    'init-declarations': 'off',
    'no-catch-shadow': 'off',
    'no-delete-var': 'error',
    'no-label-var': 'error',
    'no-shadow-restricted-names': 'error',
    'no-shadow': 'error',
    'no-undef-init': 'error',
    'no-undef': 'error',
    'no-undefined': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-use-before-define': 'error',

    // Node.js
    'callback-return': 'off',
    'handle-callback-err': 'error',
    'no-mixed-requires': 'off',
    'no-new-require': 'error',
    'no-path-concat': 'error',
    'no-process-exit': 'error',
    'no-restricted-modules': 'error',
    'no-sync': 'error',

    // Stylistic Issues
    'func-style': 'off', // expressions vs declrations?
    'linebreak-style': ['error', 'unix'],
    'new-cap': 'error',
    'no-lonely-if': 'error',
    'no-nested-ternary': 'error',
    'no-unneeded-ternary': 'error',
    'spaced-comment': ['error', 'always'],

    // ECMAScript 6
    'constructor-super': 'error',
    'no-class-assign': 'error',
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-this-before-super': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-arrow-callback': 'off', // enable with babel-plugin-closure-elimination for optimization
    'prefer-const': 'error',
    'prefer-spread': 'error',
    'prefer-reflect': 'off',
    'prefer-template': 'error',
    'require-yield': 'error',

    // React
    'react/display-name': 'off',
    'react/forbid-prop-types': 'off',
    'react/no-comment-textnodes': 'off',
    'react/no-danger': 'error',
    'react/no-deprecated': 'error',
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-is-mounted': 'error',
    'react/no-multi-comp': ['error', { ignoreStateless: true }],
    'react/no-render-return-value': 'error',
    'react/no-set-state': 'off',
    'react/no-string-refs': 'error',
    'react/no-unknown-property': 'error',
    'react/prefer-es6-class': ['error', 'always'],
    'react/prefer-stateless-function': 'off', // 'error',
    'react/prop-types': ['error', { skipUndeclared: true }],
    'react/react-in-jsx-scope': 'error',
    'react/require-extension': 'off',
    'react/require-optimization': 'off',
    'react/require-render-return': 'error',
    'react/self-closing-comp': 'error',
    'react/sort-comp': 'error',
    'react/sort-prop-types': 'off',
    'react/jsx-boolean-value': 'off',
    'react/jsx-curly-spacing': 'off', // [2, "never", { "allowMultiline": false }],
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],
    'react/jsx-handler-names': 'off', // 'error',
    'react/jsx-key': 'error',
    'react/jsx-max-props-per-line': 'off',
    'react/jsx-no-bind': 'off',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-literals': 'off',
    'react/jsx-no-target-blank': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-pascal-case': 'error',
    'react/jsx-sort-props': 'off',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',

    // import errors
    'import/no-unresolved': [
      'error',
      {
        commonjs: true,
        amd: true,
        ignore: ['.svg$', '^file?']
      }
    ],
    'import/named': 'error',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error'
  },
  plugins: ['react', 'react-hooks', 'css-modules', 'import', 'flowtype', 'cypress', 'jest'],
  extends: [
    'plugin:jest/recommended',
    'plugin:css-modules/recommended',
    'prettier',
    'plugin:flowtype/recommended',
    'plugin:cypress/recommended'
  ]
};
