import type {Module, MutationTree} from 'vuex'

import type {RootState, UserState} from '@/store/interface'
import {getToken, setToken, removeToken} from '@/utils/auth'

const state: UserState = {
  token: getToken()
}

const mutations: MutationTree<UserState> = {
  setToken(state, payload) {
    state.token = payload
    setToken(payload)
  },
  removeToken(state) {
    state.token = null
    removeToken()
  }
}

const module: Module<UserState, RootState> = {
  namespaced: true,
  state,
  mutations
}

export default module
