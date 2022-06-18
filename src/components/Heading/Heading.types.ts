import { CSSProperties, MouseEvent } from 'react'

export default interface HeadingProps {
    children?: any
    className?: string
    style?: CSSProperties
    onClick?(e: MouseEvent): any
    size?: 'small' | 'medium' | 'large'
}
