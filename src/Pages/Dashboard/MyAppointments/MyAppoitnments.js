import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const MyAppointments = () => {

  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/bookings?email=${user?.email}`

  const { data: bookings = [] } = useQuery({
    queryKey: ['bookings', user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
      })
      const data = await res.json()
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
              <th></th>
              <th>Name</th>
              <th>Treatment</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {
              bookings.map((book, i) => <tr key={book._id}>
                <th>{i + 1}</th>
                <td>{book?.patient}</td>
                <td>{book.treatment}</td>
                <td>{book.selectedDate}</td>
                <td>{book.slot}</td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointments;