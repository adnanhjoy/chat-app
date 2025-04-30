import React from 'react';
import avatar from '../../assets/avatar.webp'

const ChatProfile = ({ singleFriend }) => {
    const { name } = singleFriend || {}
    return (
        <div className='bg-white p-2 border rounded-lg h-full'>
            <div className='flex flex-col items-center mt-10'>
                <div className='relative'>
                    <img className='h-20 w-20 rounded-full' src={avatar} alt="avatar" />
                    <p className='bg-primary h-3 w-3 rounded-full absolute right-1.5 bottom-1.5'></p>
                </div>
                <h3 className='font-medium'>{name}</h3>
                <p className='text-xs text-dark'>Active Now</p>
            </div>
        </div>
    );
};

export default ChatProfile;