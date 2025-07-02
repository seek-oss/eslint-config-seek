---
'eslint-config-seek': minor
---

Add `eslint-plugin-import-zod` to re-write Zod imports

This plugin adds rules for rewriting Zod imports such as `import { z } from "zod";` to `import * as z from 'zod';` in order to reduce bundle sizes when using a bundler.
