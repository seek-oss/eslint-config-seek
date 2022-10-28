---
'eslint-config-seek': patch
---

Fixed TypeScript support for `eslint-plugin-import`

Some rules provided by `eslint-plugin-import` (e.g. `import/no-duplicates`, `import/order`) don't work or work incorrectly without it.

Before — passes:

```ts
import { ComponentDocs as InternalComponentDocs } from '@metropolis/docs';
import braidSnippets from 'braid-design-system/lib/playroom/snippets';
import { Snippets } from 'playroom';
import reactElementToJsxString from 'react-element-to-jsx-string';
```

After — correctly identifies `@metropolis/docs` as **internal** ([as defined in sku][order]) and moves it after the **external** imports:

```ts
import braidSnippets from 'braid-design-system/lib/playroom/snippets';
import { Snippets } from 'playroom';
import reactElementToJsxString from 'react-element-to-jsx-string';

import { ComponentDocs as InternalComponentDocs } from '@metropolis/docs';
```

[order]: https://github.com/seek-oss/sku/blob/cf67d47f0e109dafb0541a05c50311f56bd5baa9/config/eslint/importOrderConfig.js#L20-L29
