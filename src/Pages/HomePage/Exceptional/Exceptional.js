import React from 'react';
import except from '../../../assets/images/treatment.png'
import CustomButton from '../../../CustomButton/CustomButton';
const Exceptional = () => {
    return (
        <div className='mt-36'>
            <div className="hero">
                <div className="hero-content flex-col md:flex-row ">
                    <div className='lg:w-1/2 flex justify-center'>
                        <img src={except} alt='' className="rounded-lg shadow-2xl" />
                    </div>
                    <div className='ml-10 lg:w-1/2 mt-5'>
                        <h1 className="text-4xl lg:text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <CustomButton>Get Started</CustomButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Exceptional;