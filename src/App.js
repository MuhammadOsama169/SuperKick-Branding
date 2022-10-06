import Navbar from './Components/Navbar';
import Cover from './Components/Cover';
import Section1 from './Components/Section1';
import Section2 from './Components/Section2';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyles from './Components/Styles/Global'
import Banner from './Components/Banner';
import Section3 from './Components/Section3';
import Footer from './Components/Footer';



function App() {
  return (
    <Router>
      <>
      <GlobalStyles />
      <Navbar />
      <Cover/>
      <Section1/>
      <Section2/>
      <Banner/>
      <Section3/>
      <Footer/>
      </>
      <Routes>
        <Route path="/" />
        <Route path="/products" />
        <Route path="/contact" />
        <Route path="/about" />
      </Routes>
    </Router>
  );
}

export default App;
