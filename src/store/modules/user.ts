import type {Module, MutationTree, ActionTree} from 'vuex'

import type {RootState, UserState} from '@/store/interface'

const state: UserState = {
  token: 'token value'
}

const mutations: MutationTree<UserState> = {
  setToken(state, payload) {
    state.token = payload
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
