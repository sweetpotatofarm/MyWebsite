import React from 'react';
import './App.css';
import Intropage from './Intropage';
import Navbar from './Navbar';
import About from './About';
import Project from './Project';
import Contact from './Contact';

import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component{
  render(){
    return(
      <div>
        <div className="Content">
          <Navbar></Navbar>
          <Intropage></Intropage>
          <About></About>
          <Project></Project>
          <Contact></Contact>
        </div>
      </div>
    );
  }
}



export default App;
