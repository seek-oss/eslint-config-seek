module.exports = {
  rules: {
    'arrow-spacing': [2, { before: true, after: true }],
    'block-spacing': [2, 'always'],
    'brace-style': [2, '1tbs'],
    'comma-dangle': 2,
    'comma-spacing': [2, { before: false, after: true }],
    'comma-style': [2, 'last'],
    'dot-location': [2, 'property'],
    'eol-last': 2,
    indent: [2, 2, { SwitchCase: 1 }],
    'generator-star-spacing': [2, { before: false, after: true }],
    'key-spacing': [2, { beforeColon: false, afterColon: true }],
    'new-parens': 2,
    'no-extra-semi': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-multi-spaces': 2,
    'no-multiple-empty-lines': [2, { max: 1 }],
    'no-spaced-func': 2,
    'no-trailing-spaces': 2,
    'object-curly-spacing': [2, 'always'],
    'operator-linebreak': [2, 'after'],
    'padded-blocks': [2, 'never'],
    quotes: [2, 'single'],
    'semi-spacing': [2, { before: false, after: true }],
    semi: [2, 'always'],
    'space-before-blocks': [2, 'always'],
    'space-before-function-paren': [2, 'never'],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
    'template-curly-spacing': ['error', 'never'],
    'wrap-iife': 2,
    'react/jsx-wrap-multilines': 2,
    'react/jsx-closing-bracket-location': [
      2,
      { selfClosing: 'tag-aligned', nonEmpty: 'after-props' }
    ],
    'react/jsx-equals-spacing': [2, 'never'],
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-tag-spacing': [
      2,
      {
        beforeSelfClosing: 'always'
      }
    ]
  },
  plugins: ['react']
};
