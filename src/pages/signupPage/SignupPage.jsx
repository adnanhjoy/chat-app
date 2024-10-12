import React, { useState } from 'react';
import { HiOutlineEyeOff } from 'react-icons/hi';
import { HiOutlineEye } from 'react-icons/hi2';
import { IoChatbubblesOutline } from 'react-icons/io5';
import { VscCoffee } from 'react-icons/vsc';
import { Link } from 'react-router-dom';

const SignupPage = () => {
    const [toggle, setToggle] = useState(false);

    const handleSignup = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const username = e.target.username.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        const data = {
            name,
            username,
            email,
            password
        }
        console.log(data)
    }


    return (
        <div className='h-screen flex items-center justify-center cover-bg px-4 md:px-0'>
            <div className='md:flex md:w-[50rem] container mx-auto rounded-md shadow bg-white'>
                {/* Left Section */}
                <div className='bg-primary md:w-1/2 flex items-center justify-center text-white rounded-t-md md:rounded-t-none md:rounded-l-md min-h-full rounded-b-[20%] md:rounded-b-none'>
                    <div className='flex flex-col items-center justify-center py-10'>
                        <IoChatbubblesOutline className='text-6xl' />
                        <h1 className='text-2xl font-bold'>Joy Chat</h1>
                        <p className='my-10 text-center hidden md:block'>Share Your Smile with <br /> this world and Find Friends</p>
                        <VscCoffee className='text-6xl hidden md:block' />
                    </div>
                </div>

                {/* Right Section */}
                <div className='md:w-1/2 bg-white p-5 flex items-center justify-center rounded-b-md md:rounded-r-md'>
                    <div className='w-full'>
                        <h2 className='text-primary font-medium text-4xl text-center mb-5'>Signup</h2>
                        <form onSubmit={handleSignup}>
                            <input className='placeholder:text-xs mb-2 outline-none border rounded-md p-2 w-full' type="text" name='name' placeholder='Name' />
                            <input className='placeholder:text-xs mb-2 outline-none border rounded-md p-2 w-full' type="text" name='username' placeholder='Username' />
                            <input className='placeholder:text-xs mb-2 outline-none border rounded-md p-2 w-full' type="email" name='email' placeholder='Email' />
                            <div className='flex items-center bg-white rounded-md border'>
                                <input className='placeholder:text-xs outline-none rounded-md px-2 w-full' name='password' type={toggle ? 'text' : 'password'} placeholder='Password' />
                                <button onClick={() => setToggle(!toggle)} type='button' className='p-3 bg-gray-300 rounded-r-md'>
                                    {toggle ? <HiOutlineEye /> : <HiOutlineEyeOff />}
                                </button>
                            </div>

                            <div className='flex items-center justify-center mt-10'>
                                <button className='text-white font-medium bg-green-800 w-full py-3 rounded hover:bg-primary ease-in-out duration-500'>Signup</button>
                            </div>
                        </form>

                        <div className='flex items-center justify-center mt-4 gap-2'>
                            <p>Already have an account?</p>
                            <Link className='text-primary hover:underline' to='/login'>Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SignupPage;