import { Typography, Box } from '@mui/material'
import PropTypes from 'prop-types'
import titleStyles from './Title.styles'

const Title = ({ label }) => {
    return (
        <Box sx={titleStyles.root}>
            <Typography variant="h3" sx={titleStyles.title}>
                {label}
            </Typography>
            <Box sx={titleStyles.underline}></Box>
        </Box>
    )
}

Title.propTypes = {
    label: PropTypes.string,
}

export default Title
