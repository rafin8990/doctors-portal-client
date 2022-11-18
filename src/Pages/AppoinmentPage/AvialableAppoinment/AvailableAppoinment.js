import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import BookingModal from '../Appoinment/BookingModal/BookingModal';
import AppoinmentOption from '../AppoinmentOption/AppoinmentOption';

const AvailableAppoinment = ({ selectedDate }) => {

    // const [services, setServices]=useState([]);
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP')

    const { data: services = [], refetch, isLoading } = useQuery({
        queryKey: ['services', date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appoinmentoption?date=${date}`);
            const data = await res.json();
            return data
        }
       
    })
    if(isLoading){
          return <progress className="progress w-56 flex justify-center items-center"></progress>  
    }

    // useEffect(()=>{
    //     fetch('http://localhost:5000/appoinmentoption')
    //     .then(res=>res.json())
    //     .then(data=>setServices(data))
    // }, [])
    return (
        <div className='mt-20'>
            <p className='text-center text-[#19D3AE] font-bold'>Available Appoinment on {format(selectedDate, 'PP')}</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <AppoinmentOption
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
                    refetch={refetch}

                ></BookingModal>}
        </div>
    );
};

export default AvailableAppoinment;