
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from "./About";
import Hotel from "./Hotel";
import Salon from "./Salon";
import Home from "./Home";
import './App.css';

import Navbar from './Navbar';

function App() {
  return (<div><Router>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/home" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/hotel" element={<Hotel/>}/>
    <Route path="/salon" element={<Salon/>}/>
  </Routes>
    </Router>
    </div>
  );
}

export default App;
