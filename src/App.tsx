import React from 'react'
import {RouterProvider} from 'react-router-dom'
import {Provider} from 'react-redux'
import {ConfigProvider} from 'antd'
import zhCN from 'antd/locale/zh_CN'

import router from '@/router'
import store from '@/store'

function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <Provider store={store}>
        <RouterProvider router={router}/>
      </Provider>
    </ConfigProvider>
  )
}

export default App
