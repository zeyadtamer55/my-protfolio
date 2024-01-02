import { useEffect, useRef } from "react"
import gsap from "gsap"
import { closeMenu, openMenu } from "./anime"
import MenuItemsHolder from "./MenuItemsHolder"
import "../../Styles/Menu.css"

const Menu = () => {
    

    useEffect(()=>{
        
        gsap.set(".menu",{visibility:"hidden"})
        gsap.set(".menu .menu-items-holder",{visibility:"hidden"})

        const menuIcon = document.querySelector(".menu-icon")
        
        menuIcon.onclick = function () {
            const isMenuActive = menuIcon.classList.contains("active")
            if (!isMenuActive) {
                openMenu()
            }else {
                closeMenu()
            }
        }
        

    },[])

    
    


    return (
        <>
    
            
            <div className='w-full invisible z-[100] menu fixed top-0  left-0 overflow-hidden h-screen'>


                <div className="absolute overlay z-0 left-0 top-0 h-screen w-full ">
                    <svg width="100%" height="100%" viewBox="0 0 1000 1000" preserveAspectRatio="none">
                        <path d="M0 2S175 1 500 1s500 1 500 1V0H0Z"></path>
                    </svg>
                </div>

                <MenuItemsHolder/>

            </div>

        </>
    )
}

export default Menu