import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import AboutUs from './pages/AboutUs';
import Oferta from './pages/oferta';
import Rezerwacja from './pages/rezerwacja';
import Contact from './pages/contact';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/oferta' exact element={<Oferta/>} />
        <Route path='/rezerwacaja' exact element={<Rezerwacja/>} />
        <Route path='/about' exact element={<AboutUs/>} />
        <Route path='/contact-us' exact element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;