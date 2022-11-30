import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const MyAppointments = () => {

  const { user } = useContext(AuthContext);
  const url = `https://doctors-portal-server-ruby-one.vercel.app/bookings?email=${user?.email}`

  const { data: bookings = [] } = useQuery({
    queryKey: ['bookings', user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
      })
      const data = await res.json()
      console.log(data)
      return data
    }
  })
  return (
    <div>
      <h1 className='text-4xl mb-5'>My Appoinments</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th className='bg-white text-black'></th>
              <th className='bg-white text-black'>Name</th>
              <th className='bg-white text-black'>Treatment</th>
              <th className='bg-white text-black'>Date</th>
              <th className='bg-white text-black'>Time</th>
              <th className='bg-white text-black'>Payment</th>
            </tr>
          </thead>
          <tbody>
            {
              bookings.map((book, i) => <tr key={book._id}>
                <th className='bg-white text-black'>{i + 1}</th>
                <td className='bg-white text-black'>{book?.patient}</td>
                <td className='bg-white text-black'>{book?.treatment}</td>
                <td className='bg-white text-black'>{book?.selectedDate}</td>
                <td className='bg-white text-black'>{book?.slot}</td>
                
                <td>
                  {
                    book.price && !book.paid &&
                    <td className='bg-white text-black'><Link to={`/dashboard/payment/${book?._id}`}><button className='btn btn-sm btn-primary'>Pay</button></Link></td>
                  }
                   {
                    book?.price && book?.paid &&
                    <td className='bg-white text-black'><button className='btn btn-sm btn-primary'>Paid</button></td>
                  }
                </td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointments;