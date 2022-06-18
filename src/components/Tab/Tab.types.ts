import { CSSProperties, MouseEvent } from 'react'

export default interface TabProps {
    text: string
    href: string
    className?: string
    style?: CSSProperties
    onClick?(e: MouseEvent): any
    target?: string
    navType?: 'up' | 'right' | 'down' | 'left'
}
