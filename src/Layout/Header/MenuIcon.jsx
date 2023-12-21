import gsap from 'gsap'

const MenuIcon = () => {
    
    
    const toogleMenuIcon = (e) => {
        const menuIcon = e.currentTarget

        menuIcon.classList.toggle("active")
 

    }

    return (
        <div onClick={toogleMenuIcon} className='clickable h-full z-[10001] menu-icon cursor-pointer aspect-square'>

            <div className='relative w-full h-full flex justify-center items-center'>
                <span className='morphing-shape w-full h-full absolute top-0 left-0 border-2 border-solid border-main-black'></span>
                <span className='morphing-shape w-full h-full absolute top-0 left-0 border-2 border-solid border-main-black'></span>


                <span className='absolute rotating-dash translate-y-[-400%] h-[2px] bg-main-black w-1/2 '></span>
                <span className='absolute rotating-dash  h-[2px] bg-main-black w-1/2 '></span>
            </div>

    
        </div>
    )
}

export default MenuIcon