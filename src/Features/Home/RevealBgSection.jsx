import gsap from 'gsap'
import React, { useEffect } from 'react'

const RevealBgSection = () => {
    

    useEffect(()=>{
        if (window.innerWidth > 900)
        gsap.to(".home .reaveal-bg-section h3",{
            scale:360,
            xPercent:300,
            ease:"none",
            scrollTrigger:{
                trigger: ".home .reaveal-bg-section",
                scrub:true,
                end:"+=10000",
                pin:true,
            }
        })
    },[])

    return (
        <div className='reaveal-bg-section overflow-hidden flex justify-center items-center h-screen w-full'>
            <h3 className=' font-algeros text-4xl text-main-wheat'>
                i cook powerfull retro websites
            </h3>
        </div>
    )
}

export default RevealBgSection