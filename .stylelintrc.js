module.exports = {
  extends: [
    require.resolve('@systemlight/fabric/dist/stylelint'),
    'stylelint-config-html/vue',
    'stylelint-config-recommended-vue/scss'
  ],
  rules: {
    'scss/at-rule-no-unknown': null
  }
}
