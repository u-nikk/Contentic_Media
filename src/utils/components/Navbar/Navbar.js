"use client"
import React, { useState } from 'react'
import './Navbar.css'
import { BiMenuAltRight } from 'react-icons/bi'
import { RxCross2 } from 'react-icons/rx'
import {motion,useMotionValue,useMotionValueEvent,UseMotionValueEvent,useScroll} from "framer-motion";
import { Link } from 'react-scroll'
const Navbar = () => {
    const [mobileMenuOpened, setMobileMenuOpened] = useState(false)
    const [navStyle,setNavstyle]=useState("");
    const {scrollYProgress} = useScroll();
    useMotionValueEvent(scrollYProgress,"change",(latest)=>{
        if(latest>0.2) {
            setNavstyle("sticky");
        } 
        else{
            setNavstyle("");
        }
    });
    
    return (
        <div className={`n-wrapper ${navStyle}`}>
            {/*------Desktop version-------*/}
            <div className="container">
                <div className="n-container">
                    {/*left side*/}
                    <div className="n-logo">
                        <img src="./logo.png" alt="" />
                    </div>
                    {/*right side*/}
                    <div className="n-right">
                        <div className="n-menu">
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
                        <Link to="c-wrapper" spy={true} smooth={true}>
                        <div className="button">
                            Contact Us
                        </div>
                        </Link>
                   
                    </div>

                </div>
            </div>
            {/*------Mobile version-------*/}

            <div className="nm-container">
                {/*------logo-----*/}
                <img src="./logo.png" alt="" />

                {/*-----menu icon------*/}
                {
                    !mobileMenuOpened ?
                        <BiMenuAltRight size={30} onClick={() => setMobileMenuOpened(true)}
                        /> :
                        <RxCross2 size={30} onClick={() => setMobileMenuOpened(false)} />}
            
                {/*-----mobile menu-----*/}
                <div className="nm-menu" style={{ transform: mobileMenuOpened && "translateX(0%)" }}>
                    <Link onClick={()=> setMobileMenuOpened(false)} to="h-wrapper" spy={true} smooth={true}>
                    <span>Home</span>
                    </Link>
                    <Link onClick={()=> setMobileMenuOpened(false)} to="od-wrapper" spy={true} smooth={true}>
                    <span>Why Us</span></Link>
                    <Link onClick={()=> setMobileMenuOpened(false)} to="services-wrapper" spy={true} smooth={true}>
                    <span>Services</span>
                    </Link>
                    <Link onClick={()=> setMobileMenuOpened(false)} to="t-wrapper" spy={true} smooth={true}>
                    <span>Testomonials</span>
                    </Link>
                    <Link onClick={()=> setMobileMenuOpened(false)} to="c-right" spy={true} smooth={true}>
                    <div className="mbutton">Contact Us</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar