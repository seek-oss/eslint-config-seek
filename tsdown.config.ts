import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: [
    'src/index.ts',
    'src/base.ts',
    'src/vitest/index.ts',
    'src/vitest/base.ts',
    'src/extensions.ts',
  ],
  format: ['cjs'],
  dts: true,
  exports: true,
  checks: {
    // Shipping CJS-only emits a warning, which becomes an error in CI.
    // Disabling this check because we're doing this intentionally.
    legacyCjs: false,
  },
});
