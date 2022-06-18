import React, { useContext, CSSProperties } from 'react'
import ButtonProps from './Button.types'
import styles from './Button.module.css'
import ThemeContext from '../ThemeContext'
import ThemeTypes from '../Theme.types'
import { getBrightness, toRGB } from '../Color'

export default function Button(props: ButtonProps) {
    const theme: ThemeTypes = useContext(ThemeContext)
    const color: string = props.color === 'primary' ? theme.primaryColor ?? '' : theme.secondaryColor ?? ''

    const classes: string = [props.className, styles.container, styles[props.size ?? 'medium'], getBrightness(toRGB(color)) < 50 ? styles.dark : styles.light].join(' ')

    const style: CSSProperties = {
        background: props.type === 'primary' ? color : 'transparent',
        fontFamily: theme.secondaryFontFamily,
        borderColor: color,
        ...props.style,
    }

    return (
        <a className={classes} style={style} onClick={props.onClick ?? (_ => {})} href={props.href}>
            {props.children ?? 'Empty Button'}
        </a>
    )
}
