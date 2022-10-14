import Navbar from './Components/Navbar';
import Cover from './Components/Cover';
import Section1 from './Components/Section1';
import Section2 from './Components/Section2';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyles from './Components/Styles/Global'
import Banner from './Components/Banner';
import Section3 from './Components/Section3';
import Footer from './Components/Footer';
import SectionBreak from './Components/SectionBreak';
import Quotes from './Components/Quotes'



function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Cover/>
      <Section1/>
      <SectionBreak />
      <Section2/>
      <Quotes/>
      <Banner/>
      <Section3/>
      <Footer/>
    </>
  );
}

export default App;
