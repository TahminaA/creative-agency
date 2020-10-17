import React, { useContext } from 'react';
import './OrderForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment,faShoppingCart,faLock } from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../../../App';


const OrderForm = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const handleRegistration = () =>{
        const newService = {...loggedInUser,};
        fetch('http://localhost:5000/addService',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
           body: JSON.stringify(newService),
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
        })
    }
    return (

            <main style={{height:'600px'}} className="row d-flex mt-5 order-form">
        
        <div className="col-md-4 offset-md-1">
            <p><FontAwesomeIcon icon={faShoppingCart} /> Order</p>
            <p><FontAwesomeIcon icon={faLock} />  Service list</p>
            <p><FontAwesomeIcon icon={faComment}/>  Review</p>
            
        </div>
        
            <div className="col-md-7">
                   <form action="">
                         <div className="form-group">
                             <input type="text" className="form-control" placeholder="Your Email Address"/>
                         </div>

                         <div className="form-group">
                              <input type="text" className="form-control" placeholder="Your name/company's name"/>                 
                        </div>
                        <div className="form-group">
                             <input type="text" className="form-control" placeholder="Graphic Design"/>
                         </div>
                        <div className="form-group">
                               <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Project details"></textarea>
                      </div>
                      <div className="form-group">
                              <input type="text" className="form-control" placeholder="price"/>                 
                        </div>
                         <div>                 
                         <button onClick={handleRegistration} type="button" class="btn btn-dark nav-btn">Send</button>
                         </div>
                     </form>
                   </div>
          </main>       
        
    );
};

export default OrderForm;