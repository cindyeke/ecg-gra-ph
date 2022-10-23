import { createContext, useState } from 'react'

export const NavContext = createContext()

const NavProvider = ({ children }) => {
    const [sectionId, setSectionId] = useState('')
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
