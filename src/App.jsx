import { BrowserRouter, Route, Routes } from "react-router-dom"
import Pages from "./Data/Pages"
import Header from "./Layout/Header/Header"
import AnimCursor from "./Layout/AnimCursor"
import Menu from "./Layout/Menu/Menu"
import { useEffect } from "react"
import Lenis from "@studio-freight/lenis"

function App() {

    useEffect(()=>{
        let lenis
        if (window.innerWidth > 900) {
            console.log("nice");
            lenis = new Lenis()

            function raf(time) {
                lenis.raf(time)
                requestAnimationFrame(raf)
            }
    
            requestAnimationFrame(raf)
        } else {
            lenis = null
        }

        

    },[])

    return (
        <>
            <BrowserRouter>
                
                <Menu/>
                <Header/>
                <AnimCursor/>

                <Routes>

                    {
                        Pages.map((page,idx) => (
                            <Route path={page.href} key={idx} element={page.component}/>
                        ))
                    }

                </Routes>

            </BrowserRouter>
        </>
    )
}

export default App
