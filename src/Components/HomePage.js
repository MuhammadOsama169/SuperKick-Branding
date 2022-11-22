import React from 'react';
import Cover from './HomePage/Cover';
import Section1 from './HomePage/Section1';
import Section2 from './HomePage/Section2';
import GlobalStyles from './Styles/Global';
import Banner from './HomePage/Banner';
import Section3 from './HomePage/Section3';
import SectionBreak from './HomePage/SectionBreak';
import Quotes from './HomePage/Quotes';

function HomePage() {
  return (
    <>
      <GlobalStyles />
      <Cover />
      <Section1 />
      <SectionBreak></SectionBreak>
      <Section2 />
      <Quotes />
      <Banner />
      <Section3 />
    </>
  );
}

export default HomePage;
