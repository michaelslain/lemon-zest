import { CSSProperties, MouseEvent } from 'react'

export default interface LinkProps {
    children?: any
    className?: string
    style?: CSSProperties
    visible?: boolean
    color?: 'primary' | 'secondary'
    href?: string
    onClick?(e: MouseEvent): any
    target?: string
}
