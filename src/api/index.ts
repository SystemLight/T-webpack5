import request from '@/utils/request'

export function reqLogin() {
  return request({
    url: '/login',
    method: 'POST',
    data: {
      token: 'hello token'
    }
  })
}
