import React from 'react';

export default class Login extends React.Component{


    render(){
        return(
            <div>
                Login
                <form>
                    Username<input></input>
                    Password<input></input>
                    <input type="submit"></input>
                </form>
            </div>
        )
    };

};