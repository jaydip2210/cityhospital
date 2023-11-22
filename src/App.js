import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import UserRoute from './routes/UserRoute';
import AdminRoute from './routes/AdminRoute';
import PrivateRoute from './routes/PrivateRoute';
import { Provider } from 'react-redux';
import { configureStore } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from './context/theme.context';
// import Home from './container/Home/Home';
// import { Route, Routes } from 'react-router-dom';
// import Department from './container/Department/Department';
// import Docters from './container/Docters/Docters';
// import About from './container/About/About';
// import Contact from './container/Contact/Contact';
// import Appointment from './container/Appointment/Appointment';
// import Auth from './container/Auth/Auth';
// import Test from './components/Ui/Card/Test';

function App() {
  const { store, persistor } = configureStore();
  return (
    <>
      {/* <Header /> */}
      {/* <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/department' element={<Department />}/>
        <Route exact path='/docters' element={<Docters />}/>
        <Route exact path='/About' element={<About />}/>
        <Route exact path='/Contact' element={<Contact />}/>
        <Route exact path='/Appointment' element={<Appointment />}/>
        <Route exact path='/Auth' element={<Auth />}/>       
      </Routes> */}
      <ThemeProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Routes>
              <Route path='/*' element={<UserRoute />} />
              {/* <Route path='/admin/*' element={<AdminRoute />} /> */}
              {/* <Route element={<PrivateRoute />}> */}
              <Route path='/admin/*' element={<AdminRoute />} />
              {/* </Route> */}
            </Routes>
          </PersistGate>
        </Provider>
      </ThemeProvider>
      {/* <Footer /> */}
      {/* <Test /> */}
    </>
  );
}

export default App;
