import React, { useEffect, useRef } from 'react'
import { animateMainBg } from './anime'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { animateHeaderOnScroll } from '../../../Layout/Header/anime'
gsap.registerPlugin(ScrollTrigger)

const MainBg = () => {
    
    const mainBg = useRef()

    useEffect(()=>{
        const tl  = gsap.timeline()

        
        animateMainBg(tl,mainBg.current)
        animateHeaderOnScroll(tl)

        return () => {
            tl.revert()
        }
    },[])

    return (
        <div ref={mainBg} className='w-full fixed top-0 left-0 z-[-1] bg-main-wheat h-screen'></div>
    )
}

export default MainBg