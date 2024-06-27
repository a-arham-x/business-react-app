import React from 'react'
import "./assets/auth.css";

function Login() {
    return (
        <div className="login-page-container">
            <h1 className="auth-heading">WELCOME BACK EXCLUSIVE MEMBER</h1>
            <p className="login-text">LOGIN TO CONTINUE</p>
            <div className="form-container">
                <h1 className="login-heading">Log In</h1>
                <form action="" className="form-class">
                    <div className="input-container">
                        <img className="input-img" src={require("./assets/icon-mail.png")} alt="mail icon" />
                        <input className="input-field" type="email" placeholder="example@email.com" name="email" />
                    </div>
                    <div className="input-container">
                        <img className="input-img" src={require("./assets/lock.png")} alt="mail icon" />
                        <input className="input-field" type="password" placeholder="***********" name="password" />
                    </div>
                    <div className="auth-button">Log In <img className="arrow-img" src={require("./assets/arrow-right.png")} alt="arrow" /></div>
                    <p className="forgot-password">Forgot a Password?</p>
                    <div className="or-container">
                        <img src={require("./assets/Line 2.png")} alt="Line" />
                        <p className="or">Or</p>
                        <img src={require("./assets/Line 2.png")} alt="Line" />
                    </div>
                    <div className="third-party-auth">
                        <img src={require("./assets/facebooklogo.png")} alt="Facebook Logo" />
                        <p>Continue with Facebook</p>
                    </div>
                    <div className="third-party-auth">
                        <img src={require("./assets/googlelogo.png")} alt="Google Logo" />
                        <p>Continue with Google</p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login