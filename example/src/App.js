import React, { memo } from 'react'

import Tile from 'tile'
import styles from './app.module.css'

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

const BlueTile = () => {
  return (
    <Tile
      ratio='cubeFull'
      dataTestId='my-blue-tile'
      className={styles.blueTile}
    >
      <TileContent
        data={{
          content: 'cube'
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
      ratio='cubeFull'
      type='a'
      onClick={clickHandler}
      dataTestId='clickable-tile'
      className={styles.clickableTile}
    >
      <TileContent
        data={{
          content: 'clickable cubeFull'
        }}
      />
    </Tile>
  )
}

const App = () => {
  return (
    <div className='app'>
      <div className='row'>
        <div className='col1'>
          <BlueTile />
        </div>
        <div className='col2'>
          <ClickableTile />
        </div>
      </div>

      <div className='row'>
        <Tile
          ratio='rectangle'
          dataTestId='cube'
          className={styles.rectangle}
        >
          <TileContent
            data={{
              content: 'rectangle'
            }}
          />
        </Tile>
        <Tile
          ratio='cube'
          dataTestId='rectangle'
          className={styles.cube}
        >
          <TileContent
            data={{
              content: 'cube'
            }}
          />
        </Tile>
      </div>

      <div className='row'>
        <BlueTile />
        <BlueTile />
        <BlueTile />
      </div>

    </div>
  )
}

export default App
