import React, { useEffect } from 'react'
import { Skills } from "../../../Data/Skills"
import gsap from 'gsap'
import "../../../Styles/Skills.css"

const SkillsSection = () => {
    
    useEffect(()=>{
        const skills = gsap.utils.toArray(".skill")

        const skillDistanceX = (skills.length - 2) * -100

   
        if (window.innerWidth >= 1024) {
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
        
        <div className='skills-section h-screen w-full'>

            <div className='container lg:overflow-hidden flex flex-col justify-evenly w-full h-full'>

                <h3 className='font-algeros text-7xl text-main-wheat'>Skills</h3>

                <div className='flex flex-col lg:flex-row gap-3 px-5 w-full lg:w-max'>
                    {
                        Skills.map((skill,idx) => (
                            <div key={idx} className=' lg:h-[225px] h-[50px] w-full relative skill p-3 lg:p-1 flex items-center gap-2 justify-center border-main-wheat border border-solid lg:aspect-square'>
                                <span className='absolute top-2 hidden lg:block font-algeros left-2 text-main-wheat text-2xl'>0{idx + 1}</span>
                                <img className='  aspect-square h-full lg:h-1/2 object-contain' src={skill.href} alt="skill-img" />
                                <span className='xs:text-3xl font-[200] text-lg relative text-main-wheat lg:absolute lg:opacity-0 lg:right-1/2 lg:bottom-1/2 lg:w-full text-center lg:translate-y-1/2 lg:translate-x-1/2'>{skill.name}</span>
                            </div>
                        ))
                    }
                </div>
            
            </div>
    
        </div>
    )
}

export default SkillsSection