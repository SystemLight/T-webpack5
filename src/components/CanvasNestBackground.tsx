import React, {memo, useEffect, useRef} from 'react'
import ReactDOM from 'react-dom'
import CanvasNest from 'canvas-nest.js'

const CanvasNestBackground = memo(function () {
  let bgRef = useRef<HTMLDivElement>(null)

  useEffect(function () {
    const cn = new CanvasNest(
      bgRef.current,
      {
        color: '255,0,0'
      }
    )

    return () => {
      cn.destroy()
    }
  }, [])

  return ReactDOM.createPortal(
    <div
      className={'w-[100vw] h-[100vh] fixed left-0 top-0 -z-20'}
      ref={bgRef}
    />,
    document.body
  )
}, () => true)

CanvasNestBackground.displayName = 'CanvasNestBackground'

export default CanvasNestBackground
