const {parse} = require('@babel/parser')
const t = require('@babel/types')
const traverse = require('@babel/traverse').default
const generator = require('@babel/generator').default

function jsLoader(source) {
  let ast = parse(source, {
    sourceType: 'module'
  })

  traverse(ast, {
    MemberExpression(path) {
      path.traverse({
        Identifier(path) {
          if (
            path.node.name === 'className' &&
            path.parentPath.isMemberExpression() &&
            path.parentPath.parentPath.isAssignmentExpression()
          ) {
            let right = path.parentPath.parentPath.get('right')
            let matchReg = /(^|\s+)rectangle($|\s+)/
            if (
              right.isStringLiteral() &&
              matchReg.test(right.node.value)
            ) {
              right.replaceWith(t.stringLiteral(right.node.value.replace(matchReg, '$1replace$2')))
            }
          }
        }
      })
    }
  })

  return generator(ast).code
}

module.exports = jsLoader
