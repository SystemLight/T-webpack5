const {wcf} = require('@systemlight/webpack-config')

module.exports = wcf({
  buildOptions: {
    enablePostcss: true, // 为了让tailwindcss起效果
    enableMock: true // 启用mock数据服务
  },
  /**
   * 允许自定义修改内置配置
   * @param config - 一个webpack config的引用类型，请直接修改value的值，会自动合并
   */
  buildConfigCallback(config) {
    config.value = {
      devServer: {
        open: false
      }
    }

    let vueLoaderIndex = this._config.module.rules.findIndex((v) => v.use[0] === 'vue-loader')
    this._config.module.rules[vueLoaderIndex].use.pop()
    this._config.module.rules[vueLoaderIndex].use = [
      {
        loader: 'vue-loader',
        options: {
          reactivityTransform: true
        }
      }
    ]
  }
})
