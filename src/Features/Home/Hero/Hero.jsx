import React from 'react'
import MarqueeText from '../../../UI/MarqueeText'
import ScrollBtn from "./ScrollBtn"
import Title from "./Title"

const Hero = () => {
    
    return (
        <div className='w-full home-hero-section relative h-screen pt-[100px] '>

            <div className='absolute z-0 blur-xl'>
                <div className="morphing-shape overflow-hidden w-[300px] aspect-square">
                    <div className=' bg-gradient-to-b w-full h-full from-[#f55b00] to-[#ffb100]'></div>
                </div>
            </div>

            <div className='z-1 relative w-full h-full'>
                <div className='container flex flex-col h-full w-full'>
                    
                    <Title/>

                    <div className='mt-7 text-2xl sm:text-3xl'>
                        <p className=' text-right'>
                            a frontend web developer based in egypt,
                        </p>
                        <p className=' text-left'>
                            i build maintainable and responsive web sites using my tech skills, i love elegant and simple designs , i love plants , paintings and art
                        </p>
                    </div>
                    
                    <div className='w-[300px] mt-5'>
                        <MarqueeText text={"Lets work togeather"}/>
                    </div>

                </div>

                <ScrollBtn/>
            </div>


        </div>
    )
}

export default Hero