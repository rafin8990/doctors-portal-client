import React from 'react';
import CustomButton from '../../../CustomButton/CustomButton';
import doctor from '../../../assets/images/doctor.png'
import bg from '../../../assets/images/appointment.png'

const Appointment = () => {
    return (
        <div className="hero mt-72 "  style={{ backgroundImage: `url(${bg})` }}>
            <div className="hero-content flex-col md:flex-row ">
                <div className='lg:w-1/2 mt-[-200px] pb-0 hidden md:block'>
                    <img src={doctor} alt='' className="rounded-lg" />
                </div>
                <div className='lg:ml-10 lg:w-1/2'>
                    <h3 className=' text-xl text-[#0FCFEC]'>Appointment</h3>
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mt-5 text-white">Make an appointment Today</h1>
                    <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <CustomButton>Get Started</CustomButton>
                </div>
            </div>
        </div>
    );
};

export default Appointment;