---
'eslint-config-seek': major
---

Configure explicit exports for all entrypoints

This package now configures explicit [exports] in its `package.json` file for all entrypoints. Consumers previously importing from `eslint-config-seek/base.js` or `eslint-config-seek/extensions.js` should update their import statements to use the new explicit entrypoints:

```diff
- import 'eslint-config-seek/base.js';
+ import 'eslint-config-seek/base';

- import 'eslint-config-seek/extensions.js';
+ import 'eslint-config-seek/extensions';
```

[exports]: https://nodejs.org/api/packages.html#conditional-exports
