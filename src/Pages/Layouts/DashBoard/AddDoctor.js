import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';


const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const imageHostKey=process.env.REACT_APP_IMGBB_KEY ;
    const navigate=useNavigate()

    const handleAddDoctor = data => {
        console.log(data)
        const image=data.image[0];
        const formdata=new FormData();
        formdata.append('image', image)
        const url=`https://api.imgbb.com/1/upload?key=${imageHostKey}`

        fetch(url, {
            method: 'POST',
            body:formdata
        })
        .then(res=>res.json())
        .then(imgData=>{
            console.log(imgData)
            if(imgData.success){
            const imgURL= imgData.data.url

            const doctor={
                name: data.name,
                email: data.email,
                speciality: data.speciality,
                img: imgURL
            }

            fetch('http://localhost:5000/dashboard/adddoctor',{
                method:"POST",
                headers: {
                    'content-type': 'application/json',
                    authorization:`bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(doctor)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.acknowledged){
                    alert('Doctor Added Successfully')
                    navigate('/dashboard/managedoctor')
                }
            })

            }
        })
        
    }

    const {data:appoinmentspeciality=[]} = useQuery({
        queryKey: ['appoinmentspeciality'],
        queryFn:async()=>{
            const res=await fetch('http://localhost:5000/appoinmentspeciality');
            const data= await res.json();
            return data
        }
    })
    return (
        <div>
            <div>
                <h1 className="text-4xl">Add a New Doctor</h1>
            </div>
            <div>
                <form onSubmit={handleSubmit(handleAddDoctor)}>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="">Name</span>
                        </label>
                        <input {...register("name", { required: "Name  is required" })} type="text" placeholder="Enter Name" className="input input-bordered md:w-[450px] " />
                        {errors.name && <p className="text-red-600">{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="">Email</span>
                        </label>
                        <input {...register("email", { required: "Email Address is required" })} type="email" placeholder="Enter Email" className="input input-bordered md:w-[450px] " />
                        {errors.email && <p className="text-red-600">{errors.email?.message}</p>}
                    </div>
                    
                    <div className="form-control w-full mt-5">
                        <select {...register("speciality", { required: "speciality  is required" })} className="select select-bordered w-full md:w-[450px] mb-5">
                            {
                                appoinmentspeciality?.map(option=><option
                                key={option?._id}
                                >{option?.name}</option>)
                            }
                            
                        </select>
                    </div>
                    <div className="form-control w-full mb-5">
                        <label className="label">
                            <span className="">Photo</span>
                        </label>
                        <input {...register("image", { required: "Image  is required" })} type="file" placeholder="Enter Photo" className="input input-bordered md:w-[450px]  p-10" />
                        {errors.image && <p className="text-red-600">{errors.image?.message}</p>}
                    </div>
                    <div className='form-control w-full'>
                        <button className='btn md:w-[450px]'>Add</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;