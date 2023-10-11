import React, { useState } from 'react';
import '../App.css';
import Home from '../container/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Department from '../container/Department/Department';
import Docters from '../container/Docters/Docters';
import About from '../container/About/About';
import Contact from '../container/Contact/Contact';
import Appointment from '../container/Appointment/Appointment';
import Auth from '../container/Auth/Auth';
import PrivateRoute from './PrivateRoute';
import Dept from '../container/Department/Dept';
import ReviewDetails from '../container/Home/ReviewDetails';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Medicines from '../container/Medicines/Medicines';
import MedicineData from '../container/Medicines/MedicineData'

function UserRoute(props) {
    const [countCart, setCountCart] = useState(0);
    const [fav, setFav] = useState([]);
    return (
        <>
            <Header countCart={countCart} fav={fav} />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/department' element={<Department />} />
                <Route exact path='/department/:id' element={<Dept />} />
                <Route exact path='/docters' element={<Docters />} />
                <Route exact path='/medicines' element={<Medicines fav={fav} setFav={setFav} increment={setCountCart} />} />
                <Route exact path='/medicineslist/:id' element={<MedicineData />} />
                <Route exact path='/About' element={<About />} />
                <Route exact path='/Contact' element={<Contact />} />
                <Route exact path='/review-details/:id' element={<ReviewDetails />} />
                {/* <Route element={<PrivateRoute />}> */}
                    <Route exact path='/Appointment' element={<Appointment />} />
                {/* </Route> */}

                <Route exact path='/Auth' element={<Auth />} />
            </Routes>
            <Footer />
        </>
    );
}

export default UserRoute;