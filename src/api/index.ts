import request from '@/utils/request'

export function reqLogin() {
  return request({
    url: '/login',
    method: 'POST'
  })
}

export function reqErr() {
  return request({
    url: '/err',
    method: 'POST'
  })
}
