import React from 'react'
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Aboutus from '../Components/Aboutus';




function About() {
  return (
      <>
      <Navbar />
      <div className='min-h-screen'>
        <Aboutus/>
      </div>
      <Footer />
    </>
  )
}

export default About
