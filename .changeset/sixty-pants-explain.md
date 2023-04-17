---
"eslint-config-seek": minor
---

Split config into default (current) and base (without a React dependency).

Without React support:

```json
{
  "extends": "seek/base"
}
```

With React support:

```json
{
  "extends": "seek"
}
```
