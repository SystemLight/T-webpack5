const {pathsToModuleNameMapper} = require('ts-jest')
const {compilerOptions} = require('./tsconfig.test.json')

/**
 * https://www.jestjs.cn/docs/configuration
 * https://kulshekhar.github.io/ts-jest/
 *
 * @type {import('ts-jest').JestConfigWithTsJest}
 * */
module.exports = {
  testPathIgnorePatterns: ['/src/', '/dist/'],
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: compilerOptions
      }
    ]
  },
  clearMocks: true
}
