const {wcf} = require('@systemlight/webpack-config')

module.exports = wcf({
  buildOptions: {
    enableFriendly: true,
    emitPublic: false,
    enableHash: false
  },
  buildConfigCallback(config) {
    config.value = {
      devtool: false
    }
  }
})
