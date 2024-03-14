import React, { useEffect,useState } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import { Destination } from './components/Destination';
import {MoreDestination} from './components/MoreDestination.jsx';
import { Footer } from './components/Footer.jsx';


function App() {
  
  
  return (
    <>
    <Navbar/>
    <Header/>
    <Destination/>
    <MoreDestination/>
    <Footer/>
    </>
  )
}

export default App;
