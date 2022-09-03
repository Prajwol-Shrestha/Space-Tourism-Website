import React, { useState } from "react";
import { Link } from 'react-router-dom';
import logo from '../../assets/shared/logo.svg';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

export default function Navbar(){
    const [toggleMenu , setToggleMenu] = useState( false )

    const showMenu = {    
        display: 'flex',
    }

    function toggle() {
        setToggleMenu( !toggleMenu )
    }

    return (
        <nav className="navbar">
            <div className="logo"> <img src= {logo} /> </div>
            <div className="hamburger" onClick={toggle}> { toggleMenu ? <AiOutlineClose size={30}/> : <GiHamburgerMenu size={30} /> }</div>
            <div style={ toggleMenu ? showMenu : null } className='menu'>
                <ul className="nav-links" >
                    <Link to="/" style={{textDecoration: 'none'}}>  <li className="nav-link"> <strong> 00 </strong> Home </li> </Link>
                    <Link to="/destinations" style={{textDecoration: 'none'}}>  <li className="nav-link"> <strong> 01 </strong> Destination </li> </Link>
                    <Link to="/crews" style={{textDecoration: 'none'}}>  <li className="nav-link"> <strong> 02 </strong> Crew </li> </Link>
                    <Link to="/technology" style={{textDecoration: 'none'}}>  <li className="nav-link"> <strong> 03 </strong> Technology </li> </Link>
                </ul>
            </div>
            <ul className="nav-links-lg" >
                    <Link to="/" style={{textDecoration: 'none'}}>  <li className="nav-link"> <strong> 00 </strong> Home </li> </Link>
                    <Link to="/destinations" style={{textDecoration: 'none'}}>  <li className="nav-link"> <strong> 01 </strong> Destination </li> </Link>
                    <Link to="/crews" style={{textDecoration: 'none'}}>  <li className="nav-link"> <strong> 02 </strong> Crew </li> </Link>
                    <Link to="/technology" style={{textDecoration: 'none'}}>  <li className="nav-link"> <strong> 03 </strong> Technology </li> </Link>
                </ul>
        </nav>
    )
}