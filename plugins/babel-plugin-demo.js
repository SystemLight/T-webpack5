// https://github.com/babel/minify/blob/master/packages/babel-plugin-transform-remove-console/src/index.js
module.exports = function ({types: t}) {
  return {
    name: 'babel-plugin-demo',
    visitor: {
      CallExpression(path, {opts}) {
        let callee = path.get('callee')

        if (callee.isMemberExpression()) {
          let object = callee.get('object')

          if (object.isIdentifier({name: 'console'})) {
            let property = callee.get('property')

            switch (opts.operator) {
              case 'remove':
                if (path.parentPath.isExpressionStatement()) {
                  path.parentPath.remove()
                } else {
                  path.replaceWith(t.unaryExpression('void', t.numericLiteral(0)))
                }
                break
              case 'warn':
                property.replaceWith(t.identifier('warn'))
                break
            }
          }
        }
      }
    }
  }
}
