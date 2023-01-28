import React, { useState } from 'react';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Products from './components/pages/Products';

import Carousel from './components/pages/Carousel';
import { CarouselData } from './components/CarouselData';

function App() {

  return (

    <>
      <Router>

        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>

        <Products />

        
        <Carousel slides={CarouselData} />
        <Footer />

      </Router>
    </>

  );
}

export default App;
