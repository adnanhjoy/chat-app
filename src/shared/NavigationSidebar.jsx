import React from 'react';
import { FaUserPlus, FaUsers } from 'react-icons/fa';
import { HiUsers } from 'react-icons/hi';
import { IoIosLogOut } from 'react-icons/io';
import { IoChatbubbleSharp } from 'react-icons/io5';
import { Link, useLocation } from 'react-router-dom';
import { userLoggedOut } from '../redux/auth/authSlice';
import { useDispatch } from 'react-redux';

const NavigationSidebar = () => {
    const { pathname } = useLocation();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(userLoggedOut())
    }

    return (
        <div className='flex flex-col items-center justify-center m-2'>


            <Link
                to='/'
                className={`${pathname !== '/friends/suggestions' && pathname !== '/friends/request' ? 'bg-green-100 my-1 text-primary' : 'hover:bg-green-100 my-1 hover:text-primary'} text-dark w-full flex items-center justify-center px-2 py-3 text-xl rounded-md`}>
                <IoChatbubbleSharp />
            </Link>


            <Link
                to='/friends/suggestions'
                className={`${pathname === '/friends/suggestions' ? 'bg-green-100 my-1 text-primary' : 'hover:bg-green-100 my-1 hover:text-primary'} text-dark w-full flex items-center justify-center px-2 py-3 text-xl rounded-md`}>
                <FaUserPlus />
            </Link>


            <Link
                to='/friends/request'
                className={`${pathname === '/friends/request' ? 'bg-green-100 my-1 text-primary' : 'hover:bg-green-100 my-1 hover:text-primary'} text-dark w-full flex items-center justify-center px-2 py-3 text-xl rounded-md`}>
                <HiUsers />
            </Link>

            <button
                onClick={handleLogout}
                className={`hover:bg-green-100 my-1 hover:text-primary text-dark w-full flex items-center justify-center px-2 py-3 text-xl rounded-md`}>
                <IoIosLogOut />
            </button>


        </div>
    );
};

export default NavigationSidebar;