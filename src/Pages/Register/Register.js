import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const Register = () => {
    const navigate = useNavigate();
    const { createUser, googleSignIn, updateUser } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signUpError, setSignUpError] = useState('');
    const handleRegister = data => {
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                const userInfo = {
                    displayName: data.name
                }
                console.log(userInfo)
                updateUser(userInfo)
                    .then(() => {
                        navigate('/')
                    })
                    .catch(error => {
                        console.log(error)
                        setSignUpError(error.message)
                    })

            })
            .catch(error => console.error(error))

    }


    const handleGoogle = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user)
                alert('user update successfully')
                navigate('/')
            })
            .catch(error => console.error(error))
    }
    return (
        <div className='h-[800px] flex justify-center items-center rounded-xl'>
            <div>
                <div className='border  p-5 rounded-xl shadow-2xl'>
                    <h2 className='text-xl font-semibold text-center'>Sign UP</h2>
                    <form onSubmit={handleSubmit(handleRegister)}>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="">Name</span>
                            </label>
                            <input {...register("name", { required: "Name is required" })} type="text" placeholder="Enter Name" className="input input-bordered md:w-[450px] " />
                            {errors.name && <p className="text-red-600">{errors.name?.message}</p>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="">Email</span>
                            </label>
                            <input {...register("email", { required: "Email Address is required" })} type="email" placeholder="Enter Email" className="input input-bordered md:w-[450px] " />
                            {errors.email && <p className="text-red-600">{errors.email?.message}</p>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="">Password</span>
                            </label>
                            <input  {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: "pasword must be 6 characters or longer" }

                            })} type="password" name='password' placeholder="Enter password" className="input input-bordered w-full" />
                            {errors.password && <p className="text-red-600">{errors.password?.message}</p>}
                            <p className="text-red-600">{signUpError}</p>
                        </div>
                        <div className='form-control w-full mt-5'>
                            <button className='btn '>Sign Up</button>
                            <p className='mt-3'>Already Have an account ? <Link to='/login'><span className='text-[#19D3AE] hover:underline'> Please login</span></Link> </p>
                        </div>
                        <div className="divider">OR</div>

                    </form>
                    <div className='form-control w-full'>
                        <button onClick={handleGoogle} className='btn btn-outline btn-primary'>Sign In With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;