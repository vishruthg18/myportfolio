import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'

const Header = () => {
  return (
    <header>
      <div className="container header__contianer">
        <h5>Hello I'm</h5>
        <h1>Vishruth Guda</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA/>
        <div className="me">
          <img src={ME} alt='me'></img>
        </div>
        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header