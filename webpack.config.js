const {wcf} = require('@systemlight/webpack-config')
const {mockServer} = require('@systemlight/webpack-config-mockserver')

module.exports = wcf({
  buildOptions: {
    enableFriendly: true,
    emitHtml: true,
    enableMock: true,
    mockServer: mockServer
  }
})
