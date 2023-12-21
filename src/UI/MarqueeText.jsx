import React from 'react'

const MarqueeText = ({text}) => {
    return (
        <div className='w-full relative border-main-black border-2 border-solid rounded-full overflow-hidden h-fit'>
            
            <div className='translate-anim p-2 w-max text-3xl font-algeros font-bold'>
                {
                    Array(text.length).fill(text).map((txt,idx) => (
                        <span className='mx-5 capitalize' key={idx}>{txt}</span>
                    ))
                }
            </div>
        </div>
    )
}

export default MarqueeText