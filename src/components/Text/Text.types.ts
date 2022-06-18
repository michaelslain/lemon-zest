import { CSSProperties, MouseEvent } from 'react'

export default interface TextProps {
    children?: any
    className?: string
    style?: CSSProperties
    width?: number | string
    size?: 'small' | 'medium' | 'large'
    faint?: boolean
    onClick?(e: MouseEvent): any
}
