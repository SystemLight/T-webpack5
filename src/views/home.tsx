import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import axios from 'axios'
import {Button} from 'antd'

import {ResponseData} from '@/interfaces'
import {sayFoo} from '@/demo/foo'
import CanvasNestBackground from '@/components/CanvasNestBackground'

import {decrement, increment} from '@/store/feature/counter/slice'
import {counterSelector} from '@/store/feature/counter/selector'

function Home() {
  let counter = useSelector(counterSelector)
  let dispatch = useDispatch()

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
        <h1>{fooCss} {counter}</h1>
        <div>
          <button
            onClick={() => {
              dispatch(decrement())
            }}
          >
            减少
          </button>
          <button
            onClick={() => {
              dispatch(increment())
            }}
          >
            增加
          </button>
        </div>
        <ul>
          <li><Link to={'/foo'}>foo</Link></li>
          <li><Link to={'/bar'}>bar</Link></li>
        </ul>
        <div>
          <Button
            type={'primary'}
            onClick={handleToggle}
          >
            toggle
          </Button>
        </div>
      </div>
      {isShow && <CanvasNestBackground/>}
    </div>
  )
}

export default Home
