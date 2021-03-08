/**
 * File name: src/hooks/useWindowResize.js
 * Created by Visual studio code
 * User: Danh Le / danh.danh20051995@gmail.com
 * Date: 2021-03-08 14:18:01
 */
import { useState, useEffect } from 'react'

const useWindowResize = () => {
  const isClient = typeof window === 'object'
  const getWindowSize = () => {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    }
  }
  const [ windowSize, setWindowSize ] = useState(getWindowSize())

  const handleResizeWindow = () => {
    setWindowSize(getWindowSize())
  }

  useEffect(() => {
    if (!isClient) {
      return false
    }

    window.addEventListener('resize', handleResizeWindow)

    return () => window.removeEventListener('resize', handleResizeWindow)
  }, [])

  return windowSize
}
export { useWindowResize }
