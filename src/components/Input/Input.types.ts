import { CSSProperties, ChangeEventHandler } from 'react'

export default interface InputProps {
    className?: string
    style?: CSSProperties
    value?: string
    label?: string
    onChange?: ChangeEventHandler<HTMLInputElement>
}
