import { handleGoToSection as handleScrollToSection } from 'utils/helpers'

const useHome = () => {
    const handleGoToSection = (section) => handleScrollToSection(section)

    return { handleGoToSection }
}

export default useHome
