module.exports = [
  {
    url: '/api/login',
    type: 'post',
    response: () => {
      return {
        code: 20000,
        msg: 'ok',
        data: {
          token: 'mock token'
        }
      }
    }
  }
]
