import gsap from 'gsap'
import React from 'react'
import { useEffect } from 'react'
import splitType from 'split-type'

function AnimatedOnScrollText({text ,textColor}) {
   
    useEffect(()=>{
        let splitedText 
        const lines = document.querySelectorAll(".line")
        const splitText = () => {
            splitedText = new splitType("#splitTypeText",{types:"lines, words"})
        
            lines.forEach(line => {
                line.append("<div class='absolute w-full h-full z-20 line-mask top-0 left-0 bg-black opacity-5'></div>")
            })
        }

        window.onresize = () => {
            splitedText.revert()
            splitText()
        }
        splitText()



        gsap.to("#splitTypeText .line-mask",{
            xPercent:100,
            scrollTrigger:{
                trigger:"#splitTypeText",
                start:"top center",
                end:"bottom center",
                scrub:3
            }
        })

    },[])

    return (
        <div className='container'>

            <div id='splitTypeText' className={` relative ${textColor} my-32 text-9xl`}>
                {text}
            </div>
        </div>
    )
}

export default AnimatedOnScrollText