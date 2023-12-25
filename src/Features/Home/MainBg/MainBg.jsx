import React, { useEffect, useRef } from 'react'
import { animateMainBg } from './anime'
import gsap from 'gsap'
import { animateHeaderOnScroll } from '../../../Layout/Header/anime'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

const MainBg = () => {
    
    const mainBg = useRef()

    useEffect(()=>{

        const tl = gsap.timeline()
        const aboutSection = gsap.utils.toArray(".home .about-section")
        animateHeaderOnScroll(tl,aboutSection)
        
    
        animateMainBg(mainBg.current)
 
    },[])

    return (
        <div ref={mainBg} className='w-full fixed top-0 left-0 z-[-1] bg-main-wheat h-screen'></div>
    )
}

export default MainBg