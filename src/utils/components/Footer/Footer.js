import React from 'react'
import EmailBox from '../EmailBox/EmailBox'
import './Footer.css'
import { Link } from 'react-scroll'
const Footer = () => {
  return (
    <div>
      <div className="f-wrapper">
        <div className="container">
            <div className="f-container">
                
                <hr />
                <div className="f-menu">
                <Link to="h-wrapper" spy={true} smooth={true}>
                <span>Home</span>
                </Link>
                <Link to="od-wrapper" spy={true} smooth={true}>
                <span>Why Us</span>
                </Link>
                <Link to="services-wrapper" spy={true} smooth={true}>
                <span>Services</span>
                </Link>
                <Link to="t-wrapper" spy={true} smooth={true}>
                <span>Testimonials</span>
                </Link>
                </div>
                <hr />
                <span className='text'> © 2024 Contentic Media. All rights reserved.
                <br />
                Terms of Use | Privacy Policy
                <br />
                </span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
