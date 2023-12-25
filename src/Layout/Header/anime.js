


export const animateHeaderOnScroll = (tl,aboutSection) => {
    tl.fromTo("div.menu-icon div span.rotating-dash",{
        background:"#141414",

    }, {
        background:"var(--main-wheat)",
        duration:1,
        scrollTrigger: {
            trigger:aboutSection,
            scrub:true,
            start:"top center",
            end:"top top"
        },
    },"<")
    
    tl.fromTo("div.menu-icon div span.morphing-shape",{
        borderColor:"#141414",

    }, {
        borderColor:"var(--main-wheat)",
        duration:1,
        scrollTrigger: {
            trigger:aboutSection,
            scrub:true,
            start:"top center",
            end:"top top"
        },
    },"<")
    
    tl.fromTo("header .logo",{
        color:"#141414",
    }, {
        color:"var(--main-wheat)",
        duration:1,
        scrollTrigger: {
            trigger:aboutSection,
            scrub:true,
            start:"top center",
            end:"top top"
        },
    },"<")
}

