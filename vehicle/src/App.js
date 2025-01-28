import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HorizontalNavbar from './Components/HorizontalNavbar';
import Sidebar from './Components/Sidebar';
import Home from './Components/Home';
import About from './Components/About';
import Registration from './Components/Registration';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Login from './Components/Login';
import Welcome from './Components/Welcome';
import Configure from './Components/Configure';
import './App.css';
import VehicleDetails from './Components/Vehicledetails';

function App() {
  const [email, setEmail] = useState(null);  

  return (
    <Router>
      <div className="App">
        <Header email={email} /> 
        <HorizontalNavbar /> 
        <Sidebar /> 
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login setEmail={setEmail} />} /> 
            <Route path="/welcome" element={<Welcome email={email} />} /> 
            <Route path="/configure" element={<Configure />} />
            <Route path="/vehicle-details" element={<VehicleDetails/>}/>
          </Routes>
        </div>
        <Footer />  {/* Footer at the bottom */}
      </div>
    </Router>
  );
}

export default App;
