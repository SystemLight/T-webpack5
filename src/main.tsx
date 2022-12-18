import '@/styles/index.scss'

import React, {memo, useEffect, useRef, useState} from 'react'
import {createRoot} from 'react-dom/client'
import ReactDOM from 'react-dom'
import CanvasNest from 'canvas-nest.js'
import axios from 'axios'

import type {ResponseData} from '@/interfaces'
import {sayFoo} from '@/demo/foo'

const CanvasNestComponent = memo(function () {
  let appRef = useRef<HTMLDivElement>(null)

  useEffect(function () {
    const cn = new CanvasNest(
      appRef.current,
      {
        color: '255,0,0'
      }
    )

    return () => {
      cn.destroy()
    }
  }, [appRef])

  return ReactDOM.createPortal(
    <div className={'w-[100vw] h-[100vh] fixed left-0 top-0 -z-20'} ref={appRef}></div>,
    document.body
  )
}, () => true)

CanvasNestComponent.displayName = 'CanvasNestComponent'

function App() {
  let [fooCss, setFooCss] = useState<string>('')
  let [isShow, setIsShow] = useState(true)

  useEffect(function () {
    // mockjs api
    axios.post<ResponseData>('/api/demo').then(({data}) => {
      sayFoo(data)
      setFooCss(data.msg)
    })
  }, [])

  const handleToggle = () => {
    setIsShow(!isShow)
  }

  return (
    <div>
      <div>
        <h1>{fooCss}</h1>
        <div>
          <button onClick={handleToggle}>toggle</button>
        </div>
      </div>
      {isShow && <CanvasNestComponent/>}
    </div>
  )
}

const root = createRoot(document.getElementById('root')!)
root.render(<App/>)
