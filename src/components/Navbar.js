import React from "react";
import { NavLink } from 'react-router';
const Navbar = () => {
    return(
        <nav style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding: '10px 20px', backgroundColor: '#333', color: 'white'}}>
            <div style={{fontSize: '24px', fontWeight: 'bold', width:'30px', backgroundColor:'blue', borderRadius:'8px', padding:'10px'}}><NavLink to='/' style={{color: 'white', textDecoration: 'none'}}>BS</NavLink></div>
            <ul style={{display: 'flex', listStyle: 'none', margin: 0, padding: 0}}>
                <li style={{margin: '0 10px'}}><NavLink to="/" style={{color: 'white', textDecoration: 'none'}}>Home</NavLink></li>
                <li style={{margin: '0 10px'}}><NavLink to="/about" style={{color: 'white', textDecoration: 'none'}}>About</NavLink></li>
                <li style={{margin: '0 10px'}}><NavLink to="/contact" style={{color: 'white', textDecoration: 'none'}}>Contact</NavLink></li>
            </ul>
        </nav>
    )
};

export default Navbar;