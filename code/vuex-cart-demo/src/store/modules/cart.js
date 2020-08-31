const state = {
  cartProducts: []
}
const getters = {}
const mutations = {
  addToCart (state, product) {
    // 1. cartProducts 中没有该商品，把该商品添加到数组，并增加count，isChecked，totalPrice
  }
}
const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
