import React from 'react'
import Project from './Project'
import { useGlobalContextFunc } from "../../../Contexts/GlobalContext"

const ProjectsHolder = () => {

    let { 
        projects: {isLoading, isError ,data}
     } = useGlobalContextFunc() 

    data = data && data.filter(proj => proj.name != "my-protfolio" && proj.name != "students-crud-sys")

    
    return (
        <div className='w-full pt-14 xmd:bg-main-wheat'>
            <div className='container'>
                <h3 className='text-main-black my-10 font-algeros text-7xl'>my work</h3>

                <div className=' text-main-black'>
                    {
                        !isLoading && !isError && data &&
                        data.map((project,idx) => {

                            return (
                                <Project key={idx} project={project}/>
                            )
                        })
                    }
                </div>
            </div>
           
        </div>
        
    )
}

export default ProjectsHolder