import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

// Helper function to resolve with possible extensions
function resolveWithExtensions(basePath: string): string | null {
  const extensions = ['.tsx', '.ts', '.js']; // Add any other extensions you need

  for (const ext of extensions) {
    const fullPath = `${basePath}${ext}`;
    if (fs.existsSync(fullPath)) {
      return fullPath;
    }
  }

  return null;
}

// Custom plugin to handle @theme/ alias with fallback
function ThemeAliasPlugin() {
  return {
    name: 'vite-plugin-theme-alias',
    resolveId(source: string) {
      if (source.startsWith('@theme/')) {
        const aliasPath = source.replace('@theme/', '');

        // Check for the file in `src/theme` directory first
        const primaryPath = path.resolve(__dirname, 'src/theme', aliasPath);
        const resolvedPrimaryPath = resolveWithExtensions(primaryPath);
        if (resolvedPrimaryPath) {
          return resolvedPrimaryPath;
        }

        // If not found, fall back to `@docusaurus/theme-classic/src/theme`
        const fallbackPath = path.resolve(
          __dirname,
          'node_modules/@docusaurus/theme-classic/src/theme',
          aliasPath,
        );
        const resolvedFallbackPath = resolveWithExtensions(fallbackPath);
        if (resolvedFallbackPath) {
          return resolvedFallbackPath;
        }

        // Return null if neither path resolves (Vitest will throw a module not found error)
        return null;
      }
      return null;
    },
  };
}

export default defineConfig({
  plugins: [react(), ThemeAliasPlugin()],
  resolve: {
    alias: [
      {
        // @docusaurus/Noop likes to be difficult
        find: '@docusaurus/Noop',
        replacement: path.resolve(__dirname, './test/__mocks__/noop.ts'),
      },
      {
        // Match any import that starts with `@docusaurus/` and map to core client exports
        find: /^@docusaurus\/(BrowserOnly|ComponentCreator|constants|ExecutionEnvironment|Head|Interpolate|isInternalUrl|Link|renderRoutes|router|Translate|use.*)/,
        replacement: '@docusaurus/core/src/client/exports/$1',
      },
    ],
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: './test/__mocks__/setup.ts',
  },
});
