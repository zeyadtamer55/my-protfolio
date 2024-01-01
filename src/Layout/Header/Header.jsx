import React, { useEffect } from 'react'
import Logo from './Logo'
import MenuIcon from './MenuIcon'
import "../../Styles/Header.css"
import gsap from 'gsap'
import { animateHeaderOnScroll } from './anime'


const Header = () => {

    useEffect(()=>{
        const tl = gsap.timeline()
        animateHeaderOnScroll(tl)
    },[])

    return (
        <>
            
            <header className='w-full z-[500] overflow-hidden fixed top-0 h-[100px]'>
                
                <div className='w-full h-full relative p-2'>
                    <div className='overlay w-full h-full left-0 top-0 absolute backdrop-blur-sm z-[-1]'></div>


                    <div className="container h-full justify-between flex items-center">
                        <Logo/> 

                        <MenuIcon/>
                    </div>
                </div>

            </header>
        </>
    )
}

export default Header