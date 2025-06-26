// eslint.config.js
import eslintPluginReact from 'eslint-plugin-react';
import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      react: eslintPluginReact,
    },
    rules: {
      // customize rules here
      'no-unused-vars': 'warn',
      'react/react-in-jsx-scope': 'off', // Not needed with React 17+
    },
  },
];
