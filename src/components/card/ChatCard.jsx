import React from 'react';
import { NavLink } from 'react-router-dom';
import avatar from '../../assets/avatar.webp';

const ChatCard = ({ friend }) => {
    const { name, username } = friend || {};
    return (
        <NavLink
            to={username}
            className={({ isActive }) =>
                `flex items-center gap-x-2 cursor-pointer p-4 rounded-md ${isActive ? 'bg-gray-200' : 'hover:bg-gray-100'}`
            }
        >
            <img className='h-10 rounded-full' src={avatar} alt="avatar" />
            <div>
                <h3 className='font-medium'>{name}</h3>
                <p className='text-xs text-dark'>Hello Adnan How are you?</p>
            </div>
        </NavLink>
    );
};

export default ChatCard;
