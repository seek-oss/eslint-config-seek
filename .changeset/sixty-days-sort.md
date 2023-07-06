---
'eslint-config-seek': patch
---

Disable resolving `node_modules` from the root of the repo. This is problematic for JavaScript-only monorepos (where there are multiple `node_modules` directories).
