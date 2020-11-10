import React from 'react'
import BaseTile from './BaseTile'
import withClickableTile from './withClickableTile'

const ClickableTile = (props) => {
  const Clickable = withClickableTile(props)(BaseTile)
  return <Clickable />
}

export default ClickableTile
