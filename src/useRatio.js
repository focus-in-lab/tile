import { useState, useEffect, useCallback } from 'react'

const useRatio = (ratioWidth, ratioHeight, ref) => {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  const handleResize = useCallback(
    () => setWidth(ref.current ? ref.current.clientWidth : 0),
    [ref]
  )

  window.addEventListener('resize', handleResize)

  useEffect(() => {
    handleResize()
    setHeight(Math.round((width / ratioWidth) * ratioHeight))
    return () => window.removeEventListener('resize', handleResize)
  }, [width, ratioHeight, ratioWidth, ref, handleResize])
  return { width, height }
}

export default useRatio
