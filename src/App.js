import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import Carousel from './components/Carousel';

function App() {



  return (

    <>
      <Router>

        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>


        <Products />
        <Carousel />
        <Footer />

      </Router>
    </>

  );
}

export default App;
