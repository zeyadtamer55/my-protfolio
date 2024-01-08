import gsap from 'gsap'
import React from 'react'
import { useEffect } from 'react'


function AnimatedOnScrollText({text ,revealedTextColor ,revealedTextBg , revealedText ,overlayColor,textColor}) {
    useEffect(()=>{
     
        const animateLines = () => {
            gsap.utils.toArray(".line").forEach(line => {
                gsap.to(line,{
                    xPercent:100,
                    scrollTrigger:{
                        trigger:line,
                        start:"bottom bottom",
                        end:"bottom center",
                        scrub:3
                    }
                })
            })
        }
        animateLines()

    })

    return (
    <div className='w-full md:text-8xl sm:text-5xl text-[2rem] md:text-left text-center overflow-hidden'>
    
        <div className='relative splited-text'>
            
            <div className={` ${textColor}  px-5 whitespace-nowrap relative uppercase `}>
                {text}
                <span className={`absolute line top-0 left-0 w-full h-full ${overlayColor} opacity-70`}></span>
                
            </div>
        
            <div className={`w-full uppercase h-full  px-5 top-0 left-0 overflow-hidden revealed-text absolute z-10 ${revealedTextColor} ${revealedTextBg}`}>
                {revealedText}
            </div>
        </div>
    
    </div>
    )
}

export default AnimatedOnScrollText