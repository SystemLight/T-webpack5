module.exports = function (api) {
  // https://github.com/SystemLight/webpack-config/blob/master/packages/webpack-config/src/index.ts#L962
  api.assertVersion('~7')
  api.cache(true)

  let corejs = {
    version: 3,
    proposals: true
  }

  return {
    comments: true,
    presets: [
      [
        '@babel/env', // @babel/preset-transform-runtime
        {
          debug: false,
          modules: false,
          useBuiltIns: 'usage',
          ignoreBrowserslistConfig: false,
          corejs: corejs
        }
      ]
    ],
    plugins: [
      [
        '@babel/transform-runtime', // @babel/plugin-transform-runtime
        {
          corejs: corejs
        }
      ]
    ]
  }
}
