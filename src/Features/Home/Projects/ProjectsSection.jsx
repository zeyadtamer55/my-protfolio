import React from 'react'
import AnimatedOnScrollText from '../../../UI/AnimatedOnScrollText'

const ProjectsSection = () => {

    const projects = ["project-1","project-2"]

    return (
        <>
            <div className='w-full bg-main-wheat'>
                <AnimatedOnScrollText text={"i usually expand "} overlayColor={"bg-main-wheat"} textColor={"text-main-black"} />
                <AnimatedOnScrollText text={"my knowledge"} overlayColor={"bg-main-wheat"} textColor={"text-main-black"} />

            </div>

            <div className='w-full xmd:bg-main-wheat'>
                <div className='  text-main-black container projects-section'>
                    {
                        projects.map((project,idx) => {

                            

                            return (
                                <div key={idx} className=' w-full flex-col flex md:flex-row'>
                                    <h1>this is a project</h1>
                                    <div className=''>

                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </>
        
        
    )
}
 
export default ProjectsSection