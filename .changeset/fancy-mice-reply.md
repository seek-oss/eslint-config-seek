---
'eslint-config-seek': minor
---

Expose 2 Vitest-specific entrypoints:

- `eslint-config-seek/vitest`: for general Vitest projects
- `eslint-config-seek/vitest/base`: for Vitest projects not using React

These are equivalent to the existing `eslint-config-seek` and `eslint-config-seek/base` entrypoints, but with Vitest-specific rules and settings applied instead of Jest-specific ones.
