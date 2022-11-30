import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllUsers = () => {


    const {data: users=[], refetch, isLoading}=useQuery({
        queryKey:['users'],
        queryFn:async()=>{
            const res= await fetch('https://doctors-portal-server-ruby-one.vercel.app/users',{
                headers:{
                    authorization :`bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data= await res.json();
            return data
        }

    });
    if(isLoading){
        return <progress className="progress w-56 flex justify-center items-center"></progress>  
  }

    const handleMakeAdmin=(id)=>{
        fetch(`https://doctors-portal-server-ruby-one.vercel.app/users/admin/${id}`, {
            method: 'PATCH',
            headers:{
                authorization:`bearer ${localStorage.getItem('accessToken')}`
            }
            
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount>0){
                alert('Make Admin Successfully')
                refetch()
            }
        })
    }
    return (
        <div>
            ALl Users
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, i)=> <tr key={user?._id}>
                                <th>{i+1}</th>
                                <td>{user?.name}</td>
                                <td>{user?.email}</td>
                                <td>{user?.role !== 'admin' && <button onClick={()=>handleMakeAdmin(user?._id)} className='btn btn-sm btn-primary'>Make Admin</button>}</td>
                                <td><button className='btn btn-sm btn-error'>delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;