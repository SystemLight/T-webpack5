import '@/styles/index.scss'

import axios from 'axios'

import {sayFoo} from '@/demo/foo'
import fooCss from '@/demo/foo.css'

// mockjs api
axios.post('/api/demo').then(({data}) => {
  sayFoo(data)
  console.log(fooCss)
})
