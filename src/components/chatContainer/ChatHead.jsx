import React from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import { FaVideo } from 'react-icons/fa';
import { IoCall } from 'react-icons/io5';

const ChatHead = () => {
    return (
        <div className='border-b p-2 flex items-center justify-between'>
            <div className='flex items-center gap-x-2'>
                <img className='h-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSScRRIBGaB2SXFbYoR8uS9UGFPBOsqzP21NqiF7QSKcg&s" alt="avatar" />
                <div>
                    <h3 className='font-medium'>Adnan Hossain</h3>
                    <p className='text-xs text-dark'>Active Now</p>
                </div>
            </div>
            <div className='text-xl text-primary flex items-center gap-x-5'>
                <IoCall className='cursor-pointer' />
                <FaVideo className='cursor-pointer' />
                <BsInfoCircleFill className='cursor-pointer' />
            </div>
        </div>
    );
};

export default ChatHead;