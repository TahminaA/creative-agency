import React from 'react';

const FeedBacks = (props) => {
    const {feedback,name,position ,img} = props.feedback;
    return (


        <div className="card shadow-sm">
        <div className="card-header d-flex  align-items-center">
            <img className="mx-3" src={img} alt="" width="60"/>
            <div>
                <h6>{name}</h6>
                <p className="m-0">{position}</p>
            </div>
        </div>
        <div className="card-body">
            <p className="card-text text-secondary mt-4">{feedback}</p>
        </div>
        
   </div>
    );
};

export default FeedBacks;