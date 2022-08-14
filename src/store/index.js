import {createLogger, createStore} from 'vuex'

const isProduction = process.env.NODE_ENV === 'production'
const plugins = isProduction ? [] : [createLogger({})]

let state = {}

let getters = {}

// 同步派发方法
let mutations = {}

// 异步派发方法
let actions = {}

let modules = {
  user: require('./modules/user').default
}

const store = createStore({
  state: state,
  getters,
  mutations,
  actions,
  modules,
  plugins,
  strict: true,
  devtools: !isProduction
})

export default store
