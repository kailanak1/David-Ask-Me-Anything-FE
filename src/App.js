import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

//components 
import Navbar from './components/Navbar';
import AskMeAnything from './components/AskMeAnything';
import About from './components/About';

import './App.css';

export default class App extends React.Component{
  



  render(){
    return(
      <div className="App">
        <Router>
          <header className="App-header">
            
          <Navbar />
          </header>

          <Route 
          exact
          path="/" 
          component={About}/>

          <Route exact path="/AskMeAnything" component={AskMeAnything}/>

        </Router>
      </div>
    )
  }
};
