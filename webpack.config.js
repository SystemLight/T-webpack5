const {wcf} = require('@systemlight/webpack-config')

module.exports = wcf({
  enableBabel: 'auto',
  enableHash: 'auto',
  enableMinimize: 'auto',
  enableSplitChunk: 'auto',
  enablePostcss: true,
  enableMock: true,
  emitCss: 'auto',
  buildConfigCallback(config) {
    config.devServer.open(false)

    // config.devtool(false)

    // 使用vue3实验特性
    // config.module
    //   .rule('vue')
    //   .use('vue-loader')
    //   .tap(() => ({
    //     reactivityTransform: true
    //   }))
  }
})
