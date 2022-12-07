module.exports = () => {
  return {
    postcssPlugin: 'posctss-demo-plugin',
    Rule(rule) {
      if (rule.selector === '.foo-rect') {
        rule.selector = '.bar-rect'
      }
    }
  }
}

module.exports.postcss = true
