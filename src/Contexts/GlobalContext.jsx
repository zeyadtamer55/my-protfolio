import React, { createContext, useContext, useState } from 'react'
import useFetch from '../hooks/useFetch'


const Context = createContext()

export const useGlobalContextFunc = () => useContext(Context) 

const GlobalContext = ( { children } ) => {
    
    let { isLoading , isError, data } = useFetch('https://api.github.com/users/zeyadtamer55/repos')

    const [showMenu,setShowMenu] = useState(false)
    
    const contextData = {
        
        projects : {
            isError,
            isLoading,
            data
        },
        menu: {
            setShowMenu,
            showMenu
        }

    }

    return (
        
        <Context.Provider value={contextData}>
            
            {children}
        
        </Context.Provider>
    )
}

export default GlobalContext