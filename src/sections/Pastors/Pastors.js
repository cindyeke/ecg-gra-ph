import { Grid } from '@mui/material'
import Section from 'components/Section'
import PastorImage from './components/PastorImage'
import { PASTORS, SECTION, SECTION_TITLE } from 'utils/constants'
import pastorStyles from './Pastors.styles'

const Pastors = () => {
    return (
        <Section title={SECTION_TITLE.pastors} name={SECTION.pastors}>
            <Grid container sx={pastorStyles.root} spacing={2}>
                {PASTORS.map((pastor) => (
                    <PastorImage
                        key={pastor.id}
                        name={pastor.name}
                        imgSrc={pastor.imgSrc}
                        alt="Pastor 1"
                    />
                ))}
            </Grid>
        </Section>
    )
}

export default Pastors
