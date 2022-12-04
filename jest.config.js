/**
 * https://www.jestjs.cn/docs/configuration
 *
 * @type {import('ts-jest').JestConfigWithTsJest}
 * */
module.exports = {
  preset: 'ts-jest',
  testPathIgnorePatterns: ['/src/', '/dist/'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  clearMocks: true
}
