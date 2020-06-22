import React from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import {logout} from "../actions/userAction";

const Navbar = ({logout}) => {

    const link = {
            color: "white",
            paddingTop: "25px", 
            cursor: "pointer"
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

          
            {!localStorage.getItem("user") ?  <NavLink
                to="Login"
                exact
                style={link}
                >Login </NavLink> : null}

            {!!localStorage.getItem("user") ?  <NavLink
                to="/"
                exact
                style={link}
                onClick={logout}
                >Log Out </NavLink> : null}

            </div>
        )


};

const mapStateToProps = (store) => {
    return {user: store.userContext.user}
  }

  const mapDispathToProps = (dispatch) => {
    return {
        logout: () =>(dispatch(logout()))
    }
  }
  
  export default connect(mapStateToProps, mapDispathToProps)(Navbar)