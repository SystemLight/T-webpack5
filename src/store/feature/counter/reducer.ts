import {createReducer} from '@reduxjs/toolkit'

import {decrement, increment} from './action'

const initialState = {
  value: 0,
  base: 12
}

// https://redux-toolkit.js.org/api/createReducer
const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state, action) => {
      state.value++
    })
    .addCase(decrement, (state, action) => {
      state.value--
    })
})

export default reducer
