import React from 'react'
import "./assets/navbar.css"
import { useLocation, useNavigate } from 'react-router-dom'

function AuthNavbar() {
  const navigate = useNavigate();
  const location = useLocation();
  if (location.pathname === "/signup") {
    return (
      <nav>
        <div className="return">
          <img className="left-img" src={require("./assets/chevron-left.png")} alt="arrow image" />
          <p className="return-txt">Return Home</p>
        </div>
        <div className="auth-container-1">
          <img src={require("./assets/logo 6.png")} alt="logo" />
          <img src={require("./assets/nav-image-1.png")} alt="logo" />
        </div>
        <div className="auth-div">
          <p className="auth-text">Already a Member?</p>
          <a className="auth-link" href="/auth/login">LOG IN NOW</a>
        </div>
      </nav >
    )
  } else {
    return (
      <nav>
        <div className="return">
          <img className="left-img" src={require("./assets/chevron-left.png")} alt="" />
          <a href="/" className="return-txt">Return Home</a>
        </div>
        <div className="auth-container-1">
          <img src={require("./assets/logo 6.png")} alt="logo" />
          <img src={require("./assets/nav-image-1.png")} alt="logo" />
        </div>
        <div className="auth-div">
          <p className="auth-text">Not a Member Yet?</p>
          <a className="auth-link" href="/auth/signup">JOIN NOW</a>
        </div>
      </nav>
    )
  }
}

export default AuthNavbar