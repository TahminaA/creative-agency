import React from 'react';
import logo from '../../../image/logo.png';
import './Navbar.css';

const Navbar = () => {
    return (
        
             <nav className="navbar navbar-expand-lg navbar-light">

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    
                    <li className="nav-item active navbar">
                        <img className="logo" src={logo} alt=""/>
                    </li>
                    
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link mr-5" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                    
                        <li className="nav-item active">
                            <a className="nav-link mr-5 " href="#">Our Portfolio</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link mr-5" href="#">Our Team</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link mr-5" href="#">Contact Us</a>
                        </li>
                        <li className="nav-item active">
                        <button type="button" class="btn btn-dark nav-btn">Login</button>
                        </li>
                    </ul>
                </div>
                </nav>
            
       
    );
};

export default Navbar;