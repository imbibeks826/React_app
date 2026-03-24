import React from "react";
import { Outlet, useNavigate } from "react-router";

const About = () => {
    const navigate = useNavigate();
    return(
        <>
        <div style={{display:'flex', flex:1, height: '100vh', backgroundColor:'#1e3a8a', justifyContent:'center', alignItems:'center'}}>
            <h1 style={{color: 'white'}}>This is the About Page</h1>
            <button style={{marginLeft: '20px', padding: '10px 20px', fontSize: '16px'}} onClick={()=>{navigate('/about/projects')}}>Click Me</button>
        </div>
        <Outlet />
        </>
    )
};

export default About;