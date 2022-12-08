import '@/styles/index.scss'

import React,{useEffect, useState} from 'react'
import {createRoot} from 'react-dom/client'
import axios from 'axios'

import {sayFoo} from '@/demo/foo'

console.log(createRoot)
// function App() {
//   let [fooCss, setFooCss] = useState(null)
//
//   useEffect(function () {
//     // mockjs api
//     axios.post('/api/demo').then(({data}) => {
//       sayFoo(data)
//       setFooCss(fooCss)
//     })
//   }, [])
//
//   return (
//     <div>{fooCss}</div>
//   )
// }
//
// const root = createRoot(document.getElementById('root')!)
// root.render(<App/>)
