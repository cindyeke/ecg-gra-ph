import { useContext } from 'react'
import { NavContext } from 'src/provider/NavProvider'
import { handleGoToSection as handleScrollToSection } from 'utils/helpers'

const useLayout = () => {
    const { sectionId } = useContext(NavContext)

    const handleGoToSection = (section) => handleScrollToSection(section)

    return { sectionId, handleGoToSection }
}

export default useLayout
