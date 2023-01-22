import { Box, Typography } from '@mui/material'
import { Carousel } from 'react-responsive-carousel'
import Image from 'next/image'
import Section from 'components/Section'
import { SECTION, SECTION_TITLE } from 'utils/constants'
import prophetImg from 'public/images/prophet.jpg'
import pastorImg from 'public/images/pastor2.jpg'
import aboutStyles from './About.styles'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const About = () => {
    const images = [prophetImg, pastorImg]
    return (
        <Section title={SECTION_TITLE.about} name={SECTION.about}>
            <Carousel
                ariaLabel="carousel"
                infiniteLoop={true}
                autoPlay={true}
                swipeable={true}
                showThumbs={false}
                showArrows={false}
                showStatus={false}
                interval={7000}
            >
                {images.length !== 0 &&
                    images.map((img, idx) => (
                        <Box sx={aboutStyles.imgWrapper} key={idx}>
                            <Image
                                src={img}
                                alt={`preview ${idx}`}
                                layout="responsive"
                                priority={idx === 0}
                            ></Image>
                        </Box>
                    ))}
            </Carousel>
            <Box sx={aboutStyles.content}>
                <Typography>
                    <span style={aboutStyles.highlight}>
                        ECG Port Harcourt City
                    </span>{' '}
                    is a branch of Enlighten Christian Gathering The Jesus
                    Nation Church, headquartered in Malawi.
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
