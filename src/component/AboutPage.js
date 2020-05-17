import React from 'react';
import Navbar from './Navbar';
import './AboutPage.css'

class AboutPage extends React.Component{
    render(){
      return(
        <div className="AboutPage">
            <Navbar></Navbar>
            <div className="AboutPageText">About myself:</div>
        </div>
      );
    }
}

export default AboutPage;