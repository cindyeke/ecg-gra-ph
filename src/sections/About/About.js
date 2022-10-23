import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import Section from 'components/Section'
import { SECTION, SECTION_TITLE } from 'utils/constants'
import prophetImg from 'public/images/prophet.jpg'
import aboutStyles from './About.styles'

const About = () => {
    return (
        <Section title={SECTION_TITLE.about} name={SECTION.about}>
            <Box sx={aboutStyles.imgWrapper}>
                <Image
                    src={prophetImg}
                    layout="fill"
                    objectFit="cover"
                    alt="Brand logo"
                />
            </Box>
            <Box sx={aboutStyles.content}>
                <Typography>
                    <span style={aboutStyles.highlight}>
                        ECG Port Harcourt City
                    </span>
                    is a branch of Enlighten Christian Gathering Church
                    headquartered in Malawi.
                </Typography>
                <Typography sx={{ marginTop: '1rem' }}>
                    A platform for spiritual fellowship through the ministry and
                    grace upon Prophet Shepherd Bushiri, the president and
                    founder of the ministry. We believe in the words of Prophet
                    Major 1 that God is still speaking today.
                </Typography>
            </Box>
        </Section>
    )
}

export default About
