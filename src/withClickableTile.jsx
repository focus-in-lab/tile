import React from 'react'

const withClickableTile = (props) => (WrappedComponent) => () => {
  const { clickHandler, ...others } = props

  return (
    <div onClick={clickHandler} onKeyDown={() => {}} role='button' tabIndex={0}>
      <WrappedComponent {...others} />
    </div>
  )
}

export default withClickableTile
