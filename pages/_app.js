import { CacheProvider } from '@emotion/react'
import { ThemeProvider } from '@mui/material'
import { theme } from '../utils/theme'
import '../styles/globals.css'
import createEmotionCache from '../utils/createEmotionCache'

const clientSideEmotionCache = createEmotionCache()

function MyApp({
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps,
}) {
    return (
        <CacheProvider value={emotionCache}>
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </CacheProvider>
    )
}

export default MyApp
