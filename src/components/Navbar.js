import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from '../images/logo.gif'
import './Navbar.css'

const Navbar = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    return (
        <div className='navbar'>
            <div className='logo'>
                <img src={Logo} alt='logo' />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'><a href='/'>Home</a></li>
                <li className='nav-item'><a href='/'>About</a></li>
                <li className='nav-item'><a href='/'>Faq</a></li>
                <li className='nav-item'><a href='/'>Contact</a></li>
            </ul>
            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={30} />) : (<FaBars size={30} />)}
                
            </div>
        </div>
    )
}

export default Navbar