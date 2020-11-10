# tile

> Tile Wrapper Componenet and Clickable HOC.

[![NPM](https://img.shields.io/npm/v/tile.svg)](https://www.npmjs.com/package/tile) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @focusinlab/tile
```

## Usage

```jsx
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
```

## License

MIT © [focus-in-lab](https://github.com/focus-in-lab)
