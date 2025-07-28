---
'eslint-config-seek': minor
---

Error on custom getters and setters

The [`no-restricted-syntax`](https://eslint.org/docs/latest/rules/no-restricted-syntax) rule is now preconfigured to ban custom getters and setters. Engineers typically expect property access to be a safer operation than method or function invocation. Throwing an error from a getter can cause confusion and unhandled promise rejections, which can lead to a crash on the server side if [not appropriately configured](https://nodejs.org/api/process.html#event-unhandledrejection). See the PR for more information.

```diff
const obj = {
- get prop() {
+ prop() {
    throw new Error('Badness!');
  },
};
```
