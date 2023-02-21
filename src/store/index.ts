import {configureStore} from '@reduxjs/toolkit'

import CounterReducer from './feature/counter/slice'

const store = configureStore({
  reducer: {
    counter: CounterReducer
  }
})

export default store
