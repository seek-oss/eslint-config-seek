# eslint-config-seek

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
