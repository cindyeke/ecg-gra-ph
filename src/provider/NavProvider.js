import { createContext, useState } from 'react'
import { SECTION } from 'utils/constants'

export const NavContext = createContext()

const NavProvider = ({ children }) => {
    const [sectionId, setSectionId] = useState(SECTION.home)
    const providerValue = {
        sectionId,
        setSectionId,
    }

    return (
        <NavContext.Provider value={providerValue}>
            {children}
        </NavContext.Provider>
    )
}

export default NavProvider
