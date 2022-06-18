import { CSSProperties } from 'react'
import { TabProps } from '../Tab'

export default interface NavProps {
    tabs?: Array<TabProps>
    className?: string
    style?: CSSProperties
    type?: 'up' | 'right' | 'down' | 'left'
    before?: any
    after?: any
}
