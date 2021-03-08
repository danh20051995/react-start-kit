/**
 * File name: src/hooks/useDidMountEffect.js
 * Created by Visual studio code
 * User: Danh Le / danh.danh20051995@gmail.com
 * Date: 2021-03-08 14:15:40
 */
import { useEffect, useRef } from 'react'

const useDidMountEffect = (callback, deps) => {
  const didMount = useRef(false)

  useEffect(() => {
    if (didMount.current) {
      return callback()
    } else {
      didMount.current = true
    }
  }, deps)
}

export default useDidMountEffect
