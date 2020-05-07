import React from 'react';
import './Intropage.css'
import Background from './pic/background.jpg';

class Intropage extends React.Component{
    render(){
        return(
            <div className="Intropage">
                <img src={Background} className="IntroBackground"/>
                <div className="IntroText">Coding and My Life</div>
            </div>
        );
    }
}

export default Intropage;