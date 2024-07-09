import React from 'react'
import { Link } from 'react-scroll'
import "./Button.css"
const Button = () => {
  return (
    <div>
       <Link to='c-wrapper' spy={true} smooth={true}>
      <button className='contactUsBtn'>Let&apos;s Start !</button>
      </Link>
    </div>
  )
}

export default Button
