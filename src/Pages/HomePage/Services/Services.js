import React from 'react';
import image1 from '../../../assets/images/fluoride.png'
import image2 from '../../../assets/images/cavity.png'
import image3 from '../../../assets/images/fluoride.png'
import Service from './Service';

const Services = () => {
    const services=[
        {
            id: 1,
            name : "Fluoride Treatment",
            pic:image1,
            description:'Fluoride varnish can be applied to both baby teeth and adult teeth by a dentist. The process involves painting a varnish containing high levels of fluoride onto the surface of the tooth twice a year to prevent decay.'
        },
        {
            id: 2,
            name : "Cavity Fillings",
            pic:image2,
            description:'Fillings treat tooth decay, preventing further damage and tooth loss, as well as the possibility of pain and infection. A filling seals a hole, or cavity, in the tooth.'
        },
        {
            id: 3,
            name : "Teeth Whitening",
            pic:image3,
            description:'Everyone notices a bright, white, glowing smile. And everyone notices how confident you feel when you have that beautiful smile. That’s why we utilize long-lasting Teeth Whitening procedure — because we want you to glow with pride and confidence.'
        },
    ]

    return (
        <div>
            <div className='mt-36'>
                <h3 className='flex justify-center text-xl text-[#0FCFEC]'>Our Services</h3>
                <h1 className='flex justify-center text-5xl '>Services We Provide</h1>,
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5'>
                {
                    services.map(service=><Service
                    key={service.id}
                    service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;