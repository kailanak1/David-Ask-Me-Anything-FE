import React from 'react'
import { NavLink } from 'react-router-dom';

export default class Navbar extends React.Component {

    render(){
        const link = {
            color: "white"
        }
        return(
            <div className="navbar">
                <NavLink 
                to="/"
                exact
                style={link}
                >About Me </NavLink>

                <NavLink
                to="AskMeAnything"
                exact
                style={link}
                >Ask Me Anything </NavLink>
          
             <NavLink
                to="Login"
                exact
                style={link}
                >Login </NavLink>
            </div>
        )
    };

};