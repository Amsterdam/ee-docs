import globals from 'globals';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { languageOptions: { globals: globals.browser } },
  {
    ignores: ['.docusaurus', 'babel.config.js', 'node_modules', 'build', 'scripts/import.js'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReactConfig,
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
    },
  },
  eslintPluginPrettierRecommended,
);
