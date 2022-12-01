import {say} from '@/utils'

// jest使用测试

function drinkAll(callback, flavour) {
  if (flavour !== 'octopus') {
    callback(flavour)
  }
}

describe('T-webpack5:mock', () => {
  test('fn', () => {
    let drink = jest.fn()
    drinkAll(drink, 'lemon')

    // 测试函数已经被调用
    expect(drink).toHaveBeenCalled()
  })
})

describe('T-webpack5:utils', () => {
  test('index.ts:say', () => {
    let result = say()

    // 测试值是否匹配
    expect(result).toBe('hello world')
  })
})
