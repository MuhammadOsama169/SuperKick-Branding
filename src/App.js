import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './Components/HomePage';
import ServicesPage from './Components/ServicesPage';
import ThirdPage from './Components/ThirdPage';
import FourthPage from './Components/FourthPage';
import ResourcePage from './Components/ResourcePage';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';


function App() {
  return (
    <>
    <Router>
    <Navbar/>
        <Routes>
          <Route exact path="/" element={<HomePage/>}></Route>
          <Route exact path="/services" element={<ServicesPage/>}></Route>
          <Route exact path="/who" element={<ThirdPage/>}></Route>
          <Route exact path="/contact" element={<FourthPage/>}></Route>
          <Route exact path="/resources" element={<ResourcePage/>}></Route>
        </Routes>
        <Footer/>
    </Router>

    </>
  );
}

export default App;
