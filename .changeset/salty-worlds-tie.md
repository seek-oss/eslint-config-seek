---
'eslint-config-seek': major
---

Remove `no-unused-vars` rule exception for `React` namespace import

The `no-unused-vars` rule exception for the `React` namespace import has been removed. This means that if you import the entire React namespace but do not use it in your code, ESLint will now flag it as an unused variable.

This exception was originally added to accommodate older versions of React (prior to v17) where JSX syntax required the React namespace to be in scope. However, with the introduction of the new JSX Transform in React 17, this was no longer necessary. A temporary exception was made to ease the transition, but it has now been removed to encourage cleaner code.

**MIGRATION GUIDE**:

```diff
-import React from 'react';

-import React, { useState } from 'react';
+import { useState } from 'react';
```
