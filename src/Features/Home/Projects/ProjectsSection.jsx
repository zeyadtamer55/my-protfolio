import React from 'react'

const ProjectsSection = () => {

    const projects = ["project-1","project-2"]

    return (
        <div className='w-full xmd:bg-main-wheat'>
            <div className='  text-main-black container projects-section'>
                {
                    projects.map((project,idx) => {

                        

                        return (
                            <div key={idx} className='h-screen w-full flex md:flex-row'>
                                <h1>this is a project</h1>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        
    )
}
 
export default ProjectsSection