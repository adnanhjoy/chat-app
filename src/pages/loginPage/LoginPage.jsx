import React, { useEffect, useState } from 'react';
import { HiOutlineEye } from "react-icons/hi2";
import { HiOutlineEyeOff } from "react-icons/hi";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLoggedInMutation } from '../../redux/auth/authApi';
import { IoChatbubblesOutline } from 'react-icons/io5';


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
        <div className='flex items-center justify-center h-screen cover-bg'>
            <div className='md:w-96 w-full mx-4 md:mx-0 border bg-white pb-4 shadow rounded-md'>
                <div className='flex flex-col items-center justify-center bg-primary rounded-t-md text-white py-10 rounded-b-[20%]'>
                    <IoChatbubblesOutline className='text-6xl' />
                    <h2 className='text-white font-medium text-4xl text-center my-2'>Login</h2>
                    <h1 className='uppercase font-medium'>Welcome to Joy Chat</h1>
                </div>
                {
                    isError && <p className='text-red-800 text-sm mt-2 text-center'>{error?.data?.error}</p>
                }
                <form onSubmit={handleLoginAdmin} className='p-4'>
                    <input className='placeholder:text-xs mt-2 outline-none border rounded-md p-2 w-full' type="email" name='email' placeholder='Email' />
                    <div className='flex items-center bg-white mt-2 rounded-md border'>
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