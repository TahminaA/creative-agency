import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
    <main style={{height:'600px'}} className="row d-flex mt-5 footer">
        
    <div className="col-md-4 offset-md-1">
        <h1>Let handle your<br/> project,professionally</h1>
        <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima.</p>
        
    </div>
    
        <div className="col-md-7">
               <form action="">
                     <div className="form-group">
                         <input type="text" className="form-control" placeholder="Your Email Address"/>
                     </div>
                     <div className="form-group">
                          <input type="text" className="form-control" placeholder="Your name/company's name"/>                 </div>
                 <div className="form-group">
                           <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
                  </div>
                     <div>                 
                     <button type="button" class="btn btn-dark nav-btn">Send</button>
                     </div>
                 </form>
               </div>
      </main>       

    );
};

export default Footer;