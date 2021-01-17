module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended'
  ],
  plugins: ['prettier'],
  ignorePatterns: ['node_modules/'],
  // add your custom rules here
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto'
      }
    ],
    'no-console': 'warn',
    'no-debugger': 'warn',
    'vue/html-closing-bracket-newline': 'error',
    'vue/attributes-order': 'error',
    'vue/order-in-components': 'error',
    'vue/attribute-hyphenation': 'error'
  }
}
