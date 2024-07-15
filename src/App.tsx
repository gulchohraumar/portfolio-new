import React from 'react';
import './App.css';
import Navbar from './components/header/navbar';
import Home from './components/home/home';
import Skills from './components/skills/skills';
import About from './components/about/about';

function App() {
  return (
    <>
      <Navbar />
      <div className="py-3 px-5 main bg-danger">
        <div className="main-content py-3">
          <Home />
          <div className="mt-5 pt-5">
            <About />
          </div>
          <Skills />
        </div>
      </div>
    </>
  );
}

export default App;
