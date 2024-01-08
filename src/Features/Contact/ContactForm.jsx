import React, { useEffect, useState } from 'react'
import closeIcon from "../../Assets/Icons/close.svg"

const ContactForm = () => {
    
    const [name,setName] = useState("")
    const [phone,setPhone] = useState("")
    const [message,setMessage] = useState("")


    return (
        <div className='fixed overflow-auto top-0 w-full z-[-500] left-0 h-screen bg-main-black'>
            
            <div className="container h-full flex flex-col">
                
                <div id="contact-close-icon" className='p-4 items-center flex !h-fit justify-between w-full'>
                    <p className='text-4xl text-main-wheat'>feel free to contact me</p>
                    <img src={closeIcon} className=' w-10 h-10 object-contain clickable' alt="close-icon" />
                </div>
                                
                <div className=' text-main-wheat flex flex-col w-full'>
                    <div className='flex flex-col my-4'>
                        <label className='text-4xl font-algeros mb-4' htmlFor="name">name</label>
                        <input maxLength="15" spellCheck="false" onChange={(e)=> setName(e.target.value)} id='name' type="text" className=' bg-main-wheat text-main-black p-2 text-3xl h-[40px] ease-1s outline-none caret-main-black '/>
                    </div>
                    <div className='flex flex-col my-4'>
                        <label className='text-4xl font-algeros mb-4' htmlFor="phone">phone number</label>
                        <input maxLength="15" spellCheck="false" onChange={(e)=> setPhone(e.target.value)} id='phone' type="text" className=' bg-main-wheat text-main-black p-2 text-3xl h-[40px] ease-1s outline-none caret-main-black '/>
                    </div>
                    <div className='flex flex-col my-4'>
                        <label className='text-4xl font-algeros mb-4' htmlFor="message">message</label>
                        <textarea maxLength="100" spellCheck="false" onChange={(e)=> setMessage(e.target.value)} id='message' type="text" className=' bg-main-wheat resize-none h-[150px] text-main-black no-underline p-2 text-3xl outline-none caret-main-black '/>
                    </div>

                </div>
                
                <button className='btn-gold p-3 capitalize text-5xl'>
                    send
                </button>

            </div>
            
        </div>
    )
}

export default ContactForm
