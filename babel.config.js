module.exports = function (api) {
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
        '@babel/env',
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
        '@babel/plugin-transform-runtime',
        {
          corejs: corejs
        }
      ]
    ]
  }
}
