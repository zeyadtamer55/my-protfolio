import React from 'react'
import Logo from './Logo'
import MenuIcon from './MenuIcon'

import "../../Styles/Header.css"

const Header = () => {
    return (
        <>
            
            <div className='w-full z-[600] overflow-hidden fixed top-0 h-[100px]'>
                
                <div className='w-full h-full relative p-2'>
                    <div className='overlay w-full h-full left-0 top-0 absolute backdrop-blur-sm z-[-1]'></div>


                    <div className="container h-full justify-between flex items-center">
                        <Logo/> 

                        <MenuIcon/>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Header