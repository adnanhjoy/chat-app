import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../shared/Sidebar';
import NavigationSidebar from '../shared/NavigationSidebar';
import ChatProfile from '../components/profile/ChatProfile';

const MainLayout = () => {
    return (
        <div className='2xl:container 2xl:mx-auto'>
            <div className='grid grid-cols-10'>

                {/* Navigation Sidebar  */}
                <div className='col-span-3 grid grid-cols-6'>
                    <div className='col-span-1'>
                        <NavigationSidebar />
                    </div>
                    <div className='col-span-5'>
                        <Sidebar />
                    </div>
                </div>

                {/* Chat Container Outlet  */}
                <div className='col-span-5'>
                    <Outlet />
                </div>

                {/* Chat Profile  */}
                <div className='col-span-2'>
                    <ChatProfile />
                </div>
            </div>
        </div>
    );
};

export default MainLayout;