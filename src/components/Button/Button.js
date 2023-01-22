import { ButtonBase, Typography } from '@mui/material'
import PropTypes from 'prop-types'
import baseButtonStyles from './Button.styles'

const Button = ({ label, labelStyles, buttonStyles, onButtonClick }) => {
    return (
        <ButtonBase
            sx={{ ...baseButtonStyles.root, ...buttonStyles }}
            onClick={onButtonClick}
        >
            <Typography variant="h4" sx={labelStyles}>
                {label}
            </Typography>
        </ButtonBase>
    )
}

Button.propTypes = {
    label: PropTypes.string,
    labelStyles: PropTypes.object,
    buttonStyles: PropTypes.object,
    onButtonClick: PropTypes.func,
}

export default Button
