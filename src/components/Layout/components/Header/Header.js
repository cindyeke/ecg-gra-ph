import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import headerStyles from './Header.styles'
import logo from '../../../../../public/images/logo.png'

const Header = () => {
    return (
        <Grid
            sx={headerStyles.root}
            container
            flexDirection="column"
            justifyContent="center"
        >
            <Box style={headerStyles.imgWrapper}>
                <Image src={logo} alt="logo" layout="fill" objectFit="cover" />
            </Box>
            <Box sx={headerStyles.verticalLine}></Box>
            <Box style={headerStyles.textsWrapper}>
                <Typography variant="h2" sx={headerStyles.text1}>
                    Welcome to
                </Typography>
                <Typography variant="h1" sx={headerStyles.text2}>
                    ECG Port Harcourt City
                </Typography>
            </Box>
        </Grid>
    )
}

export default Header
