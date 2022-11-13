import React from 'react';

const Person = ({person}) => {
    const {name, describe, pic,place}=person
    return (
        <div className='shadow-2xl rounded-xl p-5'>
            <div>
                <h3 className='p-10'>{describe}</h3>
            </div>
            <div className='flex items-center'>
                <img src={pic} alt="" />
                <div className='ml-5'>
                    <h1 className='text-xl'>{name}</h1>
                    <h3>{place}</h3>
                </div>
            </div>
        </div>
    );
};

export default Person;