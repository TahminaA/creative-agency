import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import logo from '../../../image/logo.png';
import OrderForm from '../OrderForm/OrderForm';



const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
   
    return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-light">

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                
                <li className="nav-item active navbar">
                    <img className="logo" src={logo} alt=""/>
                </li>
                
                <ul className="navbar-nav ml-auto">
                
                    <li className="nav-item active">
                        <a className="nav-link mr-5 " href="#">{loggedInUser.name}</a>
                    </li>
                    
                </ul>
            </div>
            </nav>
           <div>
               <OrderForm></OrderForm>
           </div>
        </div>
        

        
    
    );
};

export default Order;