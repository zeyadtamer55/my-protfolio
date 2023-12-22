import gsap from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)


export const animateMainBg = (mainBg) => {
    
    const aboutSection = gsap.utils.toArray(".home .about-section")

    const tl = gsap.timeline()

    tl.to(mainBg,{
        backgroundColor : "#141414",
        duration:.1,
        scrollTrigger: {
            trigger:aboutSection,
            scrub:1,
            start:"top center",
            end:"top top",
        },
    
    })

    tl.to(document.body, {
        color:"white",
        duration:.1,
        scrollTrigger: {
            trigger:aboutSection,
            scrub:1,
            start:"top center",
            end:"top top"
        },
    },"<")
    
    tl.to("div.menu-icon div span.rotating-dash", {
        background:"var(--main-wheat)",
        duration:.1,
        scrollTrigger: {
            trigger:aboutSection,
            scrub:1,
            start:"top center",
            end:"top top"
        },
    },"<")
    
    tl.to("div.menu-icon div span.morphing-shape", {
        borderColor:"var(--main-wheat)",
        duration:.1,
        scrollTrigger: {
            trigger:aboutSection,
            scrub:1,
            start:"top center",
            end:"top top"
        },
    },"<")
    
} 