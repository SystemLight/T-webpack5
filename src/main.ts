import axios from 'axios'

// mockjs api
axios.post('/api/demo').then(({data}) => {
  console.log('hello', data)
})
