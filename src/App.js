import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Products from './components/pages/Products';


function App() {

  

  return (
   
    <>
      <Router>

        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          
        </Routes>


      </Router>
      <Products />
    </>
    
  );
}

export default App;
