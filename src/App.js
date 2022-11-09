import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './Components/HomePage';
import SecondPage from './Components/SecondPage';
import ThirdPage from './Components/ThirdPage';
import FourthPage from './Components/FourthPage';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';


function App() {
  return (
    <>
    <Router>
    <Navbar/>
        <Routes>
          <Route exact path="/" element={<HomePage/>}></Route>
          <Route exact path="/services" element={<SecondPage/>}></Route>
          <Route exact path="/who" element={<ThirdPage/>}></Route>
          <Route exact path="/contact" element={<FourthPage/>}></Route>
        </Routes>
        <Footer/>
    </Router>

    </>
  );
}

export default App;
