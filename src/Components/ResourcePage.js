import React from 'react';
import TopBanner from './ResourcePage/TopBanner';
import Section1 from './ResourcePage/Section1';
import Section2 from './ResourcePage/Section2';
import Banner from './ResourcePage/Banner';
import Section3 from './ResourcePage/Section3';
import Section4 from './ResourcePage/Section4';
import Section5 from './ResourcePage/Section5';
import Slider from './ResourcePage/Slider';
import 'swiper/css/bundle';

function ResourcePage() {
  return (
    <>
      <TopBanner></TopBanner>
      <Slider></Slider>
      <Section1></Section1>
      <Section2></Section2>
      <Section3></Section3>
      <Section4></Section4>
      <Section5></Section5>
      <Banner></Banner>
      <Section3></Section3>
    </>
  );
}
export default ResourcePage;
