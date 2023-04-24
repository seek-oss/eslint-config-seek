# eslint-config-seek

## 11.0.1

### Patch Changes

- Update parserOptions.project for TypeScript files to be `true`. ([#98](https://github.com/seek-oss/eslint-config-seek/pull/98))

## 11.0.0

### Major Changes

- Add additional rules enforcing consistent type imports/exports ([#96](https://github.com/seek-oss/eslint-config-seek/pull/96))

## 10.3.0

### Minor Changes

- Split config into default (current) and base (without a React dependency). ([#94](https://github.com/seek-oss/eslint-config-seek/pull/94))

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

## 10.2.0

### Minor Changes

- Enable linting for more extensions: `.cjs`, `.mjs`, `.cts`, `.mts` ([#90](https://github.com/seek-oss/eslint-config-seek/pull/90))

### Patch Changes

- Update dependencies ([#91](https://github.com/seek-oss/eslint-config-seek/pull/91))

## 10.1.3

### Patch Changes

- Dependency bumps (Babel, ESLint, TypeScript) ([#88](https://github.com/seek-oss/eslint-config-seek/pull/88))

## 10.1.2

### Patch Changes

- Allow the `cypress` folder to be nested ([#86](https://github.com/seek-oss/eslint-config-seek/pull/86))

## 10.1.1

### Patch Changes

- Re-added missing [`no-undef`](https://eslint.org/docs/latest/rules/no-undef) rule for .js/.jsx files ([#84](https://github.com/seek-oss/eslint-config-seek/pull/84))

## 10.1.0

### Minor Changes

- Enhanced TypeScript support for `eslint-plugin-import` via [`eslint-import-resolver-typescript`](https://github.com/import-js/eslint-import-resolver-typescript) ([#81](https://github.com/seek-oss/eslint-config-seek/pull/81))

  > This means you can:
  >
  > - `import`/`require` files with extension `.cts`/`.mts`/`.ts`/`.tsx`/`.d.cts`/`.d.mts`/`.d.ts`
  > - Use [`paths`](https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping) defined in `tsconfig.json`
  > - Prefer resolving `@types/*` definitions over plain `.js`/`.jsx`
  > - Multiple tsconfigs support just like normal (i.e. in a monorepo)
  > - `imports/exports` fields support in `package.json`

### Patch Changes

- Fixed TypeScript support for `eslint-plugin-import` ([#81](https://github.com/seek-oss/eslint-config-seek/pull/81))

  Some rules provided by `eslint-plugin-import` (e.g. `import/no-duplicates`, `import/order`) don't work or work incorrectly without it.

  Before — passes:

  ```ts
  import { ComponentDocs as InternalComponentDocs } from '@monorepo/docs';
  import braidSnippets from 'braid-design-system/lib/playroom/snippets';
  import { Snippets } from 'playroom';
  import reactElementToJsxString from 'react-element-to-jsx-string';
  ```

  After — correctly identifies `@monorepo/docs` as **internal** ([as defined in sku][order]) and moves it after the **external** imports:

  ```ts
  import braidSnippets from 'braid-design-system/lib/playroom/snippets';
  import { Snippets } from 'playroom';
  import reactElementToJsxString from 'react-element-to-jsx-string';

  import { ComponentDocs as InternalComponentDocs } from '@monorepo/docs';
  ```

  [order]: https://github.com/seek-oss/sku/blob/cf67d47f0e109dafb0541a05c50311f56bd5baa9/config/eslint/importOrderConfig.js#L20-L29

- Upgrade dependencies ([#81](https://github.com/seek-oss/eslint-config-seek/pull/81))

## 10.0.0

### Major Changes

- eslint-plugin-jest 27 ([#79](https://github.com/seek-oss/eslint-config-seek/pull/79))

  This major release includes breaking changes. See the [release note](https://github.com/jest-community/eslint-plugin-jest/releases/tag/v27.0.0) for more information.

  The `jest/no-alias-methods` rule is now [enforced](https://github.com/jest-community/eslint-plugin-jest/pull/1221) to discourage usage of alias methods that will be [removed in Jest 30](https://github.com/facebook/jest/issues/13164).

  ```diff
  - .toBeCalled()
  + .toHaveBeenCalled()
  ```

## 9.0.0

### Major Changes

- Support ESLint 8.x ([#73](https://github.com/seek-oss/eslint-config-seek/pull/73))

  We've upgraded the parsers and plugins bundled in `eslint-config-seek` for ESLint 8.x compatibility. Some linting rules have changed and may require manual triage. In particular, we've applied the following major upgrades:

  - [TypeScript ESLint v5](https://github.com/typescript-eslint/typescript-eslint/releases/tag/v5.0.0)

    This includes changes to the recommended rule set.

  - [`babel-eslint`](https://www.npmjs.com/package/babel-eslint) → [`@babel/eslint-parser`](https://www.npmjs.com/package/@babel/eslint-parser)

    This resolves the following installation warning:

    ```console
    babel-eslint is now @babel/eslint-parser. This package will no longer receive updates.
    ```

  - [`eslint-config-prettier` v8](https://github.com/prettier/eslint-config-prettier/blob/HEAD/CHANGELOG.md?rgh-link-date=2021-10-18T05%3A10%3A39Z#version-800-2021-02-21)

    This unifies on a single `prettier` config.

  [`eslint-plugin-cypress`](https://github.com/cypress-io/eslint-plugin-cypress/issues/89) is currently incompatible with ESLint 8.x. Projects that utilise Cypress should remain on ESLint 7.x.

### Minor Changes

- Turn off [`no-return-await`](https://eslint.org/docs/rules/no-return-await) ([#74](https://github.com/seek-oss/eslint-config-seek/pull/74))

  `return await` produces [richer stack traces with a marginal performance penalty](https://github.com/goldbergyoni/nodebestpractices/blob/master@%7B2022-01-01T00:00:00Z%7D/sections/errorhandling/returningpromises.md) in recent Node.js versions. This tradeoff is now left to individual consumers to weigh up and optionally enforce.

## 8.0.0

### Major Changes

- Remove support for Flow ([#64](https://github.com/seek-oss/eslint-config-seek/pull/64))

  SEEK has aligned on [TypeScript](https://www.typescriptlang.org/) for static type checking. [Flow](https://flow.org/) support was similarly removed in [sku 11](https://github.com/seek-oss/sku/releases/tag/v11.0.0).

  Affected projects should migrate to TypeScript.

- Remove support for CSS Modules ([#64](https://github.com/seek-oss/eslint-config-seek/pull/64))

  [eslint-plugin-css-modules](https://github.com/atfzl/eslint-plugin-css-modules) is unmaintained, and SEEK has since moved on to [vanilla-extract](https://vanilla-extract.style/).

  Affected projects should migrate to vanilla-extract.

### Patch Changes

- Detect the react version ([#68](https://github.com/seek-oss/eslint-config-seek/pull/68))
