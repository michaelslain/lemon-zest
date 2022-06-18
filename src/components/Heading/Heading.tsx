import React, { useContext, CSSProperties } from 'react'
import HeadingProps from './Heading.types'
import styles from './Heading.module.css'
import ThemeContext from '../ThemeContext'
import ThemeTypes from '../Theme.types'

export default function Heading(props: HeadingProps) {
    const theme: ThemeTypes = useContext(ThemeContext)

    const classes: string = [styles.text, props.className, styles[props.size ?? 'medium'], styles[theme.type ?? '']].join(' ')
    const style: CSSProperties = {
        fontFamily: theme.primaryFontFamily,
        ...props.style,
    }

    const child: any = props.children ?? 'Empty Heading'

    switch (props.size) {
        case 'large':
            return (
                <h1 className={classes} style={style}>
                    {child}
                </h1>
            )
        case 'small':
            return (
                <h3 className={classes} style={style}>
                    {child}
                </h3>
            )
        case 'medium':
        default:
            return (
                <h2 className={classes} style={style}>
                    {child}
                </h2>
            )
    }
}
