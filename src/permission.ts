import router from '@/router'
import {getToken} from '@/utils/auth'

// 登陆白名单
const whiteList = ['/', '/login']

router.beforeEach(async (to, from, next) => {
  const hasToken = getToken()

  if (hasToken) {
    if (to.path === '/login') {
      return next({path: '/'})
    }
  } else {
    if (whiteList.indexOf(to.path) === -1) {
      return next(`/login?redirect=${to.path}`)
    }
  }

  next()
})
