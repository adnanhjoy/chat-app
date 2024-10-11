import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../shared/Sidebar';
import NavigationSidebar from '../shared/NavigationSidebar';
import ChatProfile from '../components/profile/ChatProfile';

const MainLayout = () => {
    return (
        <div className='2xl:container 2xl:mx-auto min-h-screen'>
            <div className='grid grid-cols-10 gap-2'>

                {/* Navigation Sidebar */}
                <div className='col-span-3 grid grid-cols-6 h-screen'>
                    <div className='col-span-1'>
                        <NavigationSidebar />
                    </div>
                    <div className='col-span-5 overflow-y-auto py-2 h-full'>
                        <Sidebar />
                    </div>
                </div>

                {/* Chat Container Outlet */}
                <div className='col-span-7 h-screen overflow-hidden'>
                    <Outlet />
                </div>

                {/* Chat Profile */}
                {/* <div className='col-span-2 h-full py-2 pr-2'>
                    <ChatProfile />
                </div> */}
            </div>
        </div>
    );
};

export default MainLayout;
