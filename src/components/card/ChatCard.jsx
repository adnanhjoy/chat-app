import React from 'react';

const ChatCard = () => {
    return (
        <div className='flex items-center gap-x-2 hover:bg-gray-100 cursor-pointer p-4 rounded-md border'>
            <img className='h-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSScRRIBGaB2SXFbYoR8uS9UGFPBOsqzP21NqiF7QSKcg&s" alt="avatar" />
            <div>
                <h3 className='font-medium'>Adnan Hossain</h3>
                <p className='text-xs text-dark'>Hello Adnan How are you?</p>
            </div>
        </div>
    );
};

export default ChatCard;