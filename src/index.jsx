import React from 'react'
import PropTypes from 'prop-types'
import { StyledTile } from './styles'

const Tile = React.forwardRef(
  ({ type, children, dataTestId, ratio, ...rest }, ref) => {
    return (
      <StyledTile
        ref={ref}
        ratio={ratio}
        data-test-id={dataTestId}
        data-ratio={ratio}
        as={type}
        {...rest}
      >
        {children}
      </StyledTile>
    )
  }
)

Tile.displayName = 'Tile'

Tile.propTypes = {
  children: PropTypes.element.isRequired,
  dataTestId: PropTypes.string.isRequired,
  styledBox: PropTypes.array.isRequired,
  styledContent: PropTypes.array.isRequired,
  ratio: PropTypes.string,
  type: PropTypes.string
}

Tile.defaultProps = {
  ratio: 'cube',
  type: 'div'
}

export default Tile
