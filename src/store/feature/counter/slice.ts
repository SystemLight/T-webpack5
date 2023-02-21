import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  base: 12
}

// https://redux-toolkit.js.org/api/createSlice
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.value++
    },
    decrement(state) {
      state.value--
    }
  }
})

export const {increment, decrement} = counterSlice.actions

export default counterSlice.reducer
