import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoute(props) {
    // let auth = true;
    let auth = false;

    return (
        auth ? <Outlet /> : <Navigate to={"/Auth"} replace />
    );
}

export default PrivateRoute;