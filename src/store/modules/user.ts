import type {Module, MutationTree, ActionTree} from 'vuex'

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
  resetToken(state) {
    state.token = null
    removeToken()
  }
}

const actions: ActionTree<UserState, RootState> = {}

const module: Module<UserState, RootState> = {
  namespaced: true,
  state,
  mutations,
  actions
}

export default module
