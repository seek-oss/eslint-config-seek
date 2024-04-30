# eslint-config-seek

## 13.1.0

### Minor Changes

- Adds [no-fallthrough][docs] as an error. ([#135](https://github.com/seek-oss/eslint-config-seek/pull/135))
  This disallows fallthrough of case statements in switch statements.

  [docs]: https://eslint.org/docs/latest/rules/no-fallthrough

  ### Examples

  You need to add a `break`, `return` or `throw` to each case. You can also skip this rule if it is intentionally absent (however that is a rare scenario).

  ```diff
  switch (name) {
    case 'John':
      console.log('Hi John');
  +   break;
  }
  ```

### Patch Changes

- Disable [`@typescript-eslint/consistent-type-definition` rule][rule] ([#139](https://github.com/seek-oss/eslint-config-seek/pull/139))

  [rule]: https://typescript-eslint.io/rules/consistent-type-definitions/

- Revert from [`@finsit/eslint-plugin-cypress`] back to [`eslint-plugin-cypress`] ([#141](https://github.com/seek-oss/eslint-config-seek/pull/141))

  The official plugin now supports ESLint v8. Consumers that were overriding `@finsit/cypress/*` rules will need to override `cypress/*` rules instead.

  [`@finsit/eslint-plugin-cypress`]: https://github.com/foretagsplatsen/eslint-plugin-cypress
  [`eslint-plugin-cypress`]: https://github.com/cypress-io/eslint-plugin-cypress

## 13.0.0

### Major Changes

- Upgrade Typescript Eslint to 7.2.0 to support Typescript 5.4. ([#136](https://github.com/seek-oss/eslint-config-seek/pull/136))

  This bumps the minimum required versions of Node.js to 18.18.0, Eslint to 8.56.0 and Typescript to 4.7.5 due to a breaking change introduced by Typescript Eslint in 7.0.0.

## 12.1.1

### Patch Changes

- Prevents the new curly-brace-presence rule from affecting children. ([#133](https://github.com/seek-oss/eslint-config-seek/pull/133))

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

## 12.1.0

### Minor Changes

- Adds [react/jsx-curly-brace-presence][docs] as an error. ([#130](https://github.com/seek-oss/eslint-config-seek/pull/130))
  This removes unnecessary braces around strings in props and children.

  It also enforces braces around expressions in props and children.

  [docs]: https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md

  ### Examples

  ```diff
  // Unecessary braces around string prop
  - <Column width={'content'}>
  + <Column width="content">
  ```

  ```diff
  // Unecessary braces around string child
  - <Text>{'Hello'}</Text>
  + <Text>Hello</Text>
  ```

  ```diff
  // Mandatory braces around prop expression
  - <Button icon=<IconSearch />>
  + <Button icon={<IconSearch />}>
  ```

## 12.0.1

### Patch Changes

- Fix array-type rule ([#128](https://github.com/seek-oss/eslint-config-seek/pull/128))

## 12.0.0

### Major Changes

- Bump up typescript-eslint monorepo to ^6.0.0. ([#125](https://github.com/seek-oss/eslint-config-seek/pull/125))

  This requires eslint 7+.

  This change also includes a number of rule changes to the default configuration. Read the [release notes](https://typescript-eslint.io/blog/announcing-typescript-eslint-v6) for more information.

## 11.3.1

### Patch Changes

- Add a temporary override until everybody removes the `React` import ([#122](https://github.com/seek-oss/eslint-config-seek/pull/122))

## 11.3.0

### Minor Changes

- Extend `react/jsx-runtime`, since we are now using the [JSX transform](https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html) ([#118](https://github.com/seek-oss/eslint-config-seek/pull/118))

### Patch Changes

- Update dependencies ([#120](https://github.com/seek-oss/eslint-config-seek/pull/120))

- Disable resolving `node_modules` from the root of the repo. This is problematic for JavaScript-only monorepos (where there are multiple `node_modules` directories). ([#119](https://github.com/seek-oss/eslint-config-seek/pull/119))

- Add a workaround for TypeScript-ESLint slowness with TypeScript 5.1 ([#117](https://github.com/seek-oss/eslint-config-seek/pull/117))

## 11.2.1

### Patch Changes

- Remove autofix for custom `unsafe-to-chain-command` rule ([#115](https://github.com/seek-oss/eslint-config-seek/pull/115))

  The autofix for this rule didn't exactly adhere to [the recommendation in the cypress docs][docs],
  and would've required additional complexity and user-configuration to do so, so the decision was made to remove it.

  [docs]: https://docs.cypress.io/guides/core-concepts/retry-ability#Actions-should-be-at-the-end-of-chains-not-the-middle

## 11.2.0

### Minor Changes

- Add autofix for custom `unsafe-to-chain-command` rule ([#113](https://github.com/seek-oss/eslint-config-seek/pull/113))

## 11.1.3

### Patch Changes

- Fix broken custom eslint rule ([#111](https://github.com/seek-oss/eslint-config-seek/pull/111))

## 11.1.2

### Patch Changes

- Replace `eslint-plugin-cypress` with the [`@finsit/eslint-plugin-cypress`] fork that supports ESLint v8. ([#106](https://github.com/seek-oss/eslint-config-seek/pull/106))
  Consumers that were overriding `cypress/*` rules will need to override `@finsit/cypress/*` rules instead.

  [`@finsit/eslint-plugin-cypress`]: https://github.com/foretagsplatsen/eslint-plugin-cypress

## 11.1.1

### Patch Changes

- Move the Babel React preset parser option from the "base" configuration to the "default" configuration. ([#103](https://github.com/seek-oss/eslint-config-seek/pull/103))

  This update contains no functional changes to the "default" configuration.

## 11.1.0

### Minor Changes

- Export extensions linted by the config ([#101](https://github.com/seek-oss/eslint-config-seek/pull/101))

  They are now available under the `/extensions` entry point:

  ```js
  const { js, ts } = require('eslint-config-seek/extensions');
  // js: ['js', 'cjs', 'mjs', 'jsx']
  // ts: ['ts', 'cts', 'mts', 'tsx']
  ```

### Patch Changes

- Fix resolution of `@babel/preset-react` ([#100](https://github.com/seek-oss/eslint-config-seek/pull/100))

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
