import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './App.css';  
import Header from './Components/Header';
import Features from './Components/Features';
import Showcase from './Components/Showcase';
import Footer from './Components/Footer';
import Records from './Components/Records';



class App extends Component  {
 render() {
   return (
    
    <div>
    <Header/>
    <Features/>
    <Showcase/>
    <Records/>
    <Footer/>
   
  </div>
    
  );

 }

}

export default App;
