const webpack5RecommendConfig = require('@systemlight/webpack-config')
const {mockServer} = require('@systemlight/webpack-config-mockserver')

module.exports = (env, argv) => new webpack5RecommendConfig(env, argv, {
  enableMock: true,
  mockServer: mockServer
})
  .build()
  .toConfig()
