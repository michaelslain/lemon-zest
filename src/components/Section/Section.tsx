import React, { useContext, CSSProperties } from 'react'
import SectionProps from './Section.types'
import styles from './Section.module.css'
import ThemeContext, { ThemeProvider } from '../ThemeContext'
import ThemeTypes from '../Theme.types'

export default function Section(props: SectionProps) {
    const parentTheme: ThemeTypes = useContext(ThemeContext)

    if (props.theme) {
        const theme: ThemeTypes = { ...parentTheme, ...props.theme }

        const classes: string = [props.className, styles.container, styles[theme.type ?? '']].join(' ')
        const style: CSSProperties = {
            ...(props.color
                ? {
                      background: props.color === 'primary' ? theme.primaryColor : theme.secondaryColor,
                  }
                : {}),
            ...props.style,
        }

        return (
            <ThemeProvider value={theme}>
                <div className={classes} id={props.id} style={style}>
                    {props.children}
                </div>
            </ThemeProvider>
        )
    }

    const classes: string = [props.className, styles.container, styles[parentTheme.type ?? '']].join(' ')
    const style: CSSProperties = {
        ...(props.color
            ? {
                  background: props.color === 'primary' ? parentTheme.primaryColor : parentTheme.secondaryColor,
              }
            : {}),
        ...props.style,
    }

    return (
        <div className={classes} id={props.id} style={style}>
            {props.children}
        </div>
    )
}
