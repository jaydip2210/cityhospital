import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './container/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Department from './container/Department/Department';
import Docters from './container/Docters/Docters';
import About from './container/About/About';
import Contact from './container/Contact/Contact';
import Appointment from './container/Appointment/Appointment';
import Auth from './container/Auth/Auth';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/department' element={<Department />}/>
        <Route exact path='/docters' element={<Docters />}/>
        <Route exact path='/About' element={<About />}/>
        <Route exact path='/Contact' element={<Contact />}/>
        <Route exact path='/Appointment' element={<Appointment />}/>
        <Route exact path='/Auth' element={<Auth />}/>       
      </Routes>
      <Footer />
    </>
  );
}

export default App;
