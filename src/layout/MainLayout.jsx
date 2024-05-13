import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../shared/Sidebar';

const MainLayout = () => {
    return (
        <div className='2xl:container'>
            <div className='grid grid-cols-4'>
                <div className='col-span-1'>
                    <Sidebar />
                </div>
                <div className='col-span-3'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default MainLayout;