import axios from 'axios'

import '@/global.scss'

// mockjs api
axios.post('/api/demo').then(({data}) => {
  console.log('hello', data)
})
