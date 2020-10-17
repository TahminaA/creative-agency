import React from 'react';
import mobile from '../../../image/mobile.png';
import graphic from '../../../image/grapic.png';
import web from '../../../image/web.png';
import ServiceDisplay from '../ServiceDisplay/ServiceDisplay';
import './ServiceCard.css'




const ServiceData = [
    {
        title : 'Web & Mobile design',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        photo : mobile
    },
    {
        title : 'Graphic Design',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        photo : graphic
       
    },
    {
        title : 'Web development',
        description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        photo: web
    },
]


const ServiceCard = () => {
    return (
        <section className="service-card my-5">
        <div className="container">
            <div className="section-header text-center">
                 <h3>Provide awesome <spam className='feedBack'>services</spam></h3>
            </div>
            <div className="card-deck mt-5">
                 {
                     ServiceData.map(service => <ServiceDisplay service={service} key={service.title}/>)
                 }
            </div>
        </div>
    </section>
    );
};

export default ServiceCard;