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
    let data = response.data

    // 自定义返回码
    if (data.code !== 20000) {
      handleError(data)

      if (data.code === 50008 || data.code === 50012 || data.code === 50014) {
        handleTokenError(data)
      }

      return Promise.reject(new Error(data.msg || 'Error'))
    } else {
      return data
    }
  },
  (error) => {
    log('AxiosResponse', error)
    return Promise.reject(error)
  }
)

function handleError(msg) {
  log('handleError', msg)
}

function handleTokenError(msg) {
  log('handleTokenError', msg)
  store.commit('user/removeToken')
  location.replace('/')
}

export default service
