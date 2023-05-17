module.exports = {
  env: { browser: true, es2020: true },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['prettier'],
  ignorePatterns: ['*.config.*'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'no-unused-vars': 'off',
    'prettier/prettier': 'error',
  },
}
