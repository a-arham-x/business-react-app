import React from 'react'
import Navbar from './Navbar'
import "./assets/services.css"

function Services() {
  return (
    <>
    <Navbar/>
    <h1 className="services-heading">Our Best Services</h1>
    <h1 className="services-heading">For Your Convinience</h1>
    <p className="services-text">
    Discover how our platform revolutionizes collaboration, innovation, and economic growth. Experience the
    convenience of connecting investors, entrepreneurs, and skilled individuals seamlessly. Unlock endless
    possibilities for success with BPC Portal today.
    </p>
    <div className="services">
        <div className="service">
            <img src={require("./assets/investor 1.png")} alt="Investor 1" />
            <h2 className="investor-heading">Investor</h2>
            <p className="investor-text">
            Explore exclusive investment
            prospects through BPC Portal. Dive
            into a diverse array of visionary
            entrepreneurs and cutting-edge
            business concepts. Seamlessly
            connect with potential partners and
            seize lucrative ventures. Elevate your
            investment portfolio effortlessly with
            confidence and convenience.
            </p>
        </div>
        <div className="service">
            <img src={require("./assets/investor 2.png")} alt="Investor 2" />
            <h2 className="investor-heading">Entrepreneur</h2>
            <p className="investor-text">
            Explore exclusive investment
            prospects through BPC Portal. Dive
            into a diverse array of visionary
            entrepreneurs and cutting-edge
            business concepts. Seamlessly
            connect with potential partners and
            seize lucrative ventures. Elevate your
            investment portfolio effortlessly with
            confidence and convenience.
            </p>
        </div>
        <div className="service">
            <img src={require("./assets/investor 3.png")} alt="Investor 3" />
            <h2 className="investor-heading">Skilled Person</h2>
            <p className="investor-text">
            Explore exclusive investment
            prospects through BPC Portal. Dive
            into a diverse array of visionary
            entrepreneurs and cutting-edge
            business concepts. Seamlessly
            connect with potential partners and
            seize lucrative ventures. Elevate your
            investment portfolio effortlessly with
            confidence and convenience.
            </p>
        </div>
    </div>
    </>
  )
}

export default Services