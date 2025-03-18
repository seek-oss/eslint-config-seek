---
'eslint-config-seek': patch
---

deps: eslint-plugin-import-x 4.6.1

A previous version of `eslint-config-seek` pinned this dependency to `4.7.0`, versions beyond which [have issues within skuba](https://github.com/un-ts/eslint-plugin-import-x/issues/250), but unfortunately this version has optional dependencies that cause some mayhem with `yarn --ignore-optional` installations, which is common enough to be a significant annoyance. Pinning to this version should work in all setups.
