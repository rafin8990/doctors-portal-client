import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorElements = () => {
    const error = useRouteError()
    return (
        <div className='flex justify-center  items-center'>
            <div>
                <p className='text-red-600 text-2xl'>Something went wrong!!!</p>
                <p className='text-red-600 text-3xl'>{error.message || error.statusText  }</p>
            </div>
        </div>
    );
};

export default ErrorElements;