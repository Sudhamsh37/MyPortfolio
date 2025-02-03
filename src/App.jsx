import React from 'react';
import Navbar from './components/navbar/navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import MyWork from './components/MyWork/MyWork';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Education from './components/Education/Education';

function App() {
  

  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Education/>
      <MyWork/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
