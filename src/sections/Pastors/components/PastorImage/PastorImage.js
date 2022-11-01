import Image from 'next/image'
import { Box, Grid, Typography } from '@mui/material'
import PropTypes from 'prop-types'
import pastorImageStyles from './PastorImage.styles'

const PastorImage = ({ name, imgSrc, alt }) => {
    return (
        <Grid item xs={6} sx={pastorImageStyles.root}>
            <Box sx={pastorImageStyles.imgWrapper}>
                <Image src={imgSrc} layout="fill" objectFit="cover" alt={alt} />
            </Box>
            <Typography sx={pastorImageStyles.name}>{name}</Typography>
        </Grid>
    )
}

PastorImage.propTypes = {
    imgSrc: PropTypes.string,
    alt: PropTypes.string,
    name: PropTypes.string,
}

export default PastorImage
