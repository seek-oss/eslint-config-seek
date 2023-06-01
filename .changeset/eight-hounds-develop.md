---
'eslint-config-seek': patch
---

Remove local eslint rule added in [`v11.1.2`]

The local `unsafe-to-chain-command` cypress rule required `eslint-plugin-local-rules` to function, but that plugin doesn't work correctly when yarn hoists it to the top of `node_modules`.
The application of the rule isn't particularly common, and it's not worth breaking yarn consumers, so removing it for now until either the fork or the upstream `eslint-plugin-cypress` supports it.

[`v11.1.2`]: https://github.com/seek-oss/eslint-config-seek/releases/tag/v11.1.2
