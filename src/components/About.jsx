import React from 'react'
import Navbar from './Navbar'
import "./assets/about.css"

function About() {
    return (
        <>
            <Navbar />
            <div>
                <h1 className="about-heading">About Us</h1>
                <p className="about-text">At BPC Portal, we're dedicated to fostering collaboration,
                    innovation, and economic growth through our secure
                    and user-friendly platform.</p>
                <div className="about-container">
                    <img className="working-img" src={require("./assets/businesswoman-working-laptop 1.png")} alt="Woman working on a laptop" />
                    <div className="about-info">
                        <h1 className="about-heading">Who We Are</h1>
                        <p className="about-info-text">At BPC Portal, we're the catalysts for collaborative success. Bringing together
                            investors, entrepreneurs, and skilled professionals, we empower dreams to
                            reality.</p>
                        <h1 className="about-heading">What We Do</h1>
                        <p className="about-info-text">
                            Our platform seamlessly connects visionaries with resources, fostering
                            innovation and growth. From secure messaging to comprehensive market
                            analysis, we're your partner in prosperity.
                        </p>
                        <h1 className="about-heading">Why Choose Us</h1>
                        <p className="about-info-text">
                            Choose BPC Portal for efficiency, trust, and boundless opportunities. Join our
                            vibrant community today and unlock your path to success.
                        </p>
                    </div>
                </div>

            </div>
        </>

    )
}

export default About