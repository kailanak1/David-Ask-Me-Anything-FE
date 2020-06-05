import React, { useState } from "react";
import { connect } from 'react-redux';
import { login } from "../actions/userAction";

export const Login = ({ loginError, signin }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = e => {
      setUsername(e.target.value);
    }
    
    const handlePasswordChange = e => {
      setPassword(e.target.value);
    }

    const handleSubmit = e => {
      e.preventDefault();
      e.stopPropagation();
      console.log(username, password)
      signin(username, password);
    }

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend className="text-center">Have an account?</legend>
                <div className="form-group row"></div>
                
                <div className="form-group">
                    <input
                      type="text"
                      className={`form-control radius-5px`}
                      id="usernameInput"
                      placeholder="Username"
                      onChange={handleUsernameChange}
                      value={username}
                    ></input>
                </div>
                
                <div className="form-group">
                    <input
                      type="password" 
                      className={`form-control radius-5px`}
                      id="passwordInput" 
                      placeholder="Password"
                      onChange={handlePasswordChange}
                      value={password}
                    ></input>
                </div>
                <button type="submit" className="btn btn-info radius-5px btn-block">Log in</button>
            </fieldset>
        </form>
    )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signin: (username, password) => login(username, password).then(dispatch)
  }
}

const mapStateToProps = (store) => {
    return {loginError: store.userContext.error}
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);