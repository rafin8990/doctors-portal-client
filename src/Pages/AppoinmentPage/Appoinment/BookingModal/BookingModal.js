import { format } from 'date-fns';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
    const {user}=useContext(AuthContext)
    const { name: treatmentName, slots, price } = treatment;
    const date = format(selectedDate, 'PP')
    const handleModal = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const slot = form.slot.value;
        

        const booking = {
            selectedDate: date,
            patient: name,
            treatment: treatmentName,
            email,
            phone,
            slot,
            price:price
        }
        fetch(`https://doctors-portal-server-ruby-one.vercel.app/bookings`, {
            method: "POST",
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.acknowledged){
                alert('user Update successfully')
                setTreatment(null)
                refetch()
            }
            else{
                alert(data.message)
                setTreatment(null)
            }
        })
        
    }


    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{treatmentName}</h3>
                    <form onSubmit={handleModal} className=' grid grid-cols-1 gap-5 mt-10'>
                        <input type="text" defaultValue={date} name='' disabled placeholder="" className="input input-bordered w-full " />
                        <select name='slot' className="select select-bordered w-full">

                            {
                                slots.map((slot, i) => <option key={i} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" defaultValue={user?.displayName} disabled name='name' placeholder="Full Name" className="input input-bordered w-full " />
                        <input type="text" defaultValue={user?.email} disabled name='email' placeholder="Email" className="input input-bordered w-full " />
                        <input type="text" defaultValue={price} disabled name='price' placeholder="price" className="input input-bordered w-full " />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full " />
                        <button type='submit' className='btn bg-[#3A4256]'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;