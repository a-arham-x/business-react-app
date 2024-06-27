import React from 'react'
import "./assets/navbar.css"

function Navbar() {
  return (
    <nav>
      <div className="container-1">
        <img src={require("./assets/logo 6.png")} alt="logo" />
        <img src={require("./assets/nav-image-1.png")} alt="logo" />
      </div>
      <div className="links-container">
        <a href="/">Home</a>
        <a href="about">About</a>
        <a href="/auth/login">Login</a>
      </div>
    </nav>
  )
}

export default Navbar