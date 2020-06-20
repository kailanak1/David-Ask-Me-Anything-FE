import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

//components 
import Navbar from './components/Navbar';
import AskMeAnything from './components/AskMeAnything';
import About from './components/About';
import Login from './components/Login';
import WineList from './components/WineList';
import FourOhFour from './components/FourOhFour'; 


import './App.css';

export default class App extends React.Component{
  
  render(){
    return(
      <div className="App">
        <Router>
          <header className="App-header">
            
          <Navbar />
          </header>

          <Switch>
          <Route 
          exact
          path="/" 
          component={About}/>

          <Route 
          exact 
          path="/AskMeAnything" 
          component={AskMeAnything}/>

          <Route 
          exact 
          path="/Login" 
          component={Login}/>

          <Route 
          exact 
          path="/winelist"
          component={WineList} />

          <Route 
          component={FourOhFour}/>

          </Switch>

        </Router>
      </div>
    )
  }
};
