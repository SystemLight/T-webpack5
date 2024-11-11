module.exports = () => {
  return {
    postcssPlugin: 'posctss-demo-plugin',
    Rule(rule) {
      if (rule.selector === '.foo-rect') {
        rule.selector = '.bar-rect'
      }
    },
    AtRule: {
      charset: (atRule) => {
        // 移除所有 @charset
        if (atRule.name === 'charset') {
          atRule.remove()
        }
      }
    }
  }
}

module.exports.postcss = true
