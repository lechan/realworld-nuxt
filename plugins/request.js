/**
 * 基于 axios 封装的请求模块
 */

import axios from 'axios'

// 创建请求对象
export const request = axios.create({
  baseURL: 'https://conduit.productionready.io'
})

// 通过插件机制获取到上下文对象
// 插件导出函数必须作为default成员
export default ({ store }) => {
  // 请求拦截器
  // 任何请求都要经过请求拦截器
  // 我们可以在请求拦截器中做一些公共的业务处理，例如统一设置token
  request.interceptors.request.use(function (config) {
    // Do something before request is sent
    const { user } = store.state.user
    if (user && user.token) {
      config.headers.Authorization = `Token ${user.token}`
    }
    // 返回config请求配置对象
    return config;
  }, function (error) {
    // 如果请求失败就会进入这里
    // Do something with request error
    return Promise.reject(error);
  });

}