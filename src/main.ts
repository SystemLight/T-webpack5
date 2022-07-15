import axios from 'axios'

axios.post('/api/demo').then(({data})=>{
  console.log(data)
})
// console.log('hello')
