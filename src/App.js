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

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/department' element={<Department />}/>
        <Route path='/docters' element={<Docters />}/>
        <Route path='/About' element={<About />}/>
        <Route path='/Contact' element={<Contact />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
