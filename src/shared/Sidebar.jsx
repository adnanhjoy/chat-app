import React from 'react';
import { IoIosSearch } from 'react-icons/io';
import ChatCard from '../components/card/ChatCard';

const Sidebar = () => {
    return (
        <div className='bg-white p-2 border-x min-h-screen'>
            <div>
                <h1 className='text-2xl font-medium mb-2'>Chat</h1>
                <form className='flex items-center justify-between border rounded-full'>
                    <input type="text" className='w-full rounded-full outline-none py-2 px-4 placeholder:text-sm placeholder:font-light' placeholder='Search your partner' />
                    <IoIosSearch className='text-2xl text-dark mr-2' />
                </form>
            </div>
            <div className='overflow-y-auto h-[84vh] space-y-1 mt-1'>
                {
                    Array(20).fill().map((_, idx) =>
                        <ChatCard
                            key={idx}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default Sidebar;