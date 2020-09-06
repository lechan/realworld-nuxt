const cookieparser = process.server ? require('cookieparser') : undefined

const actions = {
  // nuxtServerInit 是 nuxt 中一个特殊的action
  // 这个action会在服务端渲染期间自动调用
  // 作用：初始化容器数据，传递数据给客户端使用
  nuxtServerInit ({ commit }, { req }) {
    let user = null
    if (req.headers.cookie) {
      // 使用cookieparser把cookie字符串转为js对象
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        user = JSON.parse(parsed.user)
      } catch (err) {
        // No valid cookie found
      }
    }

    // 提交mutation修改state状态
    commit('user/setUser', user)
  }
}

export {
  actions
}