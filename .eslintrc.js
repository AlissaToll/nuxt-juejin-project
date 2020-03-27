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
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'quotes': 'off',
    'semi': 'off',
    'space-before-function-paren': 'off',
    'indent': 'off',
    'no-tabs': 'off',
    'eol-last': 'off',
    'arrow-parens': 'off',
    'no-console': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'no-trailing-spaces': 'off',
    'prefer-const': 'off',
    'space-before-blocks': 'off'
  }
}