import React from 'react'
import Navbar from './Navbar';
import Cover from './Cover';
import Section1 from './Section1';
import Section2 from './Section2';
import GlobalStyles from './Styles/Global'
import Banner from './Banner';
import Section3 from './Section3';
import Footer from './Footer';
import SectionBreak from './SectionBreak';
import Quotes from './Quotes';

function HomePage() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Cover/>
      <Section1/>
      <SectionBreak></SectionBreak>
      <Section2/>
      <Quotes/>
      <Banner/>
      <Section3/>
      <Footer/>
      </>
  );
}

export default HomePage;