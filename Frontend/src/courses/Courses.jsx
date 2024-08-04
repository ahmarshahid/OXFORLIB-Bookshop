import React from 'react'
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Course from '../Components/Course';

function Courses() {
  return (
    <>
      <Navbar />
      <div className='min-h-screen'>
        <Course />
      </div>
      <Footer />
    </>
  );
}

export default Courses
