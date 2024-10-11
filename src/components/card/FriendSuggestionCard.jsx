import React from 'react';
import avatar from '../../assets/avatar.webp'

const FriendSuggestionCard = ({ user }) => {
    const { name } = user || {};
    return (
        <div className='border rounded-md'  >
            <img className='w-full' src={avatar} alt="avatar" />
            <div className='p-1'>
                <h3 className='font-medium text-center my-2'>{name}</h3>
                <button className='bg-primary hover:bg-green-500 text-white text-sm w-full rounded py-2'>Add Friend</button>
            </div>
        </div>
    );
};

export default FriendSuggestionCard;