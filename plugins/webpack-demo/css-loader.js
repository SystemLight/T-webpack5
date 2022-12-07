const postcss = require('postcss')

const demo = require('../postcss-demo-plugin')

function cssLoader(source) {
  // https://postcss.org/api/
  let loaderContext = this
  let callback = loaderContext.async()

  postcss([demo()]).process(source, {from: undefined, map: false}).then((result) => {
    callback(null, `
      console.log(\`${result.css}\`)
      export default 42
    `)
  })
}

// cssLoader.pitch = function (remainingRequest, previousRequest, data) {
//   return 'export default 42'
// }

module.exports = cssLoader
