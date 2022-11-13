import React from 'react';

const InfoCard = ({info}) => {
    const {pic, title, describtion, gradient}=info
    return (
        <div>
            <div className={`card p-8 md:card-side shadow-xl ${gradient}`}>
                <figure><img src={pic} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-white">{title}</h2>
                    <p className='text-white '>{describtion}</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;