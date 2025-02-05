import { useState } from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Experience from './components/Experience';
import Skill from './components/Skill';
import Project from './components/Project';

import './App.css'


const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
      <Home/>
      <Experience/>
      <Skill/>
      <Project/>
    
      </div>
      
    </>
  )
}

export default App
