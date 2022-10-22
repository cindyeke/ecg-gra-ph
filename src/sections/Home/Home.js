import { Box } from '@mui/material'
import Button from 'components/Button'
import homeStyles from './Home.styles'
import useHome from './hooks/useHome'

const Home = () => {
    const { handleGoToSection } = useHome()

    return (
        <section id="home" style={homeStyles.root}>
            <Box sx={homeStyles.linksWrapper}>
                <Button
                    label="about us"
                    labelStyles={homeStyles.buttonLabel}
                    buttonStyles={homeStyles.button}
                    onButtonClick={() => handleGoToSection('about')}
                />
                <Button
                    label="service times"
                    labelStyles={homeStyles.buttonLabel}
                    buttonStyles={homeStyles.button}
                    onButtonClick={handleGoToSection}
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

export default Home
