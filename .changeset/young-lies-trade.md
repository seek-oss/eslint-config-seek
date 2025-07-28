---
'eslint-config-seek': minor
---

Error on custom getters and setters

The [`no-restricted-syntax`](https://eslint.org/docs/latest/rules/no-restricted-syntax) rule is now preconfigured to ban custom getters and setters.

```diff
const obj = {
- get prop() {
+ prop() {
    throw new Error('Badness!');
  },
};
```

Engineers typically expect property access to be a safer operation than method or function invocation. Throwing an error from a getter can cause confusion and lead to unhandled promise rejections:

```typescript
const promise = promiseReject(); // Asynchronous error

const prop = obj.prop; // Synchronous error

await promise; // Never reached, so the promise rejection will be unhandled
```

Such issues can be tricky to spot when using static `Promise` methods like [`Promise.all`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) and [`Promise.allSettled`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled):

```typescript
await Promise.allSettled([
  promiseReject(), // Asynchronous error
  promiseResolve(obj.prop), // Synchronous error
]);
```

In the above example, a synchronous error is thrown before the asynchronous error can be handled by `Promise.allSettled`, resulting in an unhandled promise rejection. This may be clearer when we break down its evaluation steps:

```typescript
const promise1 = promiseReject(); // Throws an error asynchronously

const promise2 = promiseResolve(obj.prop); // Throws an error synchronously

const promises = [promise1, promise2];

await Promise.allSettled(promises); // Never reached, so the promise rejection will be unhandled
```
