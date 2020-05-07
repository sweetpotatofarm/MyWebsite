import React from 'react';
import './App.css';
import Intropage from './Intropage';
import Navbar from './Navbar';
import Project from './Project';

import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component{
  render(){
    return(
      <div>
        <div className="Content">
          <Intropage></Intropage>
          <Navbar></Navbar>
          <Project></Project>
        </div>
      </div>
    );
  }
}



export default App;
