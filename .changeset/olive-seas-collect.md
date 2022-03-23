---
'eslint-config-seek': major
---

Support ESLint 8.x

We've upgraded the parsers and plugins bundled in `eslint-config-seek` for ESLint 8.x compatibility. Some linting rules have changed and may require manual triage. In particular, we've applied the following major upgrades:

- [TypeScript ESLint v5](https://github.com/typescript-eslint/typescript-eslint/releases/tag/v5.0.0)

  This includes changes to the recommended rule set.

- [`babel-eslint`](https://www.npmjs.com/package/babel-eslint) → [`@babel/eslint-parser`](https://www.npmjs.com/package/@babel/eslint-parser)

  This resolves the following installation warning:

  ```console
  babel-eslint is now @babel/eslint-parser. This package will no longer receive updates.
  ```

- [`eslint-config-prettier` v8](https://github.com/prettier/eslint-config-prettier/blob/HEAD/CHANGELOG.md?rgh-link-date=2021-10-18T05%3A10%3A39Z#version-800-2021-02-21)

  This unifies on a single `prettier` config.

[`eslint-plugin-cypress`](https://github.com/cypress-io/eslint-plugin-cypress/issues/89) is currently incompatible with ESLint 8.x. Projects that utilise Cypress should remain on ESLint 7.x.
