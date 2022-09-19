import React from 'react'
import {Link} from 'react-router-dom'
import {MdFingerprint} from 'react-icons/md';
import { FaBars, FaTimes} from 'react-icons/fa';
import { useState, useEffect } from 'react';
import Button from './Button';
import './Navbar.css'
import { IconContext } from 'react-icons/lib';

const Navbar = () => {

  const [button, setButton] = useState(true);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960){
      setButton(false);
    }else{
      setButton(true);
    }
  }
  window.addEventListener('resize',showButton);

  useEffect(()=>{
    showButton();
  },[])

  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}> 
    {/* helps in giving same property to all the icons wrapper around it. */}
    <div className="navbar">
        <div className="navbar-container container">
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                <MdFingerprint className='navbar-icon'/>
                LAVISH
            </Link>
            <div className="menu-icon" onClick={handleClick}>
                 {click ? <FaTimes/> : <FaBars/>}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link className="nav-links" to='/' onClick={closeMobileMenu}>Home</Link>
              </li>
              <li className='nav-item'>
                <Link className="nav-links" to='/services' onClick={closeMobileMenu}>Services</Link>
              </li>
              <li className='nav-item'>
                <Link className="nav-links" to='/products' onClick={closeMobileMenu}>Products</Link>
              </li>
              <li className="nav-btn">
                {button ? (
                  <Link to='/signup' className="btn-link">
                    <Button buttonStyle='btn--outline'>SIGN UP</Button>
                  </Link>
                ) : (
                  <Link to='/signup' className="btn-link" onClick={closeMobileMenu}>
                    <Button buttonStyle='btn--ouline' buttonSize='btn--mobile'>
                      SIGN UP
                      </Button>
                  </Link>
                )}
              </li>
            </ul>
        </div>
    </div>
    </IconContext.Provider>
    </>
  )
}

export default Navbar