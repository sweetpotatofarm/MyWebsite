import React from 'react';
import './About.css'
import Pic1 from '../pic/profile.jpg';

class About extends React.Component{
    render(){
        return(
            <div className="About">
                <div className="AboutProfile">
                    <img src={Pic1} className="Profile"/>
                </div>
                <div className="AboutLine">
                    <div className="AboutFirstLine">Nice to meet you~</div>
                    <div className="AboutSecondLine">I'm Bob</div>
                    <div className="AboutThirdLine">a college student in Taiwan.</div>
                </div>
            </div>
        );
    }
}

export default About;