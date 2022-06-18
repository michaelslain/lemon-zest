import { createContext, Context } from 'react'
import ThemeTypes from './Theme.types'

export const DefaultTheme: ThemeTypes = {
    type: 'light',
    primaryColor: '#fc036f',
    secondaryColor: '#e27aff',
    primaryFontFamily: 'serif',
    secondaryFontFamily: 'sans-serif',
}

const ThemeContext: Context<any> = createContext(DefaultTheme)

export const ThemeProvider = ThemeContext.Provider

export default ThemeContext
