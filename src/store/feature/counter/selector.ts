import {createSelector} from '@reduxjs/toolkit'

// 针对计算属性做缓存
// https://redux-toolkit.js.org/api/createSelector
export const counterSelector = createSelector(
  (state) => {
    return state.counter
  },
  (state) => {
    return state.value
  }
)

export const counterAddBaseSelector = createSelector(
  [
    (state) => {
      return state.counter.value
    },
    (state) => {
      return state.counter.base
    }
  ],
  (value, base) => {
    return value + base
  }
)

export const counterAddBaseAliasSelector = createSelector(
  (state) => {
    return state.counter.value
  },
  (state) => {
    return state.counter.base
  },
  (value, base) => {
    return value + base
  }
)
