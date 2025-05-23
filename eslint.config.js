import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import tailwindcssPlugin from 'eslint-plugin-tailwindcss';
import vitestPlugin from 'eslint-plugin-vitest'; // Import vitest plugin

export default tseslint.config(
  { ignores: ['dist'] },
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // Vitest plugin configuration - typically applied globally or to test files
  // Add this before more specific configurations or merge as appropriate
  // Assuming vitestPlugin.configs.recommended is a flat config object or array
  ...(Array.isArray(vitestPlugin.configs.recommended) ? vitestPlugin.configs.recommended : [vitestPlugin.configs.recommended]),

  // jsx-a11y plugin configuration
  // We need to structure this as a flat config object
  {
    files: ['**/*.{js,jsx,ts,tsx}'], // Apply to relevant files
    plugins: {
      'jsx-a11y': jsxA11y,
    },
    rules: {
      ...jsxA11y.configs.recommended.rules,
    },
    // It's good practice to define settings if the plugin supports them,
    // such as language options if needed, but for jsx-a11y,
    // often just plugins and rules are enough for recommended setup.
  },

  // Tailwind CSS plugin configuration
  // As per documentation for flat config: ...tailwindcssPlugin.configs["flat/recommended"]
  ...tailwindcssPlugin.configs["flat/recommended"],

  // Original custom configuration for project-specific rules, React hooks, etc.
  // This should come after the general recommendations to allow overrides if necessary.
  {
    files: ['**/*.{ts,tsx}'], // Specific to TypeScript/TSX files for these rules
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: { // Required for some TypeScript ESLint rules
        project: './tsconfig.app.json', // Or tsconfig.json if that's your main one
        tsconfigRootDir: import.meta.dirname, // Or __dirname if not using ESM for config
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // Any other project-specific rules or overrides
    },
  }
);
