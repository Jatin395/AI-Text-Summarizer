import React, { useEffect } from 'react'
import prism from 'prismjs'
import Navbar from './components/Navbar';
import Home from './components/Home';
import { ToastContainer } from 'react-toastify';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Service from './components/Service';

export default function App() {

  useEffect(() => {
    prism.highlightAll();
  })

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/service' element={<Service/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>      
      <ToastContainer />
    </>
  )
}
