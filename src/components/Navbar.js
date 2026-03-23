import React from "react";
import { NavLink } from 'react-router';
const Navbar = () => {
    return(
        <nav style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding: '10px 20px', backgroundColor: '#333', color: 'white'}}>
            <div style={{fontSize: '24px', fontWeight: 'bold'}}><NavLink to='/' style={{color: 'white', textDecoration: 'none'}}>MyApp</NavLink></div>
            <ul style={{display: 'flex', listStyle: 'none', margin: 0, padding: 0}}>
                <li style={{margin: '0 10px'}}><NavLink to="/" style={{color: 'white', textDecoration: 'none'}}>Home</NavLink></li>
                <li style={{margin: '0 10px'}}><NavLink to="/about" style={{color: 'white', textDecoration: 'none'}}>About</NavLink></li>
                <li style={{margin: '0 10px'}}><NavLink to="/contact" style={{color: 'white', textDecoration: 'none'}}>Contact</NavLink></li>
            </ul>
        </nav>
    )
};

export default Navbar;