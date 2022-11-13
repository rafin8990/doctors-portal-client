import React from 'react';
import bg from '../../../assets/images/appointment.png'
import CustomButton from '../../../CustomButton/CustomButton';

const Contact = () => {
    return (
        <div className=" mt-28" style={{ backgroundImage: `url(${bg})` }}>
            <form className=" flex justify-center p-5 ">
                <div className='w-1/3  mt-5'>
                    <div className="">
                        <input type="text" placeholder="Email Address" className="input input-bordered text-black w-full" />
                    </div>
                    <div className="mt-5">
                        <input type="text" placeholder="Subject" className="input input-bordered text-black w-full" />
                    </div>
                    <div className='mt-5'>
                        <textarea className="textarea w-full text-black" placeholder="Your Message"></textarea>
                    </div>
                    <div className='mt-5 flex justify-center'>
                        <CustomButton>Contact</CustomButton>
                    </div>
                </div>
            </form>

        </div>
    );
};

export default Contact;