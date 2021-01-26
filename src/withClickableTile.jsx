import React from 'react'

const withClickableTile = (props) => (WrappedComponent) => () => {
  const { clickHandler, data, render, ...others } = props

  return (
    <div
      onClick={clickHandler}
      onKeyDown={() => {}}
      role='button'
      tabIndex={0}
      {...others}
    >
      <WrappedComponent {...others} data={data} render={render} />
    </div>
  )
}

export default withClickableTile
