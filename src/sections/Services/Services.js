import BulletPoint from 'components/BulletPoint'
import Section from 'components/Section'
import { SECTION, SECTION_TITLE, SERVICES } from 'utils/constants'

const Services = () => {
    return (
        <Section title={SECTION_TITLE.service} name={SECTION.service}>
            {SERVICES.map((service) => (
                <BulletPoint
                    key={service.id}
                    name={service.name}
                    description={service.dayAndTime}
                />
            ))}
        </Section>
    )
}

export default Services
