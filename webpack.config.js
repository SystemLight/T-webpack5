const path = require('path')

const {wcf} = require('@systemlight/webpack-config')
const InjectBodyPlugin = require('inject-body-webpack-plugin').default

module.exports = wcf({
  enableMock: true,
  configureWebpack: {
    module: {
      rules: [
        {
          test: /[\\/]demo[\\/]foo.ts$/,
          use: [
            {
              loader: path.resolve('./plugins/webpack-demo/js-loader.js'),
              options: {}
            },
            'ts-loader'
          ]
        },
        {
          test: /[\\/]demo[\\/]foo.css$/,
          use: [
            {
              loader: path.resolve('./plugins/webpack-demo/css-loader.js'),
              options: {}
            }
          ]
        }
      ]
    },
    plugins: [
      new InjectBodyPlugin({
        content: '<div id="root"></div>'
      })
    ]
  },
  chainWebpack(config) {
    config.module
      .rule('css')
      .exclude
      .add(/[\\/]demo[\\/]foo.css$/)

    config.module
      .rule('ts/tsx')
      .exclude
      .add(/[\\/]demo[\\/]foo.ts$/)
  }
})
