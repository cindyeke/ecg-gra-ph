import { Box, Typography } from '@mui/material'
import footerStyles from './Footer.styles'

const Footer = () => {
    return (
        <Typography sx={footerStyles.root}>
            The next service is in 5 days, 2 hours, 45m
        </Typography>
    )
}

export default Footer
