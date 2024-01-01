import React from 'react'

const Project = ({project}) => {
    console.log(project);
    const name = project.name.split("-").join(" ")
    return (
        <div className=' w-full flex-col h-screen flex md:flex-row'>
            <h6>{name}</h6>
            <div className=''>

            </div>
        </div>
    )
}

export default Project