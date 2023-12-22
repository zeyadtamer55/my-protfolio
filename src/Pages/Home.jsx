import React, { useEffect } from 'react'
import Hero from '../Features/Home/Hero/Hero'
import AboutSection from '../Features/Home/About/AboutSection'
import SkillsSection from '../Features/Home/Skills/SkillsSection'


const Home = () => {

    

    return (
        <div className='home'>
        
            <Hero/>
            <AboutSection/>
            <SkillsSection/>
         </div>
    )
}

export default Home