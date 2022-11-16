import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
    const { name, slots } = treatment;
    const date = format(selectedDate, 'PP')
    const handleModal = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const slot = form.slot.value

        const booking = {
            selectedDate: date,
            patient: name,
            treatment: name,
            email,
            phone,
            slot
        }
        setTreatment(null)

        console.log(booking)
    }


    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleModal} className=' grid grid-cols-1 gap-5 mt-10'>
                        <input type="text" defaultValue={date} name='' disabled placeholder="" className="input input-bordered w-full " />
                        <select name='slot' className="select select-bordered w-full">

                            {
                                slots.map((slot, i) => <option key={i} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' placeholder="Full Name" className="input input-bordered w-full " />
                        <input type="text" name='email' placeholder="Email" className="input input-bordered w-full " />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full " />
                        <button type='submit' className='btn bg-[#3A4256]'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;