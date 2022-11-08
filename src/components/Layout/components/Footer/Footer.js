import { Box, Typography } from '@mui/material'
import { keyframes } from '@mui/system'
import footerStyles from './Footer.styles'

const marquee = keyframes`
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(-100%, 0);
  }
`

const Footer = () => {
    return (
        // <Box sx={footerStyles.root}>
        //     <Typography variant="h6" sx={footerStyles.text}>
        //         The next service is in 5 days, 2 hours, 45m The next service is
        //         in 5 days, 2 hours, 45m The next service is in 5 days, 2 hours,
        //         45m
        //     </Typography>
        // </Box>
        <Box
            sx={{
                height: '5vh',
                width: '100%',
                bgcolor: 'background.secondary',
                position: 'absolute',
                bottom: 0,
                color: 'text.accent2',
                padding: '0 1.2rem',
                display: 'flex',
                alignItems: 'center',
                fontWeight: 300,
                overflow: 'hidden',
                zIndex: 1,
            }}
        >
            <Box
                sx={{
                    overflow: 'hidden',
                    height: '100%',
                    whiteSpace: 'nowrap',
                    animation: `${marquee} 10s linear infinite`,
                    margin: 0,
                    fontSize: 0,
                    display: 'inline-block',
                }}
            >
                <Box
                    component="span"
                    sx={{
                        fontSize: '1rem',
                        display: 'inline-block',
                        minWidth: '100vw',
                        margin: 0,
                        padding: 0,
                        color: 'white',
                    }}
                >
                    The next service is in 5 days, 2 hours, 45m
                </Box>
                <Box
                    component="span"
                    sx={{
                        fontSize: '1rem',
                        display: 'inline-block',
                        minWidth: '100vw',
                        margin: 0,
                        padding: 0,
                        color: 'white',
                    }}
                >
                    The next service is in 5 days, 2 hours, 45m
                </Box>
            </Box>
        </Box>
    )
}

export default Footer
