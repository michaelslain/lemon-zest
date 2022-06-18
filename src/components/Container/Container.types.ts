import { CSSProperties, MouseEvent } from 'react'

export default interface ContainerProps {
    className?: string
    style?: CSSProperties
    onClick?(e: MouseEvent): any
    children?: any
    color?: 'primary' | 'secondary'
    brightness?: 'darker' | 'normal' | 'lighter' | 'transparent'
    width?: string | number
    height?: string | number
    round?: boolean
    shadow?: true
    flex?: true
    flexDirection?: 'horizontal' | 'vertical' | 'row' | 'column'
    horizontalAlignment?: 'space-around' | 'space-between' | 'space-evenly' | 'start' | 'end'
    verticalAlignment?: 'space-around' | 'space-between' | 'space-evenly' | 'start' | 'end'
}
