module.exports = function (api) {
  let corejs = {
    version: 3,
    proposals: true
  }

  api.assertVersion('^7.15')
  api.cache(true)

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
      ],
      '@babel/react'
    ],
    plugins: [
      [
        '@babel/transform-runtime',
        {
          corejs: corejs
        }
      ]
    ]
  }
}
