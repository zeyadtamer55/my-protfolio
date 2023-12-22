import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useEffect } from 'react'

gsap.registerPlugin(ScrollTrigger)


const Description = () => {
    
    const desc = "i am 16 years old a front end developer based in egypt, i build maintainable , functional and responsive web applications using my frontend skills , i am proficient in latest web technologies , frameworks and libiraries , i usually expand my skills to stay the forefront in the industry"

    useEffect(()=> {
        const animatedChars = gsap.utils.toArray(".home .about-section .moving-to-up-char")
        
        animatedChars.forEach(char => {
            gsap.from(char,{
                yPercent:100,
                scrollTrigger:{
                    trigger:char,
                    start:"top 100%",
                    end:"top 60%",
                    scrub:true,
                },
                stagger:0.4,
            })
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
                                    <span className=''></span>
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