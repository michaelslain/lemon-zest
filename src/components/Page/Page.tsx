import React from 'react'
import PageProps from './Page.types'
import styles from './Page.module.css'
import { ThemeProvider, DefaultTheme } from '../ThemeContext'
import ThemeTypes from '../Theme.types'

export default function Page(props: PageProps) {
    const theme: ThemeTypes = { ...DefaultTheme, ...(props.theme ?? {}) }

    return <ThemeProvider value={theme}>{props.children}</ThemeProvider>
}
