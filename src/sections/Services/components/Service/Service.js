import { Box, Typography } from '@mui/material'
import PropTypes from 'prop-types'
import serviceStyles from './Service.styles'

const Service = ({ name, dayAndTime }) => {
    return (
        <Box sx={serviceStyles.root}>
            <Box sx={serviceStyles.bulletPoint} />
            <Box>
                <Typography variant="h6" sx={serviceStyles.name}>
                    {name}
                </Typography>
                <Typography variant="h6" sx={serviceStyles.dayAndTime}>
                    {dayAndTime}
                </Typography>
            </Box>
        </Box>
    )
}

Service.propTypes = {
    name: PropTypes.string,
    dayAndTime: PropTypes.string,
}

export default Service
