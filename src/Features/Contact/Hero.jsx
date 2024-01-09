import React, { useEffect } from 'react'
import { openContactForm } from '../../anime/ContactForm'

const Hero = () => {
    
    useEffect(()=>{
        const getInTouchBtn = document.getElementById("get-in-touch-btn")

        getInTouchBtn.onclick = () => {
            openContactForm()
            
        }
    },[])

    return (
        
        <div className='contact-hero-section  relative overflow-hidden  bg-main-wheat w-full h-screen'>
        
            <div className='w-[80vh] morphing-shape bg-main-black border-black border-2 rounded-[50%] aspect-square absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>

            </div>

            <div className='w-[100vh]  morphing-shape  border-black border-2 rounded-[50%] aspect-square absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'>

            </div>
            
            <button onClick={(e) => e.target.classList.toggle("active")} id='get-in-touch-btn' className='absolute capitalize z-10 underline clickable mix-blend-difference -translate-x-1/2 left-1/2 text-3xl bottom-10 text-main-wheat'>
                get in touch
            </button>
            

            <div className="container relative  h-full">
                
                <div className='md:text-9xl text-6xl xs:text-8xl h-full flex justify-center items-center text-center font-algeros'>
                    <div className='mix-blend-difference text-main-wheat'>
                        
                        <div className='title'>
                            lets work
                        </div>

                        <div className='title'>
                            Together
                        </div>
                    </div>
                    
                </div>
                
            </div>

        </div>
    )
}

export default Hero