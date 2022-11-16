import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const Login = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/'
    const { signIn, googleSignIn } = useContext(AuthContext)
    const { register, formState: { errors }, handleSubmit } = useForm();
    const handleLogin = data => {
        console.log(data)
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error))
    }

    const handleGoogle = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error))
    }
    return (
        <div className='h-[800px] flex justify-center items-center rounded-xl'>
            <div>
                <div className='border  p-5 rounded-xl shadow-2xl'>
                    <h2 className='text-xl font-semibold text-center'>Login</h2>
                    <form onSubmit={handleSubmit(handleLogin)}>
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
                            <input {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: "pasword must be 6 characters or longer" }

                            })} type="password" name='password' placeholder="Enter password" className="input input-bordered w-full" />
                            {errors.password && <p className="text-red-600">{errors.password?.message}</p>}
                            <label className="label">
                                <span className="">Forget password ?</span>
                            </label>
                        </div>
                        <div className='form-control w-full'>
                            <button className='btn '>Login</button>
                            <p className='mt-3'>New to doctors portal ? <Link to='/register'><span className='text-[#19D3AE] hover:underline'> Create New Account</span></Link> </p>
                        </div>
                        <div className="divider">OR</div>
                    </form>
                    <div className='w-full '>
                        <button onClick={handleGoogle} className='btn btn-outline btn-primary md:w-[450px]'>Sign In With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;