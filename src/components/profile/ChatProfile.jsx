import React from 'react';

const ChatProfile = () => {
    return (
        <div className='bg-white p-2 border rounded-lg h-full'>
            <div className='flex flex-col items-center mt-10'>
                <img className='h-20 w-20 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSScRRIBGaB2SXFbYoR8uS9UGFPBOsqzP21NqiF7QSKcg&s" alt="avatar" />
                <h3 className='font-medium'>Adnan Hossain</h3>
                <p className='text-xs text-dark'>Active Now</p>
            </div>
        </div>
    );
};

export default ChatProfile;