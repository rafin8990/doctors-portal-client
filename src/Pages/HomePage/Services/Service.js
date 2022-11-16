import React from 'react';

const Service = ({service}) => {
    const {name, pic, description}=service;
    return (
        <div className="card border shadow-xl">
            <figure className="px-10 pt-10">
                <img src={pic} alt="" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Service;