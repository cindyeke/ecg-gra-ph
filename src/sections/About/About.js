import useNav from 'src/hooks/useNav'

const About = () => {
    const aboutRef = useNav('about')

    return (
        <section
            id="about"
            ref={aboutRef}
            style={{
                height: '100%',
            }}
        >
        </section>
    )
}

export default About
