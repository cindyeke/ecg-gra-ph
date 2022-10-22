import { createTheme } from '@mui/material/styles'

const font = "'Raleway', sans-serif"

export const theme = createTheme({
    palette: {
        background: {
            main: '#EEEEEE',
            secondary: '#0026B9',
        },
        text: {
            primary: '#858585',
            secondary: '#0026B9',
            accent1: '#1A1414',
            accent2: '#EEEEEE',
        },
    },
    typography: {
        fontFamily: font,
        h1: {
            fontSize: '1.3rem',
            fontWeight: '700',
        },
        h2: {
            fontSize: '1rem',
        },
        h6: {
            fontSize: '1rem',
        },
    },
})
