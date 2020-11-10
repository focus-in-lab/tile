import React from 'react'
import PropTypes from 'prop-types'
import withRatio from '@focusinlab/ratio'
import styles from './baseTile.module.css'

const Base = ({ data, render }) => render(data)

const BaseTile = ({ ratio, data, render, className }) => {
  const BaseWithRatio = withRatio({ ratio, data, render, className })(Base)
  return <BaseWithRatio />
}

BaseTile.propTypes = {
  // eslint-disable-next-line
  data: PropTypes.object,
  ratio: PropTypes.string.isRequired,
  render: PropTypes.func,
  className: PropTypes.string
}

BaseTile.defaultProps = {
  data: {},
  render: () => {},
  className: styles.defaultTileBox
}

export default BaseTile
