import '@/styles/tailwind.css'
import '@/styles/global.scss'
import '@/styles/themes.scss'

import React from 'react'
import {createRoot} from 'react-dom/client'

import App from './App'

const root = createRoot(document.getElementById('root')!)

root.render(React.createElement(React.StrictMode, null, React.createElement(App)))
