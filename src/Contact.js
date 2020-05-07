import React from 'react';
import './Contact.css'
import GitHubButton from '../node_modules/react-github-button' 

class Contact extends React.Component{
    render(){
        return(
            <div className="Contact">
                <GitHubButton href="https://github.com/sweetpotatofarm" aria-label="Follow @sweetpotatofarm on GitHub">Follow @sweetpotatofarm</GitHubButton>
            </div>
        );
    }
}

export default Contact;