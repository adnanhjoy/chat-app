import React from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import { FaVideo } from 'react-icons/fa';
import { IoCall } from 'react-icons/io5';
import avatar from '../../assets/avatar.webp'

const ChatHead = ({ singleFriend, setSeeProfile, seeProfile }) => {
    const { name } = singleFriend || {}
    return (
        <div className='border-b p-2 flex items-center justify-between'>
            <div className='flex items-center gap-x-2'>
                <img className='h-10 rounded-full' src={avatar} alt="avatar" />
                <div>
                    <h3 className='font-medium'>{name}</h3>
                    <p className='text-xs text-dark'>Active Now</p>
                </div>
            </div>
            <div className='text-xl text-primary flex items-center gap-x-5'>
                <IoCall className='cursor-pointer' />
                <FaVideo className='cursor-pointer' />
                <button onClick={() => setSeeProfile(!seeProfile)}>
                    <BsInfoCircleFill className='cursor-pointer' />
                </button>
            </div>
        </div>
    );
};

export default ChatHead;