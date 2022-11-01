import { Box, Link, Typography } from '@mui/material'
import BulletPoint from 'components/BulletPoint'
import Section from 'components/Section'
import { FACEBOOK_GROUP_LINK, SECTION, SECTION_TITLE } from 'utils/constants'
import contactStyles from './Contact.styles'

const Contact = () => {
    return (
        <Section title={SECTION_TITLE.contact} name={SECTION.contact}>
            <Box sx={contactStyles.root}>
                <Typography variant="h6" sx={contactStyles.text1}>
                    We’re available anytime and we’ll happily answer your
                    questions on the various services, anointing materials and
                    others.
                </Typography>

                <Typography variant="h6" sx={contactStyles.text2}>
                    Join our facebook group
                </Typography>
                <Link
                    variant="h6"
                    href={FACEBOOK_GROUP_LINK}
                    sx={contactStyles.externalLink}
                >
                    {FACEBOOK_GROUP_LINK}
                </Link>
            </Box>
            <Box>
                <BulletPoint
                    name="General Enquiries"
                    description="0708 111 1122"
                />
                <BulletPoint
                    name="Anointing Materials"
                    style={contactStyles.bulletPoint}
                >
                    <Typography variant="h6" sx={contactStyles.bulletPointDesc}>
                        0708 111 1122
                    </Typography>
                    <Typography variant="h6" sx={contactStyles.bulletPointDesc}>
                        0803 382 0023
                    </Typography>
                </BulletPoint>
            </Box>
        </Section>
    )
}
export default Contact
