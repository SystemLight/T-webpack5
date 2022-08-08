module.exports = [
  {
    url: '/api/login',
    type: 'post',
    response: () => {
      return {
        code: 50008,
        msg: 'error',
        data: {
          token: 'hello token'
        }
      }
    }
  }
]
