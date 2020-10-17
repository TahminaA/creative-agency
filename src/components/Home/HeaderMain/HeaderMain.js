import React from 'react';
import frame from '../../../image/Frame.png';

const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center">
        <div className="col-md-4 offset-md-1">
            <h1>Let's Grow Your <br/> Brand To The <br/> Next Level</h1>
            <p className="text-dark">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eveniet necessitatibus et iusto corrupti minima.</p>
            <button type="button" class="btn btn-dark nav-btn">Hire us</button>
        </div>
        <div className="col-md-6">
            <img src={frame} alt="" className="img-fluid"/>
        </div>
    </main>
    );
};

export default HeaderMain;