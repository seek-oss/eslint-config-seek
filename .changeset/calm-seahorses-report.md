---
'eslint-config-seek': minor
---

Enhanced TypeScript support for `eslint-plugin-import` via [`eslint-import-resolver-typescript`](https://github.com/import-js/eslint-import-resolver-typescript)

> This means you can:
>
> - `import`/`require` files with extension `.cts`/`.mts`/`.ts`/`.tsx`/`.d.cts`/`.d.mts`/`.d.ts`
> - Use [`paths`](https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping) defined in `tsconfig.json`
> - Prefer resolving `@types/*` definitions over plain `.js`/`.jsx`
> - Multiple tsconfigs support just like normal (i.e. in a monorepo)
> - `imports/exports` fields support in `package.json`
