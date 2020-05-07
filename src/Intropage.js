import React from 'react';
import './Intropage.css'
import Mountain from './pic/mountain.jpg';

class Intropage extends React.Component{
    render(){
        return(
            <div className="Intropage">
                <img src={Mountain} className="IntroBackground"></img>
                <div className="IntroText">Coding, and Life</div>
            </div>
        );
    }
}

export default Intropage;