const handleGoToSection = (section) => {
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' })
}

export { handleGoToSection }
