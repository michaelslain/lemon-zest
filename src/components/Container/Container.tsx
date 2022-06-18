import React, { useContext, CSSProperties } from 'react'
import ContainerProps from './Container.types'
import styles from './Container.module.css'
import ThemeContext from '../ThemeContext'
import ThemeTypes from '../Theme.types'

export default function Container(props: ContainerProps) {
    const theme: ThemeTypes = useContext(ThemeContext)
    const color: string = (props.color === 'primary' ? theme.primaryColor : theme.secondaryColor) ?? ''

    const classes: string = [
        props.className,
        styles.container,
        styles[theme.type ?? ''],
        styles[props.brightness ?? 'normal'],
        styles[props.shadow ? 'shadow' : ''],
        styles[props.round ? 'round' : ''],
        styles[props.flex ? 'flex' : ''],
        styles[props.flexDirection ?? ''],
        styles[props.horizontalAlignment ? styles['horizontalAlignment' + props.horizontalAlignment] : ''],
        styles[props.verticalAlignment ? styles['verticalAlignment' + props.verticalAlignment] : ''],
    ].join(' ')
    const style: CSSProperties = {
        background: props.color ? color : '',
        width: props.width,
        height: props.height,
        ...props.style,
    }

    return (
        <div className={classes} style={style} onClick={props.onClick ?? (() => {})}>
            {props.children}
        </div>
    )
}
