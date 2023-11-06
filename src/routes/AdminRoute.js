import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Medicines from '../admin/container/Medicines/Medicines';
import Doctors from '../admin/container/Doctors/Doctors'
import Layout from '../admin/component/Layout/Layout'
import PrivateRoute from './PrivateRoute';
import Todo from '../admin/container/Test/TodoList';

function AdminRoute(props) {
    return (
        <div>
            <Layout>
                <Routes element={<PrivateRoute />}>
                    <Route exact path='/medicines' element={<Medicines />} />
                    <Route exact path='/doctors' element={<Doctors /> } />
                    <Route exact path='/test' element={<Todo />} />
                </Routes>
            </Layout>
        </div>
    );
}

export default AdminRoute;