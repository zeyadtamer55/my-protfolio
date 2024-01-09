import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
    
  

    return (
        <Link className='logo' to="/">
            <h1 className='text-main-black font-algeros text-4xl '>
                
                zeyad
                tamer

            </h1>
        </Link>
    )
}

export default Logo