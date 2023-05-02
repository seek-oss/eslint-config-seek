---
'eslint-config-seek': minor
---

Export extensions linted by the config

They are now available under the `/extensions` entry point:

```js
const { js, ts } = require('eslint-config-seek/extensions');
// js: ['js', 'cjs', 'mjs', 'jsx']
// ts: ['ts', 'cts', 'mts', 'tsx']
```
