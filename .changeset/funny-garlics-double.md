---
'eslint-config-seek': patch
---

Replace `eslint-plugin-cypress` with the [`@finsit/eslint-plugin-cypress`] fork that supports ESLint v8.
Consumers that were overriding `cypress` rules will need instead override `@finsit/cypress` rules.

[`@finsit/eslint-plugin-cypress`]: https://github.com/foretagsplatsen/eslint-plugin-cypress
