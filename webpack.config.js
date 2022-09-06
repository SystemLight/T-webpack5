const {wcf} = require('@systemlight/webpack-config')

module.exports = wcf({
  enableMock: true,
  open: false,
  chainWebpack(config) {
    // 使用vue3实验特性，https://github.com/vuejs/rfcs/discussions/369
    // config.module
    //   .rule('vue')
    //   .use('vue-loader')
    //   .tap(() => ({
    //     reactivityTransform: true
    //   }))
  }
})
