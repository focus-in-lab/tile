import React from 'react'

import styled from 'styled-components'
import { ClickableTile, BaseTile } from 'tile'

const CustomClickableDivTile = ({ data, ...others }) => {
  const clickHandler = () => {
    alert(`Hello : ${data.text}`)
  }

  const render = (dataToDisplay) => (
    <div>custom tile with text: {dataToDisplay.text}</div>
  )

  return (
    <ClickableTile
      ratio='1x1'
      clickHandler={clickHandler}
      render={render}
      data={data}
      {...others}
    />
  )
}

const StyledCustomTile = styled(CustomClickableDivTile)`
  background: blue;
  color: white;
  align-items: center;
  justify-content: center;
`

const CustomAnchorTile = ({ data, ...others }) => {
  const render = () => <a href='/'>Hola anchor</a>
  return <BaseTile ratio='1x1' render={render} {...others} />
}

const App = () => {
  return (
    <div className='app'>
      <div className='col'>
        <CustomAnchorTile />
      </div>
      <div className='col'>
        <StyledCustomTile data={{ text: 'foo' }} />
      </div>
    </div>
  )
}

export default App
