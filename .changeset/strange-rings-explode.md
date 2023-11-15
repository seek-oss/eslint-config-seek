---
'eslint-config-seek': patch
---

Prevents the new curly-brace-presence rule from affecting children.

In the previous version, [react/jsx-curly-brace-presence][brace rule] was added to the eslint rules.
This was primarily intended to catch unnecessarily using braces around string props.

```diff
- <Stack space={'medium'}>
+ <Stack space="medium">
```

Because of the configuration we provided, this had the unintended side effect of removing curly braces inside child text that were being used to prevent the [unescaped entities rule].

```diff
- <Text>The available props are {'"up"'} and {'"down"'}</Text>
+ <Text>The available props are "up" and "down"</Text>
// This is now an unescaped entity error
```

To fix this, the curly brace rule will now ignore children, and only alert on prop values.

[brace rule]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
[unescaped entities rule]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
