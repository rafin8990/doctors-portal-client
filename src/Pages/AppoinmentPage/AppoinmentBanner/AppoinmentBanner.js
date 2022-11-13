import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';


const AppoinmentBanner = () => {
    const [selectedDate, setSelectedDate]= useState(new Date())
    
    return (
        <div>
            <div className="hero ">
                <div className="hero-content justify-between flex-col lg:flex-row-reverse">
                    <img src={chair} alt='' className=" rounded-lg shadow-2xl  w-1/2 " />
                    <div>
                        <DayPicker
                        mode='single'
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                        
                        /> 

                        you have selelced date : {format(selectedDate ,  'PP')}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppoinmentBanner;