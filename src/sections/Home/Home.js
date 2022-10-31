import PropTypes from 'prop-types'
import { Box } from '@mui/material'
import Button from 'components/Button'
import homeStyles from './Home.styles'
import useHome from './hooks/useHome'
import useNav from 'src/hooks/useNav'
import { SECTION } from 'utils/constants'

const Home = () => {
    const { handleGoToSection } = useHome()

    const homeRef = useNav(SECTION.home)

    return (
        <section id={SECTION.home} ref={homeRef} style={homeStyles.root}>
            <Box sx={homeStyles.linksWrapper}>
                <Button
                    label="about us"
                    labelStyles={homeStyles.buttonLabel}
                    buttonStyles={homeStyles.button}
                    onButtonClick={() => handleGoToSection(SECTION.about)}
                />
                <Button
                    label="service times"
                    labelStyles={homeStyles.buttonLabel}
                    buttonStyles={homeStyles.button}
                    onButtonClick={() => handleGoToSection(SECTION.service)}
                />
                <Button
                    label="meet our pastors"
                    labelStyles={homeStyles.buttonLabel}
                    buttonStyles={homeStyles.button}
                    onButtonClick={handleGoToSection}
                />
                <Button
                    label="contact us"
                    labelStyles={homeStyles.buttonLabel}
                    buttonStyles={homeStyles.button}
                    onButtonClick={handleGoToSection}
                />
            </Box>
        </section>
    )
}

Home.propTypes = {
    setSection: PropTypes.func,
}

export default Home
