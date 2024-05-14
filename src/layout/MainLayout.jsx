import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../shared/Sidebar';
import NavigationSidebar from '../shared/NavigationSidebar';

const MainLayout = () => {
    return (
        <div className='2xl:container 2xl:mx-auto'>
            <div className='grid grid-cols-7'>
                <div className='col-span-2 grid grid-cols-6'>
                    <div className='col-span-1'>
                        <NavigationSidebar />
                    </div>
                    <div className='col-span-5'>
                        <Sidebar />
                    </div>
                </div>
                <div className='col-span-5'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default MainLayout;