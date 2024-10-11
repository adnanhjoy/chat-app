import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { auth } = useSelector(state => state) || {};

    if (auth?.accessToken) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace />;
};


export default PrivateRoute;