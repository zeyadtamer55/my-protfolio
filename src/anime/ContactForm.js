import gsap from "gsap"

export const openContactForm = () => {

    const tl = gsap.timeline()

    tl.to("header",{
        pointerEvents:"none"
    })

    tl.to(".contact .contact-hero-section #get-in-touch-btn",{
        opacity:0,
        duration:.6,
        display:"none"
    })

   

    tl.to(".contact .contact-hero-section .morphing-shape",{
        scale:4,
        duration:5,
        ease:"circ.inOut"
    })


    tl.to(".contact .contact-hero-section .title",{
        opacity:0,
        duration:1,
        display:"none"
    })

    tl.to(".contact .contact-form",{
        opacity:1,
        duration:2,
        display:"block"
    })
}




export const closeContactForm = () => {
    
    const tl = gsap.timeline()
    
 

    tl.to(".contact .contact-form",{
        opacity:0,
        duration:2,
        display:"none"
    })

    tl.to(".contact .contact-hero-section .title",{
        opacity:1,
        duration:1,
        display:"block"
    })
    
    tl.to(".contact .contact-hero-section .morphing-shape",{
        scale:1,
        duration:5,
        ease:"circ.inOut"
    })

    tl.to(".contact .contact-hero-section #get-in-touch-btn",{
        opacity:1,
        duration:.6,
        display:"block"
    })

    tl.to("header",{
        pointerEvents:"initial"
    })

}