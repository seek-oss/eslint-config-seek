[![Test](https://github.com/seek-oss/eslint-config-seek/actions/workflows/test.yml/badge.svg)](https://github.com/seek-oss/eslint-config-seek/actions/workflows/test.yml)
[![Release](https://github.com/seek-oss/eslint-config-seek/actions/workflows/release.yml/badge.svg)](https://github.com/seek-oss/eslint-config-seek/actions/workflows/release.yml)

# eslint-config-seek

[SEEK](https://github.com/seek-oss/)'s shareable ESLint configuration.

## Usage in sku and skuba Projects

The easiest way to use this configuration is with [sku](https://github.com/seek-oss/sku) or [skuba](https://github.com/seek-oss/skuba).
Sku and skuba projects automatically use this ESLint configuration, so you don't need to do anything extra to enable it.

> [!NOTE]
> You don’t need to install this package in sku and skuba projects.

## Usage Outside of sku and skuba

To use this ESLint configuration in a project not built with sku or skuba, first install this package as a dev dependency:

```sh
npm install --save-dev eslint-config-seek
```

Next, export the configuration from your ESLint config file:

```js
// eslint.config.js

// CJS config
module.exports = require('eslint-config-seek');

// ESM config
export { default } from 'eslint-config-seek';
```

This package provides multiple configuration entrypoints to support different projects.

| Entrypoint                       | Project type    |
| -------------------------------- | --------------- |
| `eslint-config-seek`             | React + Jest    |
| `eslint-config-seek/base`        | No react + Jest |
| `eslint-config-seek/vitest`      | React + Vitest  |
| `eslint-config-seek/vitest/base` | No react + Jest |

You can extend your configuration from `eslint-config-seek` by editing the `eslint.config.js` file.
Learn more about [configuring ESLint](https://eslint.org/docs/latest/use/configure/) on the ESLint website.

## License

MIT.
