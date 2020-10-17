import React from 'react';
import slack from '../../../image/slack.png'
import google from '../../../image/google.png'
import uber from '../../../image/uber.png'
import netflix from '../../../image/netflix.png'
import airbnb from '../../../image/airbnb.png'
import './Logo.css';


const Logo = () => {
    return (

         <nav className="navbar navbar-expand-lg navbar-light">

         <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
            
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                   <img className="logo" src={slack} alt=""/>
                </li>
                <li className="nav-item active">
                   <img className="logo" src={google} alt=""/>
                </li>
                <li className="nav-item active">
                   <img className="logo" src={uber} alt=""/>
                </li>
                <li className="nav-item active">
                   <img className="logo" src={netflix} alt=""/>
                </li>
                <li className="nav-item active">
                   <img className="logo" src={airbnb} alt=""/>
                </li>
            
               
            </ul>
        </div>
        </nav>
       
    );
};

export default Logo;