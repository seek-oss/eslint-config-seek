---
'eslint-config-seek': minor
---

Adds [no-fallthrough][docs] as an error.
This disallows fallthrough of case statements in switch statements.

[docs]: https://eslint.org/docs/latest/rules/no-fallthrough

### Examples

You need to add a `break`, `return` or `throw` to each case.

```diff
switch (name) {
  case 'John':
    console.log('Hi John');
+   break;
}
```
