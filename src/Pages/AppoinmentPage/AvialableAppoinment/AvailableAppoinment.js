import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../Appoinment/BookingModal/BookingModal';
import AppoinmentOption from '../AppoinmentOption/AppoinmentOption';

const AvailableAppoinment = ({selectedDate}) => {

    const [services, setServices]=useState([]);
    const [treatment, setTreatment]=useState(null)

    useEffect(()=>{
        fetch('appointmentOptions.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    }, [])
    return (
        <div className='mt-20'> 
            <p className='text-center text-[#19D3AE] font-bold'>Available Appoinment on {format(selectedDate, 'PP')}</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service=><AppoinmentOption
                    key={service.id}
                    service={service}
                    setTreatment={setTreatment}
                    ></AppoinmentOption>)
                }
            </div>

            {
                treatment &&
                <BookingModal
            treatment={treatment}
            selectedDate={selectedDate}
            setTreatment={setTreatment}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppoinment;