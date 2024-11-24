module.exports = {
  env: {
    node: true, // This tells ESLint that you are using Node.js
    browser: true, // If you're also using browser-side code, keep this
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['vue', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:vue/essential', // Vue 2.x rules
    'plugin:prettier/recommended', // Prettier rules
  ],
  rules: {
    'no-undef': ['error', { typeof: true }], // Ensure no undefined variables
    'vue/no-unused-vars': 'warn',
    'prettier/prettier': ['error', { singleQuote: true, semi: false }],
  },
}
