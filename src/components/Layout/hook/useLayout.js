import { useContext } from 'react'
import { NavContext } from 'src/provider/NavProvider'

const useLayout = () => {
    const { sectionId } = useContext(NavContext)

    return { sectionId }
}

export default useLayout
