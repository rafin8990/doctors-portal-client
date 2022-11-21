
import { useQuery } from '@tanstack/react-query';
import React from 'react';


const ManageDoctors = () => {
   


    const {data:doctors=[],}=useQuery({
        queryKey:['doctors'],
        queryFn:async()=>{
            const res= await fetch('http://localhost:5000/doctors');
            const data=await res.json();
            return data;
        }
    })

    return (
        <div>
            <h1 className="text-4xl">Manage A Doctor</h1>
            <div className='mt-5'>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Avater</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Speciality</th>
                                <th>Action</th>
                                <th>Pay</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                doctors?.map((doctor, i) => <tr key={doctor?._id}>
                                    <th>{i+1}</th>
                                    <td><img className="mask mask-circle w-20" src={doctor.img} alt="" /></td>
                                    <td>{doctor.name}</td>
                                    <td>{doctor.email}</td>
                                    <td>{doctor.speciality}</td>
                                    <td><button className='btn btn-sm bg-red-500'>Delete</button></td>
                                    <td><button className='btn btn-sm bg-green-500'>Pay</button></td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageDoctors;