import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './Components/HomePage';
import SecondPage from './Components/SecondPage';



function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<HomePage/>}></Route>
          <Route exact path="/services" element={<SecondPage/>}></Route>
        </Routes>
    </Router>
  );
}

export default App;
