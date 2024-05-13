import React from 'react';
import { IoIosSearch } from 'react-icons/io';

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
            <div className='overflow-y-auto h-[84vh]'>
                {
                    Array(20).fill().map((_, idx) =>
                        <div className='flex items-center gap-x-2 hover:bg-gray-100 cursor-pointer p-4 rounded-md'>
                            <img className='h-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSScRRIBGaB2SXFbYoR8uS9UGFPBOsqzP21NqiF7QSKcg&s" alt="avatar" />
                            <div>
                                <h3 className='font-medium'>Adnan Hossain</h3>
                                <p className='text-xs text-dark'>Hello Adnan How are you?</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Sidebar;