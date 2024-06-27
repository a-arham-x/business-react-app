import React from 'react'
import "./assets/sidenavbar.css";

function AuthSideNavbar() {
    return (
        <nav className="sidenav">
            <img className="auth-nav-img" src={require("./assets/Light-brown-in-Jacket10.png")} alt="handshaking image" />
            <p className="sidenav-text">Partnership</p>
            <p className="sidenav-text">for Business Growth</p>
        </nav>
    )
}

export default AuthSideNavbar