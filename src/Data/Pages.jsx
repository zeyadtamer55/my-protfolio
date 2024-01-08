import Home from "../Pages/Home"
import Contact from "../Pages/Contact"
import Projects from "../Pages/Projects"

const Pages = [

    {
        name:"index",
        href:"/",
        component:<Home/>,
        description:"lets dive to creativity"
    },
    {
        name:"contact",
        href:"/contact",
        component:<Contact/>,
        description:"have an idea? ,lets work Together"
    },
    {
        name:"my artwork",
        href:"/projects",
        component:<Projects/>,
        description:"want to see my projects?"
    },

]

export default Pages