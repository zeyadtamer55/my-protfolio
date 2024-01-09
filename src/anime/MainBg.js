import gsap from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)


export const animateMainBg = (tl,mainBg) => {
    
    const aboutSection = gsap.utils.toArray(".home .about-section")

    animateOnEnterProjectsSection(tl,mainBg)

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

    tl.fromTo(".home",{
        color:"#141414",
    } ,{
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


const animateOnEnterProjectsSection = (tl,mainBg) => {
    
    if (window.innerWidth < 900) {
        tl.fromTo(mainBg,{
            backgroundColor:"#141414",

        },{
            backgroundColor:"#e9e1c5",
            duration:1,
            scrollTrigger:{
                trigger: ".home .projects-section ",
                scrub:1,
                start:"top center",
                end:"top top",
            }
        })

        tl.fromTo(".home",{
            color:"white",
        },{
            color:"#141414",
            duration:1,
            scrollTrigger:{
                trigger: ".home .projects-section ",
                scrub:1,
                start:"top center",
                end:"top top",
            }
        })
    }
    
}