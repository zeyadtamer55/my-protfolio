import React from 'react'
import AnimatedOnScrollText from '../../../UI/AnimatedOnScrollText'
import ProjectsHolder from './ProjectsHolder'

const ProjectsSection = () => {


    return (
        <>
            <div className='w-full projects-section xmd:bg-main-wheat'>
                <AnimatedOnScrollText
                    text={"i usually expand "}
                    overlayColor={"bg-main-wheat"}
                    textColor={"text-main-black"} 
                    revealedText={"i dont study my"}
                    revealedTextColor={"text-main-wheat"}
                    revealedTextBg={"bg-main-black"}
                />
                <AnimatedOnScrollText 
                    text={"my knowledge"} 
                    overlayColor={"bg-main-wheat"} 
                    textColor={"text-main-black"} 
                    revealedText={"school subjects"}
                    revealedTextColor={"text-main-wheat"}
                    revealedTextBg={"bg-main-black"}
                />

            </div>

        <ProjectsHolder/>

        </>
        
        
    )
}
 
export default ProjectsSection