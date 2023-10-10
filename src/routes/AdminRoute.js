import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Medicines from '../admin/container/Medicines/Medicines';
import Doctors from '../admin/container/Doctors/Doctors'
import Layout from '../admin/component/Layout/Layout'
import PrivateRoute from './PrivateRoute';

function AdminRoute(props) {
    return (
        <div>
            <Layout>
                <Routes element={<PrivateRoute />}>
                    <Route exact path='/medicines' element={<Medicines />} />
                    <Route exact path='/doctors' element={<Doctors /> } />
                </Routes>
            </Layout>
        </div>
    );
}

export default AdminRoute;