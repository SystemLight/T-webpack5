import {createStore, createLogger} from 'vuex'

import type {AllState} from './interface'
import userModel from './modules/user'

let isProduction = process.env.NODE_ENV === 'production'

const store = createStore<AllState>({
  modules: {
    user: userModel
  },
  plugins: isProduction ? [] : [createLogger({})],
  strict: true,
  devtools: !isProduction
})

export default store
