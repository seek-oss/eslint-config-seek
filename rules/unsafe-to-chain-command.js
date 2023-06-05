/** This rule is copied from the original `eslint-plugin-cypress` so we can use the fork (which
 * supports eslint 8) while having the same recommended rules as the upstream
 * https://github.com/foretagsplatsen/eslint-plugin-cypress
 * https://github.com/cypress-io/eslint-plugin-cypress/blob/c626ad543f65babf1def5caabd1bc9bb9900d2c7/lib/rules/unsafe-to-chain-command.js
 */
// eslint-disable-next-line strict
'use strict';

module.exports = {
  meta: {
    docs: {
      description: 'Actions should be in the end of chains, not in the middle',
      category: 'Possible Errors',
      recommended: true,
      url: 'https://docs.cypress.io/guides/core-concepts/retry-ability#Actions-should-be-at-the-end-of-chains-not-the-middle',
    },
    schema: [],
    messages: {
      unexpected:
        'It is unsafe to chain further commands that rely on the subject after this command. It is best to split the chain, chaining again from `cy.` in a next command line.',
    },
  },
  create(context) {
    return {
      CallExpression(node) {
        if (
          isRootCypress(node) &&
          isActionUnsafeToChain(node) &&
          node.parent.type === 'MemberExpression'
        ) {
          context.report({ node, messageId: 'unexpected' });
        }
      },
    };
  },
};

function isRootCypress(node) {
  while (node.type === 'CallExpression') {
    if (node.callee.type !== 'MemberExpression') {
      return false;
    }

    if (
      node.callee.object.type === 'Identifier' &&
      node.callee.object.name === 'cy'
    ) {
      return true;
    }

    // eslint-disable-next-line no-param-reassign
    node = node.callee.object;
  }

  return false;
}

function isActionUnsafeToChain(node) {
  // commands listed in the documentation with text: 'It is unsafe to chain further commands that rely on the subject after xxx'
  const unsafeToChainActions = [
    'blur',
    'clear',
    'click',
    'check',
    'dblclick',
    'each',
    'focus',
    'rightclick',
    'screenshot',
    'scrollIntoView',
    'scrollTo',
    'select',
    'selectFile',
    'spread',
    'submit',
    'type',
    'trigger',
    'uncheck',
    'within',
  ];

  return (
    node.callee &&
    node.callee.property &&
    node.callee.property.type === 'Identifier' &&
    unsafeToChainActions.includes(node.callee.property.name)
  );
}
