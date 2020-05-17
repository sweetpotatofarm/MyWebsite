import React from 'react';
import './Navbar.css'
import Home from './Home'
import About from './AboutPage'
import Project from './ProjectPage'
import { 
    BrowserRouter as Router, 
    Route, 
    Link, 
    Switch 
  } from 'react-router-dom'; 

class Navbar extends React.Component{
    render(){
        return(
            <div className="Navbar">
                <div className="Icon"></div>
                <Link to="/" className="Home">Home</Link> 
                <Link to="/About" className="NavbarAbout">About</Link>
                <Link to="/Projects" className="Projects">Projects</Link>
            </div> 
        );
    }
}

export default Navbar;