---
'eslint-config-seek': minor
---

Turn off [`no-return-await`](https://eslint.org/docs/rules/no-return-await)

`return await` produces [richer stack traces with a marginal performance penalty](https://github.com/goldbergyoni/nodebestpractices/blob/master@%7B2022-01-01T00:00:00Z%7D/sections/errorhandling/returningpromises.md) in recent Node.js versions. This tradeoff is now left to individual consumers to weigh up and optionally enforce.
