# tile

> Tile customizable basic component

[![NPM](https://img.shields.io/npm/v/@focusinlab/tile.svg)](https://www.npmjs.com/package/@focusinlab/tile) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @focusinlab/tile
```

## Props:

| Attribute  | Required | Type                                         | Default |
| ---------- | -------- | -------------------------------------------- | ------- |
| dataTestId | Yes      | String                                       |         |
| children   | Yes      | React Fragment                               |         |
| type       | No       | String                                       | div     |
| dataRatio  | No       | "cube","cubeDouble", "cubeFull", "rectangle" | "cube"  |

## Usage

```javascript

const BlueTile = () => {
  return (
    <Tile
      ratio='cube'
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
const ClickableTile = () => {
  return (
    <Tile
      ratio='cube'
      type='a'
      onClick={clickHandler}
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
