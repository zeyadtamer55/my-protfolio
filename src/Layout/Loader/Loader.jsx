import React, { useEffect } from 'react'

const Loader = () => {
    
    useEffect(()=>{

    },[])

    return (
        <div className='w-full fixed flex justify-center items-center top-0 left-0 overflow-hidden z-[600] bg-main-black h-screen'>

            <div className='w-max flex flex-col gap-5 rotate-45 h-max'>
                {
                    Array(40).fill("").map((_,index) => (
                        <div key={index} className='flex text-5xl font-algeros  uppercase gap-5'>
                            {
                                Array(15).fill("zeyad tamer").map((word,idx) => (
                                    <p className='whitespace-nowrap opacity-25 text-main-wheat' key={idx}>{word}</p>
                                ))
                            }
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Loader