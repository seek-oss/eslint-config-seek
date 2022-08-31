# eslint-config-seek

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
