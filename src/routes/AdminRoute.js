import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Medicines from '../admin/container/Medicines/Medicines';
import Layout from '../admin/component/Layout/Layout'

function AdminRoute(props) {
    return (
        <div>
            <Layout>
                <Routes>
                    <Route exact path='/medicines' element={<Medicines />} />
                </Routes>
            </Layout>
        </div>
    );
}

export default AdminRoute;