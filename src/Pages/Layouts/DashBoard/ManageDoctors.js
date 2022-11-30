
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import ConfirmationModal from '../../Shered/ConfirmationModal';


const ManageDoctors = () => {

const [deletingDoctor, setDeletingDoctor]=useState(null)
const closeModal=()=>{
    setDeletingDoctor(null)
}

    const { data: doctors = [], refetch, isLoading} = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            const res = await fetch('https://doctors-portal-server-ruby-one.vercel.app/doctors',{
                method:'GET',
                headers:{
                    authorization :`bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            console.log(data)
            return data;
        }
    });
    if(isLoading){
        <progress className="progress w-56"></progress>
    }

    const handleDeleteDoctor=doctor=>{
        fetch(`https://doctors-portal-server-ruby-one.vercel.app/doctors/${doctor?._id}`, {
            method:'DELETE',
            headers:{
                authorization :`bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.acknowledged){
                alert('Doctor Delete Successfully')
                refetch()
                setDeletingDoctor(null);
            }
        })
    }

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
                            </tr>
                        </thead>
                        <tbody>
                            {
                                doctors?.map((doctor, i) => <tr key={doctor?._id}>
                                    <th>{i + 1}</th>
                                    <td><img className="mask mask-circle w-20" src={doctor.img} alt="" /></td>
                                    <td>{doctor.name}</td>
                                    <td>{doctor.email}</td>
                                    <td>{doctor.speciality}</td>
                                    <td>
                                        <label onClick={()=>setDeletingDoctor(doctor)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
                                    </td>
                                   
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
                {
                    deletingDoctor && <ConfirmationModal
                    title={`Are you sure You want to delete ${deletingDoctor?.name}`}
                    deiscription={`If You delete ${deletingDoctor?.name}. It can not be undone`}
                    closeModal={closeModal}
                    modalData={deletingDoctor}
                    successButtonName='Confirm'
                    successAction={handleDeleteDoctor}
                    ></ConfirmationModal>
                }
            </div>
        </div>
    );
};

export default ManageDoctors;