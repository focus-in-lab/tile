import React, { useRef } from 'react'
import useRatio from './useRatio'
import styles from './ratio.module.css'

const withRatio = (props) => (WrappedComponent) => () => {
  const { ratio, className, ...others } = props
  const ratioValue = ratio.split('x')
  const ratioWidth = parseInt(ratioValue[0], 10)
  const ratioHeight = parseInt(ratioValue[1], 10)
  const componentRef = useRef(null)
  const { height } = useRatio(ratioWidth, ratioHeight, componentRef)

  return (
    <div
      ref={componentRef}
      className={`${styles.ratio} ${className}`}
      style={{ height: `${height}px` }}
    >
      <WrappedComponent {...others} />
    </div>
  )
}

export default withRatio
