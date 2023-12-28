import React, { useEffect } from 'react'
import Hero from '../Features/Home/Hero/Hero'
import AboutSection from '../Features/Home/About/AboutSection'
import SkillsSection from '../Features/Home/Skills/SkillsSection'
import MainBg from '../Features/Home/MainBg/MainBg'
import AnimatedOnScrollText from '../UI/AnimatedOnScrollText'
import RevealBgSection from '../Features/Home/RevealBgSection'
import ProjectsSection from '../Features/Home/Projects/ProjectsSection'


const Home = () => {

    

    return (
        <>
            <div className='home relative'>
            
                <Hero/>
                <AboutSection/>
                <AnimatedOnScrollText textColor={"text-main-wheat"} text={"i bring clients ideas to live"}/>
                <SkillsSection/>
                <RevealBgSection/>
                <ProjectsSection/>
                <MainBg/>
            </div>
        </>
    )
}

export default Home