import React, { createContext, useContext, useState } from 'react'
import useFetch from '../hooks/useFetch'


const Context = createContext()

export const useGlobalContextFunc = () => useContext(Context) 

const GlobalContext = ( { children } ) => {
    
    const { isLoading , isError, data } = useFetch('https://fakestoreapi.com/products')

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