import React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from '../images/logo.gif'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='logo'>
                <img src={Logo} alt='logo' />
            </div>
            <ul className='nav-menu'>
                <li className='nav-item'><a href='/'>Home</a></li>
                <li className='nav-item'><a href='/'>About</a></li>
                <li className='nav-item'><a href='/'>Faq</a></li>
                <li className='nav-item'><a href='/'>Contact</a></li>
            </ul>
            <div className='hamburger'>
                <FaBars />
            </div>
        </div>
    )
}

export default Navbar