# webpack5-kiva

> Front end development template based on webpack5.

### 相关项目

- [createVue](https://github.com/zxpsuper/createVue)

### 文档

#### 开发配置

- [browserslist](https://github.com/browserslist/browserslist)
- [package.json](https://docs.npmjs.com/cli/v8/configuring-npm/package-json)
- [.gitignore](https://github.com/github/gitignore)
- [editorconfig](https://editorconfig.org/)
- [prettier](https://prettier.io/docs/en/options.html)
- [eslint](http://eslint.cn/docs/rules/)
- [stylelint](https://stylelint.io/user-guide/rules/list)
- [commitlint](https://commitlint.js.org/)
- [sass](https://sass-lang.com/documentation/)
- [postcss](https://www.postcss.com.cn/)
- [babel](https://babel.docschina.org/docs/en/usage/)
- [typescript](https://www.tslang.cn/docs/handbook/tsconfig-json.html)
- [webpack](https://webpack.js.org/configuration/)

### Mock数据

- `mock/index.js`

```javascript
const mocks = [
  // #auto-mock
]

module.exports = mocks
```

- `webpack.config.js`

```javascript
const webpack5RecommendConfig = require('@systemlight/webpack-config')
const {mockServer} = require('@systemlight/webpack-config-mockserver')

module.exports = (env, argv) => new webpack5RecommendConfig(env, argv, {
  enableMock: true,
  mockServer: mockServer
})
  .build()
  .toConfig()
```
