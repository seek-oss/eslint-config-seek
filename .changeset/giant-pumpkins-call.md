---
'eslint-config-seek': patch
---

Use the `eslint-plugin-cypress/flat` configuration.

`eslint-config-seek` has moved over to the new flat config format for `eslint9`. 
The `base.js` file was incorrectly pointing towards the `legacy` config which is in the old format.
