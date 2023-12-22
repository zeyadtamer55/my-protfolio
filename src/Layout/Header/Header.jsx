import React from 'react'
import Logo from './Logo'
import MenuIcon from './MenuIcon'

import "../../Styles/Header.css"

const Header = () => {
    return (
        <>
            
            <div className='w-full z-[600] z p-2 fixed top-0 h-[100px]'>
                <div className="container h-full justify-between flex items-center">
                    <Logo/> 

                    <MenuIcon/>
                </div>
            </div>
        </>
    )
}

export default Header