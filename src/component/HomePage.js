import React from 'react';
import Intropage from './Intropage';
import Navbar from './Navbar';
import About from './About';
import Project from './Project';

class HomePage extends React.Component{
    render(){
      return(
        <div className="Content">
            <Navbar></Navbar>
            <Intropage></Intropage>
            <About></About>
            <Project></Project>
        </div>
      );
    }
}

export default HomePage;