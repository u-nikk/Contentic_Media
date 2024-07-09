import React, { useRef } from 'react'
import { useState } from 'react'
import emailjs from '@emailjs/browser';
import './Form.css'
const Form = () => {
    const form = useRef()


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_lb02dz7', 'template_n0hb0d8', form.current, 'GT6K4LssWMWE4qFAo')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };

    return (

        <div className='c-wrapper'>
            <div className="container">
                <div className="c-head">
                    <h1 className='title'>Contact Here</h1>
                    <div className="c-container">
                        {/*Left*/}
                        <div className="c-left">
                            
                                <img className='l-img' src="/Frame 18.png" /><h2>Bangalore</h2>
                           
                            <br />
                          
                                <img className='e-img' src="/Frame 17.png" /><a href="mailto:sangeet@contenticmedia.com"><h2 className='email'>work@contenticmedia.com</h2></a>
                           
                            <br />
                           
                                <img className='p-img' src="/Frame 19.png" /><a href="tel:+917304866931"><h2>+91-7304866931</h2></a>
                                <a href="tel:+916204089867 "><h2>+91-6204089867</h2></a>
                           
                        </div>
                        <div className="c-right">
                            <form ref={form} onSubmit={sendEmail}>


                                <input type="text" className="padding" name='name' id='' placeholder='Enter Name' />
                                <input type="phone" className="padding" name='phone' id='' placeholder='Enter Number' />
                                <input type="email" className="padding" name='email' id='' placeholder='example@gmail.com' />
                                <input type="text" className="padding" name='subject' id='' placeholder='Subject' />
                                <textarea type="message" className="padding" name='message' id='' cols={30} rows={8} placeholder="Message" />
                                <button>Send</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form
