import React from 'react';
import logo from'./logo.png';
import './Login.css';


const Login = () => (
    
    <div className="ui middle aligned center aligned grid" id="grid">
    <div className="column" id="column">
        <h2 className="ui grey image header">
        <img src={logo} className="image" id="image" alt="logo"/>
        <div className="content">
            Log in to your account
        </div>
        </h2>
        <form className="ui large form">
        <div className="ui stacked segment">
            <div className="field">
            <div className="ui left icon input">
                <i className="user icon"></i>
                <input type="text" name="email" placeholder="E-mail address"/>
            </div>
            </div>
            <div className="field">
            <div className="ui left icon input">
                <i className="lock icon"></i>
                <input type="password" name="password" placeholder="Password"/>
            </div>
            </div>
            <div className="ui fluid large red submit button">Login</div>
        </div>

        <div className="ui error message"></div>

        </form>

        <div className="ui message">
        New to us? <a href="#">Sign Up</a>
        </div>
    </div>
    </div>

);

export default Login;