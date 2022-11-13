import React from 'react';
import banner from '../../../assets/images/chair.png'
import bg from '../../../assets/images/bg.png'
import CustomButton from '../../../CustomButton/CustomButton';

const Banner = () => {
    return (
        <div className='py-52' style={{ backgroundImage: `url(${bg})` }}>
            <div  className={`hero`}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} alt='' className="md:w-1/2 rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <CustomButton>Get Started</CustomButton>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Banner;