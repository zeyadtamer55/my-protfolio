import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)


export const animateHeaderOnScroll = (tl) => {

    

    onEnterRevealSection(tl)



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

const onEnterRevealSection = (tl) => {
    if (window.innerWidth > 900) {
        tl.fromTo("header .logo",{
            color:"var(--main-wheat)"
        },{
            color:"#141414",
            duration:1,
            scrollTrigger:{
                trigger: ".home .projects-section ",
                scrub:true,
                start:"-150% bottom",
                end:"top bottom"
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
                start:"-150% bottom",
                end:"top bottom"
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
                start:"-150% bottom",
                end:"top bottom"
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
                start:"top bottom",
                end:"top 80%",
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
                start:"top bottom",
                end:"top 80%",
           
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
                start:"top bottom",
                end:"top 80%",
            }
        },"<")
    }
    
}