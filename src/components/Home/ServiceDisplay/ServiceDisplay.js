import React from 'react';
import { useHistory } from 'react-router-dom';

const ServiceDisplay = (props) => {
    const {description, photo,title} = props.service;
    const history = useHistory()
    const handleService = (ServiceType) => {
        history.push(`/service/${ServiceType}`);
    }
   
    return (
        <div onClick={() => handleService(props.service.ServiceType)} className="card shadow-sm">
            <div className="card-header d-flex">
                <img className="mx-3" src={photo} alt="" width="60"/>
            </div>
            <div className="card-body text-center">
                <h5>{title}</h5>
                <p className="card-text text-secondary mt-4">{description}</p>
            </div>
            
       </div>
    );
};

export default ServiceDisplay;