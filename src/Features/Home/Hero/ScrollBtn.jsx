import React from 'react'

const ScrollBtn = () => {
    return (
        <div className='w-[175px] scroll-btn justify-center items-center hover:bg-black md:flex hidden ease-1s hover:scale-[1.2] clickable bottom-2 right-2 border-4 border-solid border-main-black absolute aspect-square rounded-[50%]'>
            <svg className=' rotate-90' xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path fill='#000' d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/>
            </svg>
        </div>
    )
}

export default ScrollBtn