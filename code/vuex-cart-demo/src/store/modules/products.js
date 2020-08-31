import axios from 'axios'

const apiPrefix = 'http://127.0.0.1:3000'
const state = {
  products: []
}
const getters = {}
const mutations = {
  setProducts (state, payload) {
    state.products = payload
  }
}
const actions = {
  async getProducts ({ commit }) {
    const { data } = await axios({
      method: 'GET',
      url: `${apiPrefix}/products`
    })
    commit('setProducts', data)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
