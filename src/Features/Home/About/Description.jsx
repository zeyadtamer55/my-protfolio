import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useEffect } from 'react'

gsap.registerPlugin(ScrollTrigger)


const Description = () => {
    
    const desc = "i am 16 years old a front end developer based in egypt, i build maintainable , functional and responsive web applications using my frontend skills , i am proficient in latest web technologies , frameworks and libiraries , i usually expand my skills to stay the forefront in the industry"

    useEffect(()=> {
        const tl = gsap.timeline()

        tl.from(".home .about-section .moving-to-up-char",{
            yPercent:100,
            duration:50,       
            stagger:.3,

            scrollTrigger : {
                trigger:".home .about-section",
                start:"top center",
                scrub:1,
                end:"top top",
            }     
        })
    },[])

    return (
        <div className='mt-10 text-3xl'>
            {
                desc.split(" ").map((word,index)=> (
                    <div key={index} className='inline-block overflow-hidden h-9 mx-1'>
                        {
                            word.split("").map((char,idx) => (
                                <span key={idx} className='moving-to-up-char inline-block'>
                                    {char}
                                </span>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default Description