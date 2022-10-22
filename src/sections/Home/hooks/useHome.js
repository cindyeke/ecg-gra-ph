const useHome = () => {
    const handleGoToSection = (section) => {
        document.getElementById(section).scrollIntoView({ behavior: 'smooth' })
    }

    return { handleGoToSection }
}

export default useHome
