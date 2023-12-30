import React, { useEffect } from 'react'
import { Skills } from "../../../Data/Skills"
import gsap from 'gsap'
import "../../../Styles/Skills.css"

const SkillsSection = () => {
    
    useEffect(()=>{
        const skills = gsap.utils.toArray(".skill")

        const skillDistanceX = (skills.length - 2) * -100

   
        if (window.innerWidth >= 900) {
            gsap.fromTo(skills,{
                xPercent:60
            },{
                xPercent: skillDistanceX,
    
                scrollTrigger : {
                    scrub:1.25,
                    trigger:".home .skills-section",
                    pin:true,
                    end:"+=2500"
    
                }
            })
        }else {
            skills.forEach(skill => {
                gsap.fromTo(skill , {
                    opacity:0,
                    xPercent:-100
                },{
                    opacity:1,
                    xPercent:0,
                    scrollTrigger:{
                        trigger:skill,
                        scrub:2,
                        start:"bottom bottom",
                        end:"top 70%",
                    }
                })
            })
        }
    },[])
    
    return (
        
        <div className='skills-section xmd:overflow-hidden h-screen w-full'>

            <div className='container  flex flex-col justify-evenly w-full h-full'>

                <h3 className='font-algeros text-7xl text-main-wheat'>Skills</h3>

                <div className='flex flex-col xmd:flex-row gap-3 px-5 w-full xmd:w-max'>
                    {
                        Skills.map((skill,idx) => (
                            <div key={idx} className=' xmd:h-[225px] h-[50px] w-full relative skill p-3 xmd:p-1 flex items-center gap-2 justify-center border-main-wheat border border-solid xmd:aspect-square'>
                                <span className='absolute top-2 hidden xmd:block font-algeros left-2 text-main-wheat text-2xl'>0{idx + 1}</span>
                                <img className='  aspect-square h-full xmd:h-1/2 object-contain' src={skill.href} alt="skill-img" />
                                <span className='xs:text-3xl font-[200] text-lg relative text-main-wheat xmd:absolute xmd:opacity-0 xmd:right-1/2 xmd:bottom-1/2 xmd:w-full text-center xmd:translate-y-1/2 xmd:translate-x-1/2'>{skill.name}</span>
                            </div>
                        ))
                    }
                </div>
            
            </div>
    
        </div>
    )
}

export default SkillsSection