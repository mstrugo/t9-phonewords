const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'));

module.exports = {
  env: {
    commonjs: true,
    node: true,
    browser: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  plugins: ['@typescript-eslint', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2015,
    sourceType: 'module',
  },
  rules: {
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'prettier/prettier': ['error', prettierOptions],
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: {
        'prettier/prettier': ['warn', prettierOptions],
      },
    },
  ],
};
