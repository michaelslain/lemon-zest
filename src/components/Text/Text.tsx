import React, { useContext, CSSProperties } from 'react'
import TextProps from './Text.types'
import styles from './Text.module.css'
import ThemeContext from '../ThemeContext'
import ThemeTypes from '../Theme.types'

export default function Text(props: TextProps) {
    const theme: ThemeTypes = useContext(ThemeContext)

    const classes: string = [styles.text, props.className, props.faint ? styles.faint : '', styles[props.size ?? 'medium'], styles[theme.type ?? '']].join(' ')
    const style: CSSProperties = { width: props.width, fontFamily: theme.secondaryFontFamily, ...props.style }

    return (
        <p className={classes} style={style} onClick={props.onClick ?? (_ => {})}>
            {props.children ?? 'Empty Text'}
        </p>
    )
}
