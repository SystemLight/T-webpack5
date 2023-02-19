import React from 'react'
import {createBrowserRouter} from 'react-router-dom'

import Home from '@/views/home'
import Foo from '@/views/foo'
import Bar from '@/views/bar'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/foo',
    element: <Foo/>
  },
  {
    path: '/bar',
    element: <Bar/>
  }
])

export default router
