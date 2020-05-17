import React from 'react';
import Navbar from './Navbar';
import './ProjectPage.css'

class ProjectPage extends React.Component{
    render(){
      return(
        <div className="ProjectPage">
            <Navbar></Navbar>
            <div className="ProjectPageText">These are my projects.</div>
        </div>
      );
    }
}

export default ProjectPage;