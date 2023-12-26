import gsap from "gsap"

// svg paths
const start = "M0 2S175 1 500 1s500 1 500 1V0H0Z"
const middle = "M0 502S175 272 500 272s500 230 500 230V0H0Z"
const end = "M0 2010S175 1990 500 1990s500 10 500 10V0H0Z"

const menuSvgPath = ".menu .overlay svg path"

export const openMenu = () => {

    
    const tl = gsap.timeline()
  

    tl.to(".menu",{
        visibility:"visible",
        onStart:() => document.querySelector("header").classList.add("gold")

    })

    tl.fromTo(menuSvgPath, {y:-100,},{y:0})
    
    tl.to(menuSvgPath,{
        attr: {
            d:start
        },
        duration:1,
        ease:"power2.inOut",

    },"-1")
    
    tl.to(menuSvgPath,{
        attr: {
            d:middle
        },
        duration:1,
        ease:"power2.inOut",

    })


    tl.to(menuSvgPath,{
        attr: {
            d:end
        },
        duration:1,
        ease:"power2.inOut",

    })



    showMenuItems(tl)

}



export const closeMenu = () => {

    const tl = gsap.timeline()

    hideMenuItems(tl)


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
        ease:"power2.inOut",

    })


    
    tl.to(menuSvgPath,{
        attr: {
            d:start
        },
        duration:1,
        ease:"power2.inOut",
        onStart:() => document.querySelector("header").classList.remove("gold")

    })




    tl.to(menuSvgPath,{y:-100,})

    tl.to(".menu",{
        visibility:"hidden",

    })
    
  
}










const showMenuItems = (tl) => {

    tl.to(".menu .menu-items-holder",{
        visibility:"visible"
    })

    tl.fromTo(".menu .menu-anchor", {
        yPercent:300,
    },
    {
        yPercent:0,
        duration:.5,
        ease:"power2.inOut"
    })
}


const hideMenuItems = (tl) => {

    tl.to(".menu .menu-anchor", {
        yPercent:300,
        duration:.5,
        ease:"power2.inOut"

    })

    tl.to(".menu .menu-items-holder",{
        visibility:"hidden"
    })
}