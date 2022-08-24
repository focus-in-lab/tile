import React from 'react'
import styles from './styles'

declare const IDENTS: readonly ['cube', 'cubeDouble', 'cubeFull', 'rectangle']
export type Ratio = typeof IDENTS[number]

type Props<C extends React.ElementType> = {
  as?: C
  ratio?: Ratio
  children: React.ReactNode | string
} & React.ComponentPropsWithRef<C>

const Tile = <C extends React.ElementType>({
  as = 'div',
  children,
  ratio = 'cube',
  ...restProps
}: Props<C>) => {
  const Component = as
  return (
    <Component style={(styles.tile, styles[ratio])} {...restProps}>
      {children}
    </Component>
  )
}

export default Tile
