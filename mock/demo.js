module.exports = [
  {
    url: '/api/demo',
    type: 'post',
    response: (req) => {
      return {
        code: 200,
        msg: 'ok'
      }
    }
  }
]
