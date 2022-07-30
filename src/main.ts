import axios from 'axios'

import './hello.vue'
import '@/global.scss'

// mockjs api
axios.post('/api/demo').then(({data}) => {
  console.log('hello', data)
})
