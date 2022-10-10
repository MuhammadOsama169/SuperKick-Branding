import React from 'react'
import Navbar from './Navbar'
import Cover2 from './Cover2'
import FirstMessage from './FirstMessage'
import SecondMessage from './SecondMessage'
import ThirdMessage from './ThirdMessage'
import BannerCallToAction from './BannerCallToAction'
import Footer from './Footer'

function SecondPage() {
  return (
    <>
    <Navbar></Navbar>
    <Cover2></Cover2>
    <FirstMessage></FirstMessage>
    <SecondMessage></SecondMessage>
    <ThirdMessage></ThirdMessage>
    <BannerCallToAction></BannerCallToAction>
    <Footer></Footer>
    </>
  )
}

export default SecondPage