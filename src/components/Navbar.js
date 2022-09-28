import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import {Button} from './Button'
import { GiGlassHeart} from 'react-icons/gi';
import { BiMenu } from "react-icons/bi";

function Navbar() {

    const [button, setButton] = useState(true);
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)

        }
    };
    
    /* Used to prevent sign up button from appearing in middle of navigation bar */
    useEffect(() => {showButton();}, []);

    window.addEventListener('resize', showButton);

  return (
    <>
    <nav className="navbar">
        <div className="navbar-container">
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    <h3>Fitter</h3>
                    <GiGlassHeart/>
                    {/* <i className='fa-solid fa-times'></i> */}
            </Link>

            <div className="menu-icon" onClick = {handleClick}>
                <BiMenu className='mobile-menu'/>
                {/* <i className={click ? <BiMenu className='mobile-menu'/>: 'fas fa-bars'}/> */}
            </div>
            
            {/* This will make the menu appear and disappear */}
            <ul className ={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}> Home </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/services' className='nav-links' onClick={closeMobileMenu}> Services </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/products' className='nav-links' onClick={closeMobileMenu}> Products </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}> Sign Up</Link>
                </li>
            </ul>
            {button && 
            <Link to='/sign-up'> <Button buttonStyle='btnSignUp'>SIGN UP</Button> </Link>}
        </div>
    </nav>
    </>
  )
}

export default Navbar