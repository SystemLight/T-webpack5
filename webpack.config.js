const webpack5RecommendConfig = require('@systemlight/webpack-config')

module.exports = (env, argv) => new webpack5RecommendConfig(env, argv).build().toConfig()
