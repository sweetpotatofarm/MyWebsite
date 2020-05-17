import React from 'react';
import './App.css';
import PageHome from './component/HomePage.js'
import PageAbout from './component/AboutPage.js'
import PageProject from './component/ProjectPage.js'

import 'bootstrap/dist/css/bootstrap.min.css'
import { 
  BrowserRouter as Router, 
  Route, 
  Link, 
  Switch 
} from 'react-router-dom'; 

class App extends React.Component{
  render(){
    return(
      <Router>
        <div className="Content">
          <Switch>
            <Route exact path='/' component={PageHome}></Route>
            <Route path='/About' component={PageAbout}></Route>
            <Route path='/Projects' component={PageProject}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}



export default App;
