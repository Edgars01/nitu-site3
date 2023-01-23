import React, { useState } from 'react';
import { Navbar } from './components/Navbar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

function App() {

  const {click, setClick} = useState(false)

  return (
   
    <>
      <Router>
        <Navbar />
          <Routes>
            <Route path='/' exact />
          </Routes>
      </Router>
    </>
    
  );
}

export default App;
