import React, { useContext, CSSProperties } from 'react'
import LinkProps from './Link.types'
import styles from './Link.module.css'
import ThemeContext from '../ThemeContext'
import ThemeTypes from '../Theme.types'

export default function Link(props: LinkProps) {
    const theme: ThemeTypes = useContext(ThemeContext)
    const color: string = props.color === 'primary' ? theme.primaryColor ?? '' : theme.secondaryColor ?? ''

    const classes: string = [styles.text, props.className, props.visible || props.visible == null ? styles.visible : ''].join(' ')
    const style: CSSProperties = {
        color,
        ...props.style,
    }

    return (
        <a className={classes} style={style} href={props.href} onClick={props.onClick ?? (_ => {})} target={props.target}>
            {props.children ?? 'Empty Link'}
        </a>
    )
}
