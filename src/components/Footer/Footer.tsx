import React, { useContext, CSSProperties } from 'react'
import FooterProps from './Footer.types'
import styles from './Footer.module.css'
import ThemeContext from '../ThemeContext'
import ThemeTypes from '../Theme.types'
import { Text } from '../Text'

export default function Footer(props: FooterProps) {
    const theme: ThemeTypes = useContext(ThemeContext)

    const classes: string = [props.className, styles.container, styles[theme.type ?? '']].join(' ')
    const style: CSSProperties = {
        height: props.height,
        ...props.style,
    }

    return (
        <div className={classes} style={style}>
            <div className={styles.innerContainer}>
                {props.before}
                <Text size="small" faint>
                    © {props.appName ?? 'Untitled'} {new Date().getFullYear()}
                </Text>
                {props.after}
            </div>
        </div>
    )
}
