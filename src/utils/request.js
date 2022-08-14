import axios from 'axios'

import store from '@/store'
import {getToken} from './auth'
import {log} from './log'

let devURL = '/api' // 开发环境请求前缀
let proURL = '/api' // 生产环境请求前缀

const service = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? devURL : proURL,
  timeout: 5000
})

service.interceptors.request.use(
  (config) => {
    if (getToken()) {
      // https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Authorization
      config.headers = {
        Authorization: `Bearer ${getToken()}`,
        ...config.headers
      }
    }
    return config
  },
  (error) => {
    log('AxiosRequest', error)
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response) => {
    const data = response.data

    if (data.code !== 20000) {
      handleResponseMessage({
        code: data.code,
        message: data.message || 'Error',
        type: 'error'
      })

      // 50008: Illegal token;
      // 50012: Other clients logged in;
      // 50014: Token expired;
      if (data.code === 50008 || data.code === 50012 || data.code === 50014) {
        handleResponseMessage({
          code: data.code,
          message: 'You have been logged out, you can cancel to stay on this page, or log in again',
          type: 'login'
        })
      }

      return Promise.reject(new Error(data.message || 'Error'))
    } else {
      return response
    }
  },
  (error) => {
    log('AxiosResponse', error)
    return Promise.reject(error)
  }
)

export function handleResponseMessage(msg) {
  log('handleRequestMessage', msg.message)

  // 登陆性错误调回主页
  if (msg.type === 'login') {
    store.commit('user/resetToken')
    location.replace('/')
  }
}

export default service
