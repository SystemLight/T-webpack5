import {getToken, removeToken, setToken} from '@/utils/auth'

const state = {
  token: getToken()
}

const mutations = {
  setToken(state, payload) {
    state.token = payload
    setToken(payload)
  },
  resetToken(state) {
    state.token = null
    removeToken()
  }
}

const actions = {}

const module = {
  namespaced: true,
  state,
  mutations,
  actions
}

export default module
