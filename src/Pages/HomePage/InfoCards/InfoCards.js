import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import InfoCard from '../InfoCard/InfoCard';

const InfoCards = () => {
    const InfoCards=[
        {
            id:1,
            pic: clock,
            title : 'Opening Hours',
            describtion: 'Contact Us at 9 AM to 5 PM',
            gradient:'bg-gradient-to-r from-[#0FCFEC] to-[#19D3AE]'

        },
        {
            id:2,
            pic: marker,
            title : 'Visit Our Location',
            describtion: 'Brooklyn, NY 10036, United States',
            gradient:'bg-[#3A4256]'

        },
        {
            id:3,
            pic: phone,
            title : 'Contact us',
            describtion: '+880-1984419614',
            gradient:'bg-gradient-to-r from-[#0FCFEC] to-[#19D3AE]'

        },
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
            InfoCards.map(info=><InfoCard
            key={info.id}
            info={info}
            ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;