import PropTypes from 'prop-types'
import { Box } from '@mui/material'
import Button from 'components/Button'
import homeStyles from './Home.styles'
import useHome from './hooks/useHome'
import useNav from 'src/hooks/useNav'
import { BUTTON_LINKS, SECTION } from 'utils/constants'

const Home = () => {
    const { handleGoToSection } = useHome()

    const homeRef = useNav(SECTION.home)

    return (
        <section id={SECTION.home} ref={homeRef} style={homeStyles.root}>
            <Box sx={homeStyles.linksWrapper}>
                {BUTTON_LINKS.map((buttonLink) => (
                    <Button
                        key={buttonLink.id}
                        label={buttonLink.label}
                        labelStyles={homeStyles.buttonLabel}
                        buttonStyles={homeStyles.button}
                        onButtonClick={() => handleGoToSection(buttonLink.link)}
                    />
                ))}
            </Box>
        </section>
    )
}

Home.propTypes = {
    setSection: PropTypes.func,
}

export default Home
