import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

//components 
import Navbar from './components/Navbar';
import AskMeAnyting from './components/AskMeAnything'

import './App.css';

export default class App extends React.Component{
  



  render(){
    return(
      <div className="App">
        <Router>
          <header className="App-header">
            
          <Navbar />
          </header>
        </Router>
      </div>
    )
  }
}

export default App;
