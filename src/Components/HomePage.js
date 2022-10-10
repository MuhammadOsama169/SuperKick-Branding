import React from 'react'
import Global from './Styles/Global'
import Navbar from './Navbar';
import Cover from './Cover';
import Section1 from './ThirdMessage';
import Section2 from './Section2';
import Banner from './Banner';
import Section3 from './Section3'
import Footer from './Footer';

function HomePage() {
  return (
    <>
        <Global />
        <Navbar />
        <Cover/>
        <Section1/>
        <Section2/>
        <Banner/>
        <Section3/>
        <Footer/>
    </>

  );
}

export default HomePage;