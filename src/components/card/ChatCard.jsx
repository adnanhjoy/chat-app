import React from 'react';
import { Link } from 'react-router-dom';

const ChatCard = () => {
    return (
        <Link 
        to={25490914037190220}
        className='flex items-center gap-x-2 hover:bg-gray-100 cursor-pointer p-4 rounded-md'
        >
            <img className='h-10 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSScRRIBGaB2SXFbYoR8uS9UGFPBOsqzP21NqiF7QSKcg&s" alt="avatar" />
            <div>
                <h3 className='font-medium'>Adnan Hossain</h3>
                <p className='text-xs text-dark'>Hello Adnan How are you?</p>
            </div>
        </Link>
    );
};

export default ChatCard;