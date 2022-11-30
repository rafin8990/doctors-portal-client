import React from 'react';


const AppoinmentOption = ({ service , setTreatment}) => {
    const { name, slots,price } = service
    return (
        <div className='mt-16'>
            <div className="card border shadow-xl">
                <div className="card-body text-center">
                    <h2 className="card-title text-2xl flex justify-center text-[#19D3AE]">{name}</h2>
                    <p>{slots.length>0 ? slots[0] : 'Try Another Day'} </p>
                    <p>Visit fees: {price}</p>
                    <p>{slots.length} {slots.lenght>1 ? 'Spaces' : 'Space'} Available</p>
                    <div className="card-actions justify-center">
                      <label
                      onClick={()=>setTreatment(service)}
                      htmlFor="booking-modal"
                       className="btn bg-gradient-to-r from-[#0FCFEC] to-[#19D3AE] border-0"
                       >Book Appoinment</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppoinmentOption;