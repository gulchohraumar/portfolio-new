import React from 'react';
import './App.css';
import Navbar from './components/header/navbar';
import Home from './components/home/home';
import Skills from './components/skills/skills';
import About from './components/about/about';
import Portfolio from './components/portfolio/portfolio';
import Experience from './components/experience/experience';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function App() {
  return (
    <>
      <Navbar />
      <div className="py-3 px-5 main">
        <div className="main-content py-3">
          <Home />
          <div className="mt-5 pt-5">
            <About />
          </div>

          <Portfolio />
          <Skills />
          <Experience />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
