import React from 'react';
import Appointment from '../Appointment/Appointment';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Exceptional from '../Exceptional/Exceptional';
import InfoCards from '../InfoCards/InfoCards';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <Exceptional></Exceptional>
            <Appointment></Appointment>
            <Testimonial></Testimonial>
            <Contact></Contact>
        </div>
    );
};

export default Home;