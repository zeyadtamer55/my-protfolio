import Description from './Description'

const AboutSection = () => {

    const title = "hi world, my name is zeyad tamer"



    return (
        <div className='container !pt-[100px] min-h-screen about-section'>
            <h2 className=' font-algeros text-7xl w-fit mt-3 text-main-wheat'>about me</h2>
            
            <p className='text-3xl mt-4'>
                {
                    title
                }
            </p>
            
            <Description/>

            <a download className='btn-gold uppercase text-4xl p-5 mt-10'>
                download cv
            </a>
        </div>
    )
}

export default AboutSection