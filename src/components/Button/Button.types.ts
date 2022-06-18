import { CSSProperties, MouseEvent } from 'react'

export default interface ButtonProps {
    className?: string
    style?: CSSProperties
    size?: 'small' | 'medium' | 'large'
    type?: 'primary' | 'secondary'
    color?: 'primary' | 'secondary'
    onClick?(e: MouseEvent): any
    href?: string
    children?: any
}
