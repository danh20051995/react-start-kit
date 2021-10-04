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
