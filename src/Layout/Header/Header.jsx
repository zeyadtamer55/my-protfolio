import React from 'react'
import Logo from './Logo'
import MenuIcon from './MenuIcon'

import "../../Styles/Header.css"

const Header = () => {
    return (
        <>
            <div className='w-full z-[500] z p-2 fixed top-0 h-[100px]'>
                <div className="container h-full justify-start flex items-center">
                    
                    <Logo/> 

                </div>
            </div>
            
            <div className='w-full z-[600] z p-2 fixed top-0 h-[100px]'>
                <div className="container h-full justify-end flex items-center">
                    
                    <MenuIcon/>
                </div>
            </div>
        </>
    )
}

export default Header