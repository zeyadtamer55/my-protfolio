import Home from "../Pages/Home"
import Contact from "../Pages/Contact"
import Projects from "../Pages/Projects"

const Pages = [

    {
        name:"index",
        href:"/",
        component:<Home/>
    },
    {
        name:"contact",
        href:"/contact",
        component:<Contact/>
    },
    {
        name:"projects",
        href:"/projects",
        component:<Projects/>
    },

]

export default Pages