import { useContext, useEffect, useRef } from 'react'
import { NavContext } from 'src/provider/NavProvider'
import useOnScreen from './useOnScreen'

const useNav = (sectionId) => {
    const ref = useRef(null)
    const { setSectionId } = useContext(NavContext)

    const isOnScreen = useOnScreen(ref)

    useEffect(() => {
        if (isOnScreen) {
            setSectionId(sectionId)
        }
    }, [isOnScreen, setSectionId, sectionId])

    return ref
}

export default useNav
