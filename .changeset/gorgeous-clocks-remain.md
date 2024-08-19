---
'eslint-config-seek': major
---

Unused imports will now be autofixable when running ESLint with `--fix`.

Through this change, unused React imports will now error (previously, they were excluded from this check due to the migration effort).

To achieve this autofix, `@typescript-eslint/no-unused-vars` has been replaced by `unused-imports/no-unused-imports` and `unused-imports/no-unused-vars`.
If using `// eslint-disable-next-line` (or similar) disable directives, these will need to be updated to the appropriate `unused-imports/` rule.
