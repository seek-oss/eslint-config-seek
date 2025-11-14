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
});
