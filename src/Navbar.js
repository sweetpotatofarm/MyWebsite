import React from 'react';
import './Navbar.css'

class Navbar extends React.Component{
    render(){
        return(
            <div className="Navbar">
                <div className="Home">Home</div>
                <div className="Intro">Intro</div>
                <div className="Projects">Projects</div>
            </div>
        );
    }
}

export default Navbar;