import React from 'react'
import AuthNavbar from './AuthNavbar'
import AuthSideNavbar from './AuthSideNavbar'
import Login from './Login'
import Signup from './Signup'
import { useLocation } from 'react-router-dom'
import "./assets/auth.css"

function AuthPage() {
    const location = useLocation();
    return (
        <>
            <AuthNavbar />
            <div className="auth-page-container">
                <AuthSideNavbar />
                {location.pathname === "/auth/login" && <Login />}
                {location.pathname === "/auth/signup" && <Signup />}
                <div className="info">
                    <img src={require("./assets/info.png")} alt="info" />
                    <p>Need help?</p>
                </div>
            </div>
        </>
    )
}

export default AuthPage