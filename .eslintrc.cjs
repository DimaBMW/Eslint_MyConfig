module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: 'current', 'jest/globals': true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'jest'],
  rules: {
    'no-var':'error',
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    '@typescript-eslint/no-explicit-any': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'jest/no-focused-tests': 'off',
    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto',
      }
    ],
  },
  overrides: [
    {
      files: ['tests/**/*'],
      plugins: ['jest'],
      env: {
        'jest/globals': true,
      },
    },
  ],
};
