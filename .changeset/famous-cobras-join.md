---
'eslint-config-seek': patch
---

Revert from [`@finsit/eslint-plugin-cypress`] back to [`eslint-plugin-cypress`]

The official plugin now supports ESLint v8. Consumers that were overriding `@finsit/cypress/*` rules will need to override `cypress/*` rules instead.

[`@finsit/eslint-plugin-cypress`]: https://github.com/foretagsplatsen/eslint-plugin-cypress
[`eslint-plugin-cypress`]: https://github.com/cypress-io/eslint-plugin-cypress
