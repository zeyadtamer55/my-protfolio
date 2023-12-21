import { BrowserRouter, Route, Routes } from "react-router-dom"
import Pages from "./Data/Pages"
import Header from "./Layout/Header/Header"
import AnimCursor from "./Layout/AnimCursor"
import Menu from "./Layout/Menu/Menu"

function App() {

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
