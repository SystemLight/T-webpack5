import {createStore, createLogger} from 'vuex'
import type {ModuleTree, MutationTree, ActionTree} from 'vuex'
import type {GetterTree} from 'vuex'

import type {AllState, RootState} from './interface'

const isProduction = process.env.NODE_ENV === 'production'
const plugins = isProduction ? [] : [createLogger({})]

let state: RootState = {}

let getters: GetterTree<AllState, RootState> = {}

// 同步派发方法
let mutations: MutationTree<AllState> = {}

// 异步派发方法
let actions: ActionTree<AllState, RootState> = {}

let modules: ModuleTree<RootState> = {
  user: require('./modules/user').default
}

const store = createStore<AllState>({
  state: state as AllState,
  getters,
  mutations,
  actions,
  modules,
  plugins,
  strict: true,
  devtools: !isProduction
})

export default store
