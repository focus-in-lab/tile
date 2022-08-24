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
| children   | Yes      | React Element | string                       |         |
| as         | No       | String                                       | div     |
| ratio      | No       | "cube","cubeDouble", "cubeFull", "rectangle" | "cube"  |

## Usage

```javascript

const BlueTile = () => {
  return (
    <Tile
      ratio='cube'
      data-test-id="my-blue-tile"
    >
      <label className="foo">click me</label>
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
      data-test-id="my-clickable-tile"
    >
      <label className="foo">click me</label>
    </Tile>
  )
}
```

## License

MIT © [focus-in-lab](https://github.com/focus-in-lab)
