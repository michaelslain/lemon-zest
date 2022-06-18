import { CSSProperties } from 'react'

export default interface FooterProps {
    className?: string
    style?: CSSProperties
    before?: any
    after?: any
    height?: number | string
    appName?: string
}
