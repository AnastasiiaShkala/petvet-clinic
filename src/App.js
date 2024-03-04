
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from "./About";
import Hotel from "./Hotel";
import Salon from "./Salon";
import Home from "./Home";
import './App.css';
import img from './assets/icons8-veterinary.png';

function App() {
  return (<div><Router>
    <nav className='navbar'>
  <div className="logo">
    <img src={img} alt="Logo"/>
    <div className="logo-text">
    <span className='petvet'>PetVet</span>
    <span className='clinic'>Clinic</span>
    </div>
    <div className="logo-address">
    <span className='address'>9090 Blueberry Ave, Vancouver</span>
    <span className='address'>(905) 1717-1771</span> 
    </div>
  </div>

  <div className="menu">
    <Link to="/home" className='link menu-link'>Home</Link>
    <Link to="/about" className='link menu-link'>About Us</Link>
    <Link to="/hotel" className='link menu-link'>Pet Hotel</Link>
    <Link to="/salon" className='link menu-link'>Grooming Salon</Link>
  </div>
</nav>
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
