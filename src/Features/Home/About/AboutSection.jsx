import gsap from 'gsap'
import Description from './Description'
import { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

const AboutSection = () => {

    const title = "hi world, my name is zeyad tamer"

    useEffect(()=> {
        const animatedChars = gsap.utils.toArray(".home .about-section .moving-to-up-word")
        
        animatedChars.forEach(char => {
            gsap.from(char,{
                yPercent:200,
                ease:"back",
                scrollTrigger:{
                    trigger:char,
                    scrub:3,
                    end:"top center"   
                },
                
            })
        })
    
    },[])

    return (
        <div className='container !pt-[100px] min-h-screen about-section'>
            <h2 className=' font-algeros text-7xl w-fit mt-3 text-main-wheat'>about me</h2>
            
            <div className='text-3xl overflow-hidden mt-4'>
                <span className='inline-block moving-to-up-word'>
                    {
                        title
                    }
                </span>

            </div>
            
            <Description/>

            <a download className='btn-gold uppercase text-4xl p-5 mt-10'>
                download cv
            </a>
        </div>
    )
}

export default AboutSection