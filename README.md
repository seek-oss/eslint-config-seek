[![Test](https://github.com/seek-oss/eslint-config-seek/actions/workflows/test.yml/badge.svg)](https://github.com/seek-oss/eslint-config-seek/actions/workflows/test.yml)
[![Release](https://github.com/seek-oss/eslint-config-seek/actions/workflows/release.yml/badge.svg)](https://github.com/seek-oss/eslint-config-seek/actions/workflows/release.yml)

# eslint-config-seek

This package includes the shareable ESLint configuration used by [SEEK](https://github.com/seek-oss/).

## Usage in sku Projects

The easiest way to use this configuration is with [sku](https://github.com/seek-oss/sku) or [skuba](https://github.com/seek-oss/skuba).

**You don’t need to install it separately in sku and skuba projects.**

## Usage Outside of sku and skuba

If you want to use this ESLint configuration in a project not built with sku or skuba, you can install it with following steps.

First, install this package, and the necessary peer dependencies listed in this project's [package.json](package.json).

Then create a file named `eslint.config.js` with following contents in the root folder of your project:

```js
module.exports = require('eslint-config-seek');
```

The default configuration includes support for React projects. For projects that are not based on React, the "base" configuration should be used instead:

```js
module.exports = require('eslint-config-seek/base');
```

You can override the settings from `eslint-config-seek` by editing the `eslint.config.js` file. Learn more about [configuring ESLint](https://eslint.org/docs/latest/use/configure/) on the ESLint website.

## License

MIT.
