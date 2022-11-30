const path = require('path')

const {wcf} = require('@systemlight/webpack-config')

module.exports = wcf({
  enableMock: true,
  configureWebpack: {
    module: {
      rules: [
        {
          test: /[\\/]modules[\\/]foo/,
          use: [
            {
              loader: path.resolve('./plugins/webpack-demo/loader.js'),
              options: {}
            },
            'ts-loader'
          ]
        }
      ]
    }
  }
})
