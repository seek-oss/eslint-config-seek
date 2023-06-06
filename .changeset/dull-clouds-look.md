---
'eslint-config-seek': patch
---

Remove autofix for custom `unsafe-to-chain-command` rule

The autofix for this rule didn't exactly adhere to [the recommendation in the cypress docs][docs],
and would've required additional complexity and user-configuration to do so, so the decision was made to remove it.

[docs]: https://docs.cypress.io/guides/core-concepts/retry-ability#Actions-should-be-at-the-end-of-chains-not-the-middle
