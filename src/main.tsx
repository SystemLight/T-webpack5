import 'antd/dist/reset.css'
import '@/styles/index.scss'

import React from 'react'
import {createRoot} from 'react-dom/client'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'

import App from '@/App'
import '@/assets/svg'

dayjs.locale('zh-cn')
console.log(process.env.AUTHOR)
console.log(process.env.MODE)
const root = createRoot(document.getElementById('app')!)
root.render(<App/>)
