# ratio

> Hook and HOC component to keep scale of components.

[![NPM](https://img.shields.io/npm/v/ratio.svg)](https://www.npmjs.com/package/ratio) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @focusinlab/ratio
```

## Usage

```jsx
import React, { Component } from 'react'

import withRatio from 'ratio'

const MyDivA = () => <div>Div 1</div>
const DivWithRatioA = withRatio({ ratio: '1x1', className: 'mydiv' })(MyDivA)

class Example extends Component {
  render() {
    return <DivWithRatioA />
  }
}
```

## License

MIT © [focus-in-lab](https://github.com/focus-in-lab)
