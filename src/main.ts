import '@/styles/global.scss'
import '@/styles/style.scss'

import axios from 'axios'

import {sayFoo} from '@/modules/foo'

// mockjs api
axios.post('/api/demo').then(({data}) => {
  sayFoo(data)
})
