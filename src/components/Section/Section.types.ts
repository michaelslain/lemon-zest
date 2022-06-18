import ThemeTypes from '../Theme.types'
import { CSSProperties } from 'react'

export default interface SectionProps {
    theme?: ThemeTypes
    style?: CSSProperties
    id?: string
    className?: string
    children?: any
    color?: 'primary' | 'secondary'
}
