import React from 'react'
import './Testimonials.css'
import SlickSlider from './SlickSlider'
const Testimonials = () => {
    return (
        
            <div className="t-wrapper">
                <div className="container">
                    <div className="t-container">
                        <div className="t-head">
                            <span className='tag' >Testimonials</span>
                            <span className='title'>What people are saying...</span>
                            <span className='des'></span>
                        </div>

                    </div>
                    {/*Slider*/}
                    <SlickSlider />
                </div>
            </div>
       
    )
}

export default Testimonials
