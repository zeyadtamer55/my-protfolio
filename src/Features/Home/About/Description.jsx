const Description = () => {
    
    const desc = "i am 16 years old a front end developer based in egypt, i build maintainable , functional and responsive web applications using my frontend skills , i am proficient in latest web technologies , frameworks and libiraries , i usually expand my skills to stay the forefront in the industry"

    return (
        <div className='mt-10 text-inherit '>
            {
                desc.split(" ").map((word,index)=> (
                    <div key={index} className='inline-block text-2xl sm:text-3xl overflow-hidden h-9 mx-1'>
                        <div className='moving-to-up-word'>
                            {
                                word
                            }
                        </div>
                        
                    </div>
                ))
            }
        </div>
    )
}

export default Description