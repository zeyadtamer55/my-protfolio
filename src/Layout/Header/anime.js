


export const animateHeaderOnScroll = (tl) => {

    

    OnEnterRevealSection(tl)



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



}

const OnEnterRevealSection = (tl) => {
    if (window.innerWidth > 900) {
        tl.fromTo("header .logo",{
            color:"var(--main-wheat)"
        },{
            color:"#141414",
            duration:1,
            scrollTrigger:{
                trigger: ".home .reveal-bg-section ",
                scrub:true,
                start:"+=8800",
                end:"+=10",
            }
        })
        
        tl.fromTo("div.menu-icon div span.rotating-dash",{
            backgroundColor:"var(--main-wheat)"
        },{
            backgroundColor:"#141414",
            duration:1,
            scrollTrigger:{
                trigger: ".home .reveal-bg-section ",
                scrub:true,
                start:"+=8800",
                end:"+=10",
            }
        },"<")
        
        tl.fromTo("div.menu-icon div span.morphing-shape",{
            borderColor:"var(--main-wheat)"
        },{
            borderColor:"#141414",
            duration:1,
            scrollTrigger:{
                trigger: ".home .reveal-bg-section ",
                scrub:true,
                start:"+=8800",
                end:"+=10",
            }
        },"<")
    } else {
        tl.fromTo("header .logo",{
            color:"var(--main-wheat)"
        },{
            color:"#141414",
            duration:1,
            scrollTrigger:{
                trigger: ".home .projects-section ",
                scrub:true,
                start:"top center",
                end:"top top",
            }
        })
        
        tl.fromTo("div.menu-icon div span.rotating-dash",{
            backgroundColor:"var(--main-wheat)"
        },{
            backgroundColor:"#141414",
            duration:1,
            scrollTrigger:{
                trigger: ".home .projects-section ",
                scrub:true,
                start:"top center",
                end:"top top",
           
            }
        },"<")
        
        tl.fromTo("div.menu-icon div span.morphing-shape",{
            borderColor:"var(--main-wheat)"
        },{
            borderColor:"#141414",
            duration:1,
            scrollTrigger:{
                trigger: ".home .projects-section ",
                scrub:true,
                start:"top center",
                end:"top top",
            }
        },"<")
    }
    
}