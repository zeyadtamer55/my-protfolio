import gsap from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)


export const animateMainBg = (mainBg) => {
    
    const aboutSection = gsap.utils.toArray(".home .about-section")
    const tl = gsap.timeline()

    tl.fromTo(mainBg,{
        backgroundColor : "#e9e1c5",

    },{
        backgroundColor : "#141414",
        duration:1,
        scrollTrigger: {
            trigger:aboutSection,
            scrub:1,
            start:"top center",
            end:"top top",
        },

    
    })

    tl.to(".home", {
        color:"white",
        duration:1,
        scrollTrigger: {
            trigger:aboutSection,
            scrub:1,
            start:"top center",
            end:"top top"
        },
    },"<")
    

} 