import gsap from "gsap"


// svg paths
const start = "M0 2S175 1 500 1s500 1 500 1V0H0Z"
const middle = "M0 502S175 272 500 272s500 230 500 230V0H0Z"
const end = "M0,1005S175,995,500,995s500,5,500,5V0H0Z"



export const openMenu = (menuSvgPath) => {

    
    const tl = gsap.timeline()
    
    tl.to(".menu",{
        visibility:"visible",
    })

    tl.fromTo(menuSvgPath, {
        y:-100,
    },{y:0})
    
    tl.to(menuSvgPath,{
        attr: {
            d:start
        },
        duration:1,
        ease:"power2.inOut"
    },"-1")
    tl.to(menuSvgPath,{
        attr: {
            d:middle
        },
        duration:1,
        ease:"power2.inOut"
    })
 
    tl.to(".menu-icon .morphing-shape", {
        borderColor:"var(--main-wheat)"
    },"<")
   
    tl.to(".menu-icon .rotating-dash", {
        background:"var(--main-wheat)"
    },"<")

    tl.to(menuSvgPath,{
        attr: {
            d:end
        },
        duration:1,
        ease:"power2.inOut",

    })


}



export const closeMenu = (menuSvgPath) => {

    const tl = gsap.timeline()

    tl.to(menuSvgPath,{
        attr: {
            d:end
        },
        duration:1,
        ease:"power2.inOut",

    })


    tl.to(menuSvgPath,{
        attr: {
            d:middle
        },
        duration:1,
        ease:"power2.inOut"
    })


    
    tl.to(menuSvgPath,{
        attr: {
            d:start
        },
        duration:1,
        ease:"power2.inOut"
    })

    
    tl.to(".menu-icon .morphing-shape", {
        borderColor:"var(--black)"
    },"<")
   
    tl.to(".menu-icon .rotating-dash", {
        background:"var(--black)"
    },"<")

    tl.to(menuSvgPath,{
        y:-100,
    })

    tl.to(".menu",{
        visibility:"hidden",
    })
}










