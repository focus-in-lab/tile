import React from 'react'

import withRatio from 'ratio'
import 'ratio/dist/index.css'

const App = () => {
  const MyDivA = () => <div>Div 1</div>
  const MyDivB = () => <div>Div 2</div>
  const DivWithRatioA = withRatio({ ratio: '1x1', className: 'mydiv' })(MyDivA)
  const DivWithRatioB = withRatio({ ratio: '1x1', className: 'mydiv' })(MyDivB)
  return (
    <div className='app'>
      <div className='col'>
        <DivWithRatioA />
      </div>
      <div className='col'>
        <DivWithRatioB />
      </div>
    </div>
  )
}

export default App
