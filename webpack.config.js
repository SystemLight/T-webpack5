const path = require('path')

const {wcf} = require('@systemlight/webpack-config')

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
    }
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

    config.module.rules.delete('svg')
    config
      .module
      .rule('svg')
      .include
      .add(path.join(__dirname, 'src/assets/svg/icons'))
      .end()
      .test(/\.svg$/i)
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
  }
})
