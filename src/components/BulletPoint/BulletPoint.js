import { Box, Typography } from '@mui/material'
import PropTypes from 'prop-types'
import bulletPointStyles from './BulletPoint.styles'

const BulletPoint = ({ name, description, children, style }) => {
    return (
        <Box sx={{ ...bulletPointStyles.root, ...style }}>
            <Box>
                <Box sx={bulletPointStyles.bulletPoint} />
            </Box>

            <Box>
                <Typography variant="h6" sx={bulletPointStyles.name}>
                    {name}
                </Typography>
                {description ? (
                    <Typography variant="h6" sx={bulletPointStyles.description}>
                        {description}
                    </Typography>
                ) : (
                    <>{children}</>
                )}
            </Box>
        </Box>
    )
}

BulletPoint.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    children: PropTypes.node,
}

export default BulletPoint
