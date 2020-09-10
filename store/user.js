// 在服务端渲染期间运行都是同一个实例
// 为了防止数据冲突，务必要把state定义成一个函数，返回数据对象
const state = () => {
  return {
    // 当前登录用户的登录状态
    user: null
  }
}

const mutations = {
  setUser (state, data) {
    state.user = data
  }
}

export default {
  state,
  mutations
}