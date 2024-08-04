import React from 'react'
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import ContactForm from '../Components/ContactForm';

function Contact() {
  return (
    <>
      <Navbar />
      <div className='min-h-screen'>
        <ContactForm/>
      </div>
      <Footer />
    </>
  );
}

export default Contact