# tile

> Tile customizable basic component

[![NPM](https://img.shields.io/npm/v/tile.svg)](https://www.npmjs.com/package/tile) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @focusinlab/tile
```

## Props:

| Attribute     | Required | Type                                                     | Default |
| ------------- | -------- | -------------------------------------------------------- | ------- |
| type          | No       | String                                                   | div     |
| styledBox     | Yes      | Styled css                                               |         |
| styledContent | Yes      | Styled css                                               |         |
| dataTestId    | Yes      | String                                                   |         |
| dataRatio     | No       | "default", "cubeDouble", "cubeFull", "rectangle", "cube" | "cube"  |
| children      | Yes      | TileContent                                              |         |

## Usage

Creating a default box (div)

```javascript
// path/to/styles.jsx
import { css } from 'styled-components'

export const StyledBox = {
  blue: css`
    background-color: #0b5394;
  `
}

export const StyledContent = {
  nav: css`
    .foo {
      color: #fff;
      padding: 1px;
    }
  `
}
```

```javascript
import { StyledBox, StyledContent } from 'path/to/styles.jsx'

const BlueTile = () => {
  return (
    <Tile
      ratio='cube'
      styledBox={StyledBox.blue}
      styledContent={StyledContent.nav}
      dataTestId="my-blue-tile"
    >
      <>
        <label className="foo">click me</label>
      <>
    </Tile>
  )
}
```

Creating an "anchor" box

```javascript
import { StyledBox, StyledContent } from 'path/to/styles.jsx'

const ClickableTile = () => {
  return (
    <Tile
      ratio='cube'
      type='a'
      onClick={clickHandler}
      styledBox={StyledBox.blue}
      styledContent={StyledContent.nav}
      dataTestId="my-clickable-tile"
    >
      <>
        <label className="foo">click me</label>
      <>
    </Tile>
  )
}
```

## License

MIT © [focus-in-lab](https://github.com/focus-in-lab)
