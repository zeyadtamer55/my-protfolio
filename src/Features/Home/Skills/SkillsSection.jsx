import React, { useEffect } from 'react'
import { Skills } from "../../../Data/Skills"
import gsap from 'gsap'
import "../../../Styles/Skills.css"

const SkillsSection = () => {
    
    useEffect(()=>{
        const movingSkills = gsap.utils.toArray(".moving-skill")

        const skillDistanceX = (movingSkills.length - 2) * -100

        gsap.to(movingSkills,{
            xPercent: skillDistanceX,
            scrollTrigger : {
                scrub:1.25,
                trigger:".home .skills-section",
                pin:true,
                end:"+=2500"

            }
        })
    },[])
    
    return (
        
        <div className='skills-section h-screen w-full'>

            <div className='container overflow-hidden flex flex-col justify-evenly w-full h-full'>

                <h3 className='font-algeros text-7xl  text-main-wheat'>Skills</h3>

                <div className='flex gap-3 px-5 w-max h-[225px]'>
                    {
                        Skills.map((skill,idx) => (
                            <div key={idx} className='h-full relative moving-skill p-3 flex items-center justify-center border-main-wheat border-2 border-solid aspect-square'>
                                <img className=' w-1/2 h-1/2 object-contain' src={skill.href} alt="skill-img" />
                                <span className='text-3xl text-main-wheat absolute opacity-0 right-1/2 bottom-1/2 w-full text-center translate-y-1/2 translate-x-1/2'>{skill.name}</span>
                            </div>
                        ))
                    }
                </div>
            
            </div>
    
        </div>
    )
}

export default SkillsSection