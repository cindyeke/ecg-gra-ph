import PropTypes from 'prop-types'
import { Box } from '@mui/material'
import Title from 'components/Title'
import useNav from 'src/hooks/useNav'
import sectionStyles from './Section.styles'

const Section = ({ children, title, name, padding }) => {
    const sectionRef = useNav(name)
    return (
        <section id={name} ref={sectionRef} style={sectionStyles.root}>
            <Title label={title} />
            <Box
                sx={{
                    ...sectionStyles.content,
                    ...(padding && sectionStyles.addPadding),
                }}
            >
                {children}
            </Box>
        </section>
    )
}

Section.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
    name: PropTypes.string,
    padding: PropTypes.bool,
}

export default Section
