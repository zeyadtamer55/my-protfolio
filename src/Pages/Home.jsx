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
                <div className='w-full my-32'>
                    <AnimatedOnScrollText
                        overlayColor={"bg-main-black"}
                        textColor={"text-main-wheat"} 
                        text={"i bring clients "}
                        revealedText={"but they "}
                        revealedTextColor={"text-main-black"}
                        revealedTextBg={"bg-main-wheat"}
                    />
                    <AnimatedOnScrollText
                        overlayColor={"bg-main-black"}
                        textColor={"text-main-wheat"} 
                        text={"ideas to live"}
                        revealedText={"are too bad"}
                        revealedTextColor={"text-main-black"}
                        revealedTextBg={"bg-main-wheat"}
                    />
                </div>
                  
                <SkillsSection/>
                <RevealBgSection/>
                <ProjectsSection/>
                <MainBg/>
            </div>
        </>
    )
}

export default Home