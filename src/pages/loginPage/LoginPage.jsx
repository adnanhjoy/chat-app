import React, { useEffect, useState } from 'react';
import { HiOutlineEye } from "react-icons/hi2";
import { HiOutlineEyeOff } from "react-icons/hi";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLoggedInMutation } from '../../redux/auth/authApi';


const LoginPage = () => {
    const [toggle, setToggle] = useState(false);
    const [userLogin, { isLoading, isSuccess, isError, error }] = useLoggedInMutation();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLoginAdmin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        const data = {
            email,
            password
        }
        userLogin(data)
    }

    useEffect(() => {
        if (isSuccess) {
            navigate(from, { replace: true })
        }
    }, [isSuccess])

    return (
        <div className='flex items-center justify-center h-screen'>
            <div className='md:w-80 mx-4 md:mx-0 py-10 px-5 rounded-b-md border border-primary rounded-t-3xl'>
                <h2 className='text-primary font-medium text-4xl text-center mb-5'>Login</h2>
                {
                    isError && <p className='text-red-800 text-center'>{error?.data?.message}</p>
                }
                <form onSubmit={handleLoginAdmin}>
                    <label className='text-white'>Email</label>
                    <input className='placeholder:text-xs mt-2 mb-5 outline-none border border-primary rounded-md p-2 w-full' type="email" name='email' placeholder='Email' />
                    <label className='text-white'>Password</label>
                    <div className='flex items-center bg-white mt-2 rounded-md border border-primary'>
                        <input className='placeholder:text-xs outline-none rounded-md px-2 w-full' name='password' type={toggle ? 'text' : 'password'} placeholder='Password' />
                        <button onClick={() => setToggle(!toggle)} type='button' className='p-3 bg-gray-300 rounded-r-md'>
                            {
                                toggle ? <HiOutlineEye /> : <HiOutlineEyeOff />
                            }
                        </button>
                    </div>


                    <div className='flex items-center justify-center mt-10'>
                        <button className='text-white font-medium bg-green-800 w-full py-3 rounded hover:bg-primary ease-in-out duration-500'>{isLoading ? 'Loading..' : 'Login'}</button>
                    </div>
                </form>

                <div className='flex items-center justify-center mt-4 gap-2'>
                    <p>Not a member ?</p>
                    <Link
                        className='text-primary hover:underline'
                        to='/signup'
                    >Signup Here</Link>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;