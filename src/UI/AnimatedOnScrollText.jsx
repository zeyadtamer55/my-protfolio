import gsap from 'gsap'
import React from 'react'
import { useEffect } from 'react'
import splitType from 'split-type'


function AnimatedOnScrollText({text ,textColor}) {
   
    useEffect(()=>{
        let splitedText 
        const splitText = () => {
            splitedText = new splitType("#splitTypeText",{types:"lines, words"})
            
            document.querySelectorAll(".line").forEach(line => {
                line.style.position = "relative"
                line.style.overflow = "hidden"
                line.innerHTML += "<span class='absolute top-0 left-0 w-full h-full bg-main-black opacity-70'></span>"
            })
        }

        window.onresize = () => {
            splitedText.revert()
            splitText()
        }
        splitText()

    
        document.querySelectorAll(".line").forEach(line => {
            gsap.to(line.querySelector("span"),{
                xPercent:100,
                scrollTrigger:{
                    trigger:line,
                    start:"top center",
                    end:"bottom center",
                    scrub:4
                }
            })
        })

    })

    return (
        <div className='container'>
            
            <div id='splitTypeText' className={` ${textColor} my-32 text-9xl`}>
                {text}
            </div>
        </div>
    )
}

export default AnimatedOnScrollText