import React, { memo } from 'react'

import { css } from 'styled-components'
import Tile from 'tile'

const TileContent = memo(({ data }) => {
  const { content } = data
  return (
    <>
      {content && (
        <label className='description' data-test-id='tile-content-description'>
          {content}
        </label>
      )}
    </>
  )
})

const StyledBox = {
  blue: css`
    background-color: #0b5394;
  `
}

const StyledContent = {
  nav: css`
    .description {
      color: #fff;
      padding: 1px;
    }
  `
}

const BlueTile = () => {
  return (
    <Tile
      ratio='cube'
      styledBox={StyledBox.blue}
      styledContent={StyledContent.nav}
      dataTestId='my-blue-tile'
    >
      <TileContent
        data={{
          content: 'Blue tile'
        }}
      />
    </Tile>
  )
}

const ClickableTile = () => {
  const clickHandler = () => {
    alert('Hello!')
  }
  return (
    <Tile
      ratio='cube'
      type='a'
      onClick={clickHandler}
      styledBox={StyledBox.blue}
      styledContent={StyledContent.nav}
      dataTestId='clickable-tile'
    >
      <TileContent
        data={{
          content: 'clickable tile'
        }}
      />
    </Tile>
  )
}

const App = () => {
  return (
    <div className='app'>
      <div className='col'>
        <BlueTile />
      </div>
      <div className='col'>
        <ClickableTile />
      </div>
    </div>
  )
}

export default App
