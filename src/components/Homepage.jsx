import React from 'react'
import "./assets/homepage.css"
import Navbar from './Navbar'

function Homepage() {
  return (
    <>
    <Navbar/>
    <div className="container">
        <img src={require("./assets/homepage.png")} alt="" />
        <div className="heading">
            <h1 className="homepage-heading">WELCOME TO</h1>
            <h1 className="homepage-heading">BUSINESS PARTNERSHIP COLLABORATION</h1>
        </div>
        <div className="link-container">
            <a href="">Get Started</a>
        </div>
    </div>
    </>
  )
}

export default Homepage