import gsap from 'gsap'
import React from 'react'
import { useEffect } from 'react'


function AnimatedOnScrollText({text ,overlayColor,textColor}) {
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
    <div className='w-full overflow-hidden'>
    
        <div className='container'>
            
            <div id='splitedText' className={` ${textColor} whitespace-nowrap relative uppercase  text-8xl`}>
                {text}
                <span className={`absolute line top-0 left-0 w-full h-full ${overlayColor} opacity-70`}></span>
            
            </div>
        
        </div>
    
    </div>
    )
}

export default AnimatedOnScrollText