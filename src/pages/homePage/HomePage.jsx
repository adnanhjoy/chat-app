import React from 'react';
import { IoChatbubblesOutline } from 'react-icons/io5';

const HomePage = () => {
    return (
        <div className='flex flex-col items-center justify-center h-full text-dark'>
            <IoChatbubblesOutline className='text-9xl' />
            <h1 className='text-xl font-semibold my-2'>Nothing Here</h1>
            <p className='uppercase text-sm'>There are no chats in your feed</p>
        </div>
    );
};

export default HomePage;