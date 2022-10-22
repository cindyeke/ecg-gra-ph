import { Box } from '@mui/material'
import footerStyles from './Footer.styles'

const Footer = () => {
    return (
        <Box
            sx={{
                height: '5vh',
                width: '100%',
                bgcolor: 'blue',
                position: 'absolute',
                bottom: 0,
            }}
        >
            Footer
        </Box>
    )
}

export default Footer
