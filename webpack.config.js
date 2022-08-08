const {wcf} = require('@systemlight/webpack-config')
const {AutoRouteWebpackPlugin, vueRoutesRender} = require('@systemlight/auto-route-webpack-plugin')

module.exports = wcf({
  enablePostcss: true, // 为了让tailwindcss起效果
  enableMock: true, // 启用mock数据服务
  buildConfigCallback(config) {
    config.devServer.open(false)

    // 使用vue3实验特性
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(() => ({
        reactivityTransform: true
      }))

    // 自动路由插件
    config.plugin('AutoRouteWebpackPlugin').use(AutoRouteWebpackPlugin, [
      {
        targetPath: './src/views',
        importPath: '@/views',
        loaderTest: /router/,
        routesRender: vueRoutesRender
      }
    ])
  }
})
