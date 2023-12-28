


export const animateHeaderOnScroll = (tl) => {
    tl.fromTo("div.menu-icon div span.rotating-dash",{
        background:"#141414",

    }, {
        background:"var(--main-wheat)",
        duration:1,
        scrollTrigger: {
            trigger:".home .about-section",
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
            trigger:".home .about-section",
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
            trigger:".home .about-section",
            scrub:true,
            start:"top center",
            end:"top top"
        },
    },"<")



    tl.to("header .logo",{
        color:"red",
        duration:1,
        scrollTrigger:{
            trigger: ".home .projects-section ",
            scrub:true,
        }
    })
    
    tl.to("div.menu-icon div span.rotating-dash",{
        backgroundColor:"#141414",
        duration:1,
        scrollTrigger:{
            trigger: ".home .projects-section ",
            scrub:true,
        }
    },"<")
    
    tl.to("div.menu-icon div span.morphing-shape",{
        borderColor:"#141414",
        duration:1,
        scrollTrigger:{
            trigger: ".home .projects-section ",
            scrub:true,
        }
    },"<")
}

