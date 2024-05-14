import React from 'react';
import { FaUserPlus, FaUsers } from 'react-icons/fa';
import { HiUsers } from 'react-icons/hi';
import { IoChatbubbleSharp } from 'react-icons/io5';

const NavigationSidebar = () => {
    return (
        <div className='flex flex-col items-center justify-center m-2'>
            <button className='bg-green-100 my-1 text-primary w-full flex items-center justify-center px-2 py-3 text-xl rounded-md'>
                <IoChatbubbleSharp />
            </button>
            <button className='hover:bg-green-100 my-1 hover:text-primary text-dark w-full flex items-center justify-center px-2 py-3 text-xl rounded-md'>
                <FaUserPlus />
            </button>
            <button className='hover:bg-green-100 my-1 hover:text-primary text-dark w-full flex items-center justify-center px-2 py-3 text-xl rounded-md'>
                <HiUsers />
            </button>
        </div>
    );
};

export default NavigationSidebar;