import React from "react";
import logo from '../images/logo.png';

function Navbar() {
    return (<nav className='nav'>
        <img src={logo} className='nav--logo' />
    </nav>);
}

export default Navbar;