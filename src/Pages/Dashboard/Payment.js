import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheakoutForm from './MyAppointments/CheakoutForm';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_API_KEY);
const Payment = () => {

    const booking = useLoaderData()

    return (
        <div>
            <h1 className='text-3xl'>Payment for {booking?.treatment}</h1>
            <p className="text-xl">Please Pay ${booking?.price} for your appointment at {booking?.slot}</p>
            <div>
                <Elements stripe={stripePromise}>
                    <CheakoutForm
                    booking={booking}
                    />
                    {/* <CheckoutForm /> */}
                </Elements>
            </div>
        </div>
    );
};

export default Payment;