import Section from 'components/Section'
import { SECTION, SECTION_TITLE, SERVICES } from 'utils/constants'
import Service from './components/Service/Service'

const Services = () => {
    return (
        <Section title={SECTION_TITLE.service} name={SECTION.service}>
            {SERVICES.map((service) => (
                <Service
                    key={service.id}
                    name={service.name}
                    dayAndTime={service.dayAndTime}
                />
            ))}
        </Section>
    )
}

export default Services
