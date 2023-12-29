import gsap from 'gsap'
import React, { useEffect } from 'react'

const RevealBgSection = () => {
    

    useEffect(()=>{
        if (window.innerWidth > 900)
        gsap.to(".home .reveal-bg-section h3",{
            scale:380,
            xPercent:260,
            ease:"none",
            duration:1000000000,
            scrollTrigger:{
                trigger: ".home .reveal-bg-section",
                scrub:true,
                end:"+=10000",
                pin:true,
            }
        })
    },[])

    return (
        <div className='reveal-bg-section overflow-hidden flex justify-center items-center h-screen w-full'>
            <h3 className=' font-algeros text-4xl text-center text-main-wheat'>
                i cook powerfull and retro websites
            </h3>
        </div>
    )
}

export default RevealBgSection