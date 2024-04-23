import globals from 'globals';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

import path from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import pluginJs from '@eslint/js';

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: pluginJs.configs.recommended,
});

export default [
  { languageOptions: { globals: globals.browser } },
  {
    ignores: ['.docusaurus', 'node_modules', 'build', 'scripts/import.js'],
  },
  ...compat.extends('standard-with-typescript').map((config) => ({
    ...config,
    files: ['**/*.tsx'],
    rules: {
      ...config.rules,
      '@typescript-eslint/strict-boolean-expressions': 'off',
      '@typescript-eslint/prefer-nullish-coalescing': 'off',
    },
  })),
  pluginReactConfig,
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  eslintPluginPrettierRecommended,
];
