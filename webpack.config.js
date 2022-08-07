const {wcf} = require('@systemlight/webpack-config')

module.exports = wcf({
  enablePostcss: true, // 为了让tailwindcss起效果
  enableMock: true, // 启用mock数据服务
  buildConfigCallback(config) {
    config.devServer.open(false)
  }
})
