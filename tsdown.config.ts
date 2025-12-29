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
  // Shipping CJS-only emits a warning, which becomes an error in CI.
  // Temporarily disabling this until we decided to support ESM.
  failOnWarn: false,
});
