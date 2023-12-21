import { useEffect, useRef } from "react"
import gsap from "gsap"
import { closeMenu, openMenu } from "./anime"

const Menu = () => {
    
    const menuSvgPath = useRef()

    useEffect(()=>{
        
        gsap.set(".menu",{visibility:"hidden"})

        const menuIcon = document.querySelector(".menu-icon")
        menuIcon.onclick = function () {
            const isAnimationRunning = false

            const isMenuActive = menuIcon.classList.contains("active")
            if (!isMenuActive && !isAnimationRunning) {
                openMenu(menuSvgPath.current,isAnimationRunning)
            }else {
                closeMenu(menuSvgPath.current,isAnimationRunning)
            }
        }
        

    },[])

  
    


    return (
        <>
    
            
            <div className='w-full z-[100] menu fixed top-0 pt-[100px] left-0 overflow-hidden h-screen'>


                <div className="absolute z-0 left-0 top-0 h-screen w-full ">
                    <svg viewBox="0 0 1000 1000">
                        <path ref={menuSvgPath}  d="M0 2S175 1 500 1s500 1 500 1V0H0Z"></path>
                    </svg>
                </div>
            

                <div className="w-full relative h-full">



                </div>

            </div>

        </>
    )
}

export default Menu