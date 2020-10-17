import React from 'react';
import nash from '../../../image/nash.png';
import bria from '../../../image/bria.png';
import miriam from '../../../image/miriam.png';
import FeedBacks from '../FeedBacks/FeedBacks';
import './ClientFeedBack.css';



 const ClientFeedBackData=[
    {
        feedback : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Nash Patrik',
        position : 'CEO,Manpol',
        img : nash
    },
    {
        feedback  : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Bria Malone',
        position : 'CEO,Manpol',
        img : bria
    },
    {
        feedback  : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Miriam Barron',
        position : 'CEO,Manpol',
        img : miriam
    }
]



const ClientFeedBack = () => {
    
    return (
            <section className="feedback my-5 py-5">
           <div className="container">
               <div className="section-header">
                   <h1 className='text-center'>Clients <spam className='feedBack'>Feedback</spam> </h1>
               </div>
               <div className="card-deck mt-5">
                    {
                       ClientFeedBackData.map(feedback => <FeedBacks feedback={feedback} key={feedback.name}/>)
                    }
                </div>
           </div>
        </section>
    );
};

export default ClientFeedBack;