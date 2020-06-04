import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

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
          path="/" 
          component={About}/>

          <Route exact path="/AskMeAnything" component={AskMeAnything}/>

        </Router>
      </div>
    )
  }
};
