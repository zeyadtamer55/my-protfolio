import React from 'react'
import Pages from '../../Data/Pages'
import { NavLink } from 'react-router-dom'
import { closeMenu } from './anime'



const MenuItemsHolder = () => {
    
    const orders = ["I","II","III","IV"]
    
    const closeMenuFunction = () => {
        const menuIcon = document.querySelector(".menu-icon")
        menuIcon.classList.toggle("active")
        closeMenu()
    }

    return (
        
        <div className="w-full menu-items-holder container !pt-[100px] z-10 relative h-full">

            <ul className='flex w-full h-full flex-col text-white'>
                {
                    Pages.map((page,idx) => (
                        <li className='uppercase flex items-center overflow-hidden flex-1 font-algeros text-7xl' key={idx}>
                            <NavLink className="menu-anchor" onClick={closeMenuFunction} to={page.href}>
                                <span className=' text-[.5em]'>{orders[idx]}.</span>{page.name}
                            </NavLink>
                        </li>
                    ))
                }
            </ul>

        </div>
    )
}

export default MenuItemsHolder